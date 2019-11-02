<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import './App.css'

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
        <div className="App">
          <Navigation />
          <Particles className="particles" params={particlesOptions} />
          <Route path="/signin" component={Signin} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}
=======
import React, { Fragment, useEffect } from "react";
import Navbar from "./components/Layout/Navbar";
import Landing from "./components/Layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Alert from "./components/Layout/Alert";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/Routing/PrivateRoute";
import CreateProfile from "./components/ProfileForms/CreateProfile";
import EditProfile from "./components/ProfileForms/EditProfile";
import Profiles from "../src/components/Profiles/Profiles";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";
import NotFound from "./components/Layout/NotFound";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path="/posts/:id" component={Post} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <Route component={NotFound} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
>>>>>>> 6028a6025800bc0e4673ada4da1b73dbd333d5bd
