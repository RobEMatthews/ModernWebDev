import React from "react";
import { Link, useParams } from "react-router-dom";
import FavoritesForm from "./FavoritesForm"

// You must make sure to check this protected route even when manually typing in url
// or you can easily bypass the auth
const FavoritesGood = () => {
    
  const { firstname, lastname } = useParams();
  return (
    <div>
      <h1>
        {" "}
        User: {firstname} {lastname}{" "}
      </h1>
      <FavoritesForm/>
      <button>
        <Link to="/auth">Go back.</Link>
      </button>
    </div>
  );
};

export default FavoritesGood;
