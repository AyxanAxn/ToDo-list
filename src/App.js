import './App.css';
import Items from './Components/Items/Items';
import AddInput from './Components/AddInput/AddInput';
import React, { useState } from 'react';


const startValues = [
  {
    id: 0,
    description: "Work",
    isChecked: false
  }
]
function App() {
  const [tasks, setTasks] = useState(startValues);
  const [idCounter, setIdCounter] = useState(1);
  
  // useEffect(() => {
  //   console.log("Tasks: ", tasks);
  // }, [tasks])

  function addTask(task)
  {
    if(task.description !== ""){ 
      setIdCounter(prevCount=>prevCount+1)
      setTasks(oldArray => [...oldArray, {...task, id: idCounter}] );
    }
  }
  
  function removeElement(index){
    setTasks(prevTasks => prevTasks.filter(task => task.id !== index));
  }

  function removeAllElements(){
    setTasks([]);
  }

  function removeCheckedElements() {
    setTasks(prevTasks => prevTasks.filter(task => !task.isChecked));
  }

  function taskIsChecked(index, isChecked)
  {
    console.log("Is checked func : ")
    const newTasks = tasks.map(item =>
      {
        if(item.id === index)
        {
          console.log("If statement")
          return {...item, isChecked: isChecked}
        }
       else if(item.id !== index) {
          console.log("else statement")
          return item;
        }
      })
    setTasks(newTasks)
  }

  function editList(index, description){
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === index) {
          return { ...task, description: description };
        }
        return task;
      })
    })
  }
  return (
    <div className="App">
      <AddInput taskAdded = {addTask} />
      <Items allTasks = {tasks} taskChecked={taskIsChecked} removeTask = {removeElement} editList = {editList}/>
      <button className = "button" onClick={removeAllElements}>Remove all tasks</button>
      <button className = "button" onClick={removeCheckedElements}>Remove checked tasks</button>
    </div>
  )
}

export default App;