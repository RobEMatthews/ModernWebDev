import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";

import FavoritesGood from "./Favorites/FavoritesGood.js";


const Components = () => {
  return (
    <><Router>
      <Switch>
        <Route path="/auth" exact component={AuthModule} />
        <Route path="/register" component={AuthRegister} />
        <Route path="/login" component={AuthLogin} />
        <Route path="/favorites" component={FavoritesGood} />
        <Redirect to="/auth" />
      </Switch>
    </Router>
    </> 

  );
};

export default Components;