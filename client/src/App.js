import React, { Component } from "react";
// import Login from "./components/Login";

export default class App extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/auth")
    .then(res => res.text())
    .then(body => console.log(body));
  };

  onChange = e => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
    <div>
      <form onSubmit={this.onSubmit}>
      Name:
        <input type="email"/>
        Password:
        <input type="password"/>
        <button onClick={this.onSubmit} >Submit</button>
      </form>
    </div>
    )
  }
}
