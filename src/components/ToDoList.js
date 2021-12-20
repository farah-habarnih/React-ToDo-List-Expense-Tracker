import React from "react";
import ToDo from "./ToDo";
import "./ToDoList.css";
import { Link } from "react-router-dom";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <div className="btn-list">
        <button className="btn-clear" onClick={handleFilter}>
          Clear Completed
        </button>
        <button className="btn-clear">
          <Link to="/Tools">Back to Tools</Link>
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
