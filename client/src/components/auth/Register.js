import React, { Component } from "react";
import axios from "axios";
import "./auth.css";

export default class Login extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const {email, password} = this.state;
    
    axios.get('http://localhost:5000/api/profile/me', { email, password })
      .then(res => {
        console.log(res)
      })
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
      <h1>Register Page</h1>
        <div className="login-page">
          <div className="form">
            <form className="register-form">
              <input type="text" placeholder="name" />
              <input type="password" placeholder="password" />
              <input type="text" placeholder="email address" />
              <button>create</button>
              <p className="message">
                Already registered? <a href="#">Sign In</a>
              </p>
            </form>

            <form className="login-form" onSubmit={this.onSubmit}>
              <input
                type="email"
                placeholder="email"
                onChange={this.onEmailChange}
              />
              <input
                type="password"
                placeholder="password"
                onChange={this.onPasswordChange}
              />
              <button type="submit">login</button>
              <p className="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
