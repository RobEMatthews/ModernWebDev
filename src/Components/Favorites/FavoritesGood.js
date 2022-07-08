import React from "react";
import { Link, useParams } from "react-router-dom";
import FavoritesForm from "./FavoritesForm"
import Parse from "parse";

const FavoritesGood = () => {
    
  const { username } = Parse.User.current().attributes;
  return (
    <div>
      <h1>
        {" "}
        User: {username}{" "}
      </h1>
      <FavoritesForm/>
      <button>
        <Link to="/auth">Go back.</Link>
      </button>S
    </div>
  );
};

export default FavoritesGood;
