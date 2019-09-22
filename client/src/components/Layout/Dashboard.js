import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

const Dashboard = ({ userName, isAuthenticated }) => {


  if (isAuthenticated === false) {
    return <Redirect to="/" />;
  }
  
  return (
    <div>
      <h1>Welcome to your page {userName}</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  userName: state.auth.user.name,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Dashboard);
