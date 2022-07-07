import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";

import FavoritesModule from "./Favorites/Favorites.js";


const Components = () => {
  return (
    <><Router>
      <Switch>
        <Route path="/auth" exact component={AuthModule} />
        <Route path="/register" component={AuthRegister} />
        <Route path="/login" component={AuthLogin} />
        <Redirect to="/auth" />
      </Switch>
    </Router>

    <div>
      <FavoritesModule />
    </div></> 

  );
};

export default Components;