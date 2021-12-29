import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Tools.css";

function Tools() {
  return (
    <>
      <Navbar />
      <h1> Management Tools </h1>
      <div className="tools">
        <div className="todo">
          <img src="./Todo.png" alt="Todo-List"></img>
          <h3>To Do List</h3>
          <button className="btn-tools">
            <span>
              <Link to="/Todo"> Let's go</Link>
            </span>
          </button>
        </div>
        <div className="Expense">
          <img src="./Expense.jpg" alt="Expense-Tracker"></img>
          <h3>Expense Tracker</h3>
          <button className="btn-tools">
            <Link to="/Expense-Tracker">Let's go </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Tools;
