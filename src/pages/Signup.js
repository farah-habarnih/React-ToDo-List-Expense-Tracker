import React from "react";
import Navbar from "../components/Navbar";
import "./Signup.css";

import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      Signup: 0,
      Email: "",
      password: "",
      UserName: "",
    };
  }

  handleChange = (e, attr) => {
    this.setState({ [attr]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password.length >= 8) {
      let user = {
        name: e.target.UserName.value,
        Email: e.target.Email.value,
        Password: e.target.password.value,
        Signup: 1,
      };
      this.setState({
        Signup: 1,
      });
      localStorage.setItem(this.state.Email, JSON.stringify(user));
    }
    e.target.reset();
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="formSignup">
          <h1 className="SignupTitle">Sign Up </h1>
          <form onSubmit={this.handleSubmit}>
            <label>Username</label>
            <input
              type="name"
              placeholder="Enter your Username.."
              name="UserName"
              onChange={(e) => {
                this.handleChange(e, "UserName");
              }}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your Email.."
              name="Email"
              onChange={(e) => {
                this.handleChange(e, "Email");
              }}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your Password.."
              name="password"
              onChange={(e) => {
                this.handleChange(e, "password");
              }}
            />
            {this.state.password.length < 8 ? (
              <p style={{ color: "#F34F83" }}>
                Password should be at least 8 characters
              </p>
            ) : (
              ""
            )}
            <br />

            <button type="submit">Signup</button>
          </form>
          {this.state.Signup == 1 ? (
            <button
              style={{
                backgroundColor: "#DF4242",
                position: "absolute",
                top: "700px",
                left: "710px",
                width: "120px",
                height: "50px",
                border: "none",
                fontSize: "1.5rem",
                borderRadius: "5px",
              }}
            >
              <Link to="./Login">Login</Link>
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

export default Signup;
