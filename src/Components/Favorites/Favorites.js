import React from "react";
import FavoritesList from "./FavoritesList";

/* Favorites MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const FavoritesModule = () => {
  return (
    <div>
      This is the Favorites module.
      <FavoritesList />
    </div>
  );
};

export default FavoritesModule;