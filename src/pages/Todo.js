import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

function Todo() {
  const [toDoList, setToDoList] = useState([]);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Navbar />
      <div>
        <h1>To Do List</h1>
      </div>
      <ToDoForm addTask={addTask} />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ff5500"
          fill-opacity="1"
          d="M0,288L24,277.3C48,267,96,245,144,234.7C192,224,240,224,288,202.7C336,181,384,139,432,117.3C480,96,528,96,576,112C624,128,672,160,720,154.7C768,149,816,107,864,117.3C912,128,960,192,1008,213.3C1056,235,1104,213,1152,170.7C1200,128,1248,64,1296,69.3C1344,75,1392,149,1416,186.7L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Todo;
