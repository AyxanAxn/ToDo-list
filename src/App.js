import logo from './logo.svg';
import './App.css';
import Items from './Components/Items/Items';
import AddInput from './Components/AddInput/AddInput';
import React, { useState } from 'react';
import { Modal } from 'bootstrap';


const startValues = [
  {
    id: 0,
    description: "Work",
    isChecked: true
  }
]
function App() {

  const [tasks, setTasks] = new useState(startValues);

  function addTask(task)
  {
    if(task.description != ""){ 
      setTasks(oldArray => [...oldArray, {...task, id: oldArray.length}] );
    }
  }
  
  function removeElement(index){
    setTasks(prevTasks => prevTasks.filter(task => task.id !== index));
  }

  function taskIsChecked(index, isChecked)
  {
    setTasks((lastArray)=>{
        lastArray[index].isChecked = isChecked
        return lastArray
      })
  }

  function editList(index, description){
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === index) {
          return { ...task, description: description };
        }
        return task;
      });
    });
  }
  
  return (
    <div className="App">
      <AddInput taskAdded = {addTask} />
      <Items allTasks = {tasks} taskChecked={taskIsChecked} removeTask = {removeElement} editList = {editList}/>
    </div>
  );
}
export default App;
