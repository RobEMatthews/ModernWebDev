import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FavoritesForm from "./FavoritesForm"
import Parse from "parse";
import { useHistory } from "react-router-dom";

const FavoritesGood = () => {

    const history = useHistory();
    
    const check = !!(Parse.User.current() && Parse.User.current().authenticated);
    console.log("check", check);

    useEffect(() => {
        if (check) {
                history.push("/favorites");
            }
    }, [check, history]);
      
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
        </button>
        </div>
    );
};

export default FavoritesGood;
