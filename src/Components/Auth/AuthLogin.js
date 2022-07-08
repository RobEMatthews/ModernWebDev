import React, { useEffect, useState } from "react";
import { checkUser } from "../../Common/Services/AuthService";
import AuthLoginForm from "./AuthLoginForm";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import FavoritesModule from "../Favorites/FavoritesModule";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";


const AuthLogin = () => {

  const [authUser, setAuthUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    favoriteSport: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // useEffect that run when changes are made to the state variable flags
  const history = useHistory();
  
  useEffect(() => {
    if (authUser && add) {
      checkUser(authUser).then((userChecked) => {
        if (userChecked) {
          alert(`${userChecked.get("firstName")}, you successfully logged in!`);
          
          // history.push("/favorites/Favo");
        }
      <Router>
      <Switch>
      <Route path="/favorites" component={FavoritesModule} />
      </Switch>
      </Router>
        
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
    <><div>
      <AuthLoginForm
        user={authUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>

    <div>

    <button>
      <Link to="/auth">Go back</Link>
    </button>
    </div></>
  );
};

export default AuthLogin;
