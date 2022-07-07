import React from "react";
// import DisplayData from "./DisplayData.js";
import Parse from "parse";
import { Link, useHistory } from "react-router-dom";

/* MAIN PARENT COMPONENT */
const AuthModule = () => {
  const history = useHistory();

  const currentUser = Parse.User.current();
  // Parse.User.authenticated()

  const buttonHandler1 = () => {
    history.push("/AuthRegisterForm");
  };

  const buttonHandler2 = () => {
    history.push("/AuthLoginForm");
  };

  return (
    <><h1 class="title">SportEventTracker</h1>

    <div>
    <p class="option">
      Please click this button to create a SportEventTracker account.
    </p>
    <Link to="/register">
      <button onClick={buttonHandler1}>Register</button>
    </Link>
    <br />
    <br />
    <Link to="/login">
      <button onClick={buttonHandler2}>Login</button>
    </Link>
  </div>

    <hr /></>

  );
};

export default AuthModule;