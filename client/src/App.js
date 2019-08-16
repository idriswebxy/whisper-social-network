import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import Login from "../src/components/auth/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Navbar/Navbar";
export default class App extends Component {
  state = {
    view: "login"
  };

  render() {
    let { view } = this.state;

    return (
      <Router>
        <div> 
          <Navbar />
          <Route path="/" component={Login} />
          <Route path="/register" component={Register}/>
        </div>
      </Router>
    );
  }
}
