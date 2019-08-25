import React, { Component, Fragment } from "react";
import Navbar from "./components/Layout/Navbar";
import Landing from "./components/Layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
        </Fragment>
      </Router>
    );
  }
}
