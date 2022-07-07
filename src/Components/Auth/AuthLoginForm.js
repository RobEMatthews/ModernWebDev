import React from "react";

const AuthLoginForm = ({ user, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="form-group">
        <label for="email"><b class="question">Email</b></label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            required
          />
        </div>{" "}
        <div className="form-group">
        <label for="psw"><b class="question">Password</b></label>
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn-primary" onSubmit={onSubmit}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthLoginForm;
