import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    location: "",
    bio: "",
    status: ""
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const { location, status, bio } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile
      </p>
      <form className="form">
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        {/* First Name */}
        <div className="form-group">
          <input
            type="text"
            placeholder="FirstName"
            name="firstName"
            onChange={e => onChange(e)}
          />
        </div>
        {/* Last Name */}
        <div className="form-group">
          <input
            type="text"
            placeholder="LastName"
            name="lastName"
            onChange={e => onChange(e)}
          />
        </div>
        {/* Location */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        {/* Bio */}
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" href="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProfile }
)(CreateProfile);
