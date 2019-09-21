import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Alert from "./components/layout/Alert";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import "@fortawesome/fontawesome-free";
import setAuthToken from "./utils/setAuthToken";
import "./App.css"

if (localStorage.token) {
  setAuthToken(localStorage.token);
}



const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
           <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
