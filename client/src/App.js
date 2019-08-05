import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

export default class App extends React.Component {
  state = {
    view: ""
  };

  componentDidMount() {
    this.setState({ view: "login" });
  }

  render() {
    let { view } = this.state;

    if (view === "login") {
      return (
        <div>
          <Login />
        </div>
      );
    } else if (view === "sign") {
      return 0;
    } else {
      return 0;
    }
  }
}
