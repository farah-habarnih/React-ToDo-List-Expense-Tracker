import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src="./headerimg.png" alt=""></img>
      <div className="header-title">
        <h1>MANAGEN </h1>
        <h1> To Help You Manage Your Life</h1>
        <h1> Let's Started </h1>
        <div className="header-btn">
          <button className="btn-login">
            <span>
              <Link to="/Login">Log In</Link>
            </span>
          </button>
          <button className="btn">
            <span>
              <Link to="/Signup">Sign up</Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
