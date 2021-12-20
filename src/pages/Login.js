import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: "",
      Login: 0,
      error: "",
    };
  }

  handleChange = (e, attr) => {
    this.setState({
      [attr]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    for (let i = 0; i < localStorage.length; i++) {
      let UserEmail = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (
        UserEmail.Password === this.state.Password &&
        UserEmail.Email === this.state.Email
      ) {
        sessionStorage.setItem(
          UserEmail.Email,
          localStorage.getItem(localStorage.key(i))
        );
        this.setState({
          Login: 1,
        });
        this.setState({ error: "" });
      } else {
        this.setState({ error: "true" });
      }
    }

    e.target.reset();
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="login">
          <span className="loginTitle">Login</span>
          <form className="loginForm" onSubmit={this.handleSubmit}>
            <label>Email</label>
            <input
              className="loginInput"
              type="text"
              placeholder="Enter your email..."
              onChange={(e) => {
                this.handleChange(e, "Email");
              }}
            />
            <label>Password</label>
            <input
              className="loginInput"
              type="password"
              onChange={(e) => {
                this.handleChange(e, "Password");
              }}
              placeholder="Enter your password..."
            />
            <br />
            {this.state.error ? (
              <p style={{ color: "red" }}>Email or Password is incorrect</p>
            ) : (
              ""
            )}
            <button className="loginButton">Login</button>
          </form>
          {this.state.Login == 1 ? (
            <div>
              <h1 style={{ color: "black" }}> Welcome</h1>
            </div>
          ) : (
            ""
          )}
          {this.state.Login == 1 ? (
            <button
              style={{
                backgroundColor: "#DF4242",
                position: "absolute",
                top: "700px",
                left: "710px",
                width: "120px",
                height: "50px",
                borderRadius: "5px",
                border: "none",
                fontSize: "1rem",
                color: "White",
              }}
            >
              <Link to="/Tools">Go To Tools</Link>
            </button>
          ) : (
            ""
          )}
          <br />
        </div>
      </div>
    );
  }
}

export default Login;
