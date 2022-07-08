import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Parse from "parse";

/* STATEFUL PARENT COMPONENT */
const AuthModule = () => {
  const history = useHistory();
  
  const check = !!(Parse.User.current() && Parse.User.current().authenticated);

  useEffect(() => {
      if (check) {
              history.push("/favorites");
          }
  }, [check, history]);

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