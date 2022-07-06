import React, { useEffect, useState } from "react";
import { checkUser } from "../../Common/Services/AuthService";
import AuthLoginForm from "./AuthLoginForm";

const AuthLogin = () => {
  const [authUser, setAuthUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (authUser && add) {
      checkUser(authUser).then((userChecked) => {
        if (userChecked) {
          alert(`${userChecked.get("firstName")}, you successfully logged in!`);
        }
        // TODO: redirect user to main app
        setAdd(false);
      });
    }
  }, [authUser, add]);

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
    <div>
      <AuthLoginForm
        user={authUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthLogin;
