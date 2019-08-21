import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Navigation />
            <Particles className="particles" params={particlesOptions} />
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
          </div>
        </Switch>
      </Router>
    );
  }
}
