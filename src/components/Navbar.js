import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <img src="./Logo2.png" alt=""></img>
      </div>
      <div className="nav-center">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <a href="https://www.instagram.com/eng_farah92/?r=nametag">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/farah-habarnih">
              <i class="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/farah-habarnih/">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
