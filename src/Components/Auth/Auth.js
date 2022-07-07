import React from "react";
import DisplayData from "./DisplayData.js";
import { Link } from "react-router-dom";

/* MAIN PARENT COMPONENT */
const AuthModule = () => {
  return (
    <><h1 class="title">SportEventTracker</h1>

    <div>
    <p class="option">
      Please click this button to create a SportEventTracker account.
    </p>
    <Link to="/register">
      <button>Register</button>
    </Link>
    <br />
    <br />
    <Link to="/login">
      <button>Login</button>
    </Link>
  </div>

    <hr />

  <div>
    <DisplayData />
  </div></>

  );
};

export default AuthModule;