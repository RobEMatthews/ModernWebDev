import React, { useEffect, useState } from "react";
import { createUser } from "../../Common/Services/AuthService";
import AuthRegisterForm from "./AuthRegisterForm";
import { useHistory } from "react-router-dom";

// STATEFUL PARENT COMPONENT
const AuthRegister = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    favoriteSport: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const history = useHistory();

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
        }

        setAdd(false);
      });
    }
  }, [newUser, add]);

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
    history.push("/favorites");
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
