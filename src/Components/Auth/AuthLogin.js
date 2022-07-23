import React, { useEffect, useState } from "react";
import { checkUser } from "../../Common/Services/AuthService";
import AuthLoginForm from "./AuthLoginForm";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Parse from "parse";

// STATEFUL PARENT COMPONENT
const AuthLogin = () => {

  const [authUser, setAuthUser] = useState({
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // useEffect that run when changes are made to the state variable flags
  const history = useHistory();
  
  const check = !!(Parse.User.current() && Parse.User.current().authenticated);

  useEffect(() => {
    if (check) {
      history.push("/favorites");
    }
    if (authUser && add) {
      checkUser(authUser).then((userChecked) => {
        if (userChecked) {
          console.log(userChecked);
          alert(`${userChecked.get("firstName")}, you successfully logged in!`);
          history.push("/favorites");
        }

        setAdd(false);
      });
    }
  }, [authUser, add, history, check]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setAuthUser({
      ...authUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  return (
    <><div>
      <AuthLoginForm
        user={authUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>

    <div>
    {/* go back link */}
    <br />
    <button>
      <Link to="/auth" class="goBack">Go back</Link>
    </button>
    </div></>
  );
};

export default AuthLogin;
