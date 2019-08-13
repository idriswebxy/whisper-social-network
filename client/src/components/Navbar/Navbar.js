import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              SocialHub
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    SignIn
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Register
                  </a>
                </li>
              
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
