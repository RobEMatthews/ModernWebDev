import React from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";

import FavoritesGood from "./FavoritesGood";

const FavoritesModule = () => {

  return (
    <div>
      <ProtectedRoute
      exact
      path="/favorites"
      component={FavoritesGood}
      />
    </div>

  )
};

export default FavoritesModule;