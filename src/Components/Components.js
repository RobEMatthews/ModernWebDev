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

import FavoritesModule from "./Favorites/FavoritesModule.js";


const Components = () => {
  return (
    <Router>
      <Switch>
        <Route path="/favorites" exact component={FavoritesModule} />
        <Route path="/auth" component={AuthModule} />
        <Route path="/register" component={AuthRegister} />
        <Route path="/login" component={AuthLogin} />
        <Redirect to="/auth" />
      </Switch>
    </Router>
  );
};

export default Components;