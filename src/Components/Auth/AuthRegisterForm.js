import React from "react";
import { Link } from "react-router-dom";


// STATELESS CHILD COMPONENT
const AuthRegisterForm = ({ user, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="form-group">
          <br />
          <label>First Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="first-name-input"
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            placeholder="first name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="last-name-input"
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            placeholder="last name"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            placeholder="email"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Username</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="username-input"
            value={user.username}
            onChange={onChange}
            name="username"
            placeholder="username"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            placeholder="password"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label>Favorite Sport</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="favorite-sport-input"
            value={user.favoriteSport}
            onChange={onChange}
            name="favoriteSport"
            placeholder="favorite sport"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <br />
          <button type="submit" className="btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </form>
      <br />
      <button>
      <Link to="/auth">Go back</Link>
    </button>
      <hr />
        <p class="option">
          By creating an account you agree to our Terms and Privacy.
        </p>
    </div>
  );
};

export default AuthRegisterForm;
