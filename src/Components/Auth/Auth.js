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
    <h2 class="option">
      Create a SportEventTracker account:
    </h2>
    <Link to="/register">
      <button onClick={buttonHandler1}>Register</button>
    </Link>
    <br />
    <br />
    <h2 class="option">
      Login to your SportEventTracker account:
    </h2>
    <Link to="/login">
      <button onClick={buttonHandler2}>Login</button>
    </Link>
  </div>

    <hr /></>

  );
};

export default AuthModule;