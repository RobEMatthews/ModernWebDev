import React, { useEffect, useState } from "react";
import { createUser } from "../../Common/Services/AuthService";
import AuthRegisterForm from "./AuthRegisterForm";
import { useHistory } from "react-router-dom";
import Parse from "parse";

// STATEFUL PARENT COMPONENT
const AuthRegister = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    favoriteSport: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  
  // check = true if user is already logged in
  const check = !!(Parse.User.current() && Parse.User.current().authenticated);
  
  // useEffect that run when changes are made to the state variable flags
  const history = useHistory();
  useEffect(() => {

    // prevents logged in user from accessing this component
    if (check) {
      history.push("/favorites");
    }

    console.log("NEWUSER", newUser);
    console.log("ADD", add);
    if (newUser && add) {
      console.log("GOT HERE!!!!!!");
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
        }

        setAdd(false);
      });
    }
  }, [newUser, add, check, history]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
    // history.push("/favorites");
  };

  return (
    <div>
      <AuthRegisterForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthRegister;
