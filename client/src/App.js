import { BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from "react";
import Login from "../src/components/auth/Login";
import Navbar from "./components/Navbar/Navbar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Login />
        </div>
      </Router>
    );
  }
}
