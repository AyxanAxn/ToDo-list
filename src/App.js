import "./App.css";
import AddInput from "./Components/AddInput/AddInput";
import React, { useState } from "react";
import Item from "./Components/Items/Item/Item";

const startValues = [
  {
    isChecked: true,
    description: "Work",
    id: 0,
  },
];

const allFilters = {
  showAll: 0,
  showDone: 1,
  showNotDone: 2,
};

function App() {
  const [tasks, setTasks] = new useState(startValues);
  const [filter, setFilter] = new useState(allFilters.showAll);
  function removeTask(index) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== index));
  }

  function updateTaskDescription(index, newDescription) {
    const newTasks = tasks.map((item) => {
      if (item.id === index) {
        return { ...item, description: newDescription };
      }
    });
    setTasks(newTasks);
  }

  function addTask(task) {
    if (task.description != "") {
      setTasks((oldArray) => [
        ...oldArray,
        { ...task, id: oldArray[oldArray.length - 1].id + 1 },
      ]);
    }
  }

  function taskIsChecked(index, isChecked) {
    const newTasks = tasks.map((item) => {
      if (item.id === index) {
        return { ...item, isChecked: isChecked };
      } else if (item.id !== index) {
        return item;
      }
    });
    setTasks(newTasks);
  }

  function removeAllTasks() {
    setTasks([]);
  }
  function removeCheckedTasks() {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.isChecked));
  }

  function filterAllTasks() {
    setFilter(allFilters.showAll);
  }

  function filterDoneTasks() {
    setFilter(allFilters.showDone);
  }

  function filterNotDoneTasks() {
    setFilter(allFilters.showNotDone);
  }

  let jsxToRender;
  switch (filter) {
    case allFilters.showAll:
      jsxToRender = tasks.map((item, index) => (
        <Item
          key={index}
          taskRemoved={removeTask}
          taskDescriptionUpdated={updateTaskDescription}
          taskChecked={taskIsChecked}
          task={item}
        />
      ));
      break;
    case allFilters.showDone:
      jsxToRender = tasks.map(
        (item, index) =>
          item.isChecked && (
            <Item
              key={index}
              taskRemoved={removeTask}
              taskDescriptionUpdated={updateTaskDescription}
              taskChecked={taskIsChecked}
              task={item}
            />
          )
      );
      break;
    case allFilters.showNotDone:
      jsxToRender = tasks.map(
        (item, index) =>
          !item.isChecked && (
            <Item
              key={index}
              taskRemoved={removeTask}
              taskDescriptionUpdated={updateTaskDescription}
              taskChecked={taskIsChecked}
              task={item}
            />
          )
      );
      break;
  }

  return (
    <div className="App">
      <AddInput taskAdded={addTask} />
      <div>
        <button onClick={filterAllTasks} className="button">
          All
        </button>
        <button onClick={filterDoneTasks} className="button">
          Done
        </button>
        <button onClick={filterNotDoneTasks} className="button">
          Todo
        </button>
      </div>

      <div className="all-items">{jsxToRender}</div>

      <button onClick={removeAllTasks} className="button">
        Delete all tasks
      </button>
      <button onClick={removeCheckedTasks} className="button">
        Delete done tasks
      </button>
    </div>
  );
}
export default App;
