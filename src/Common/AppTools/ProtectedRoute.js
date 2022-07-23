import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Parse from "parse";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const goBackHandler = () => {
    history.goBack();
  };

  const [flag, setFlag] = useState(false);

  // logic to assign boolean value based on existence of authenticated user
  const check = !!(Parse.User.current() && Parse.User.current().authenticated);

  useEffect(() => {

    if (check) {
        console.log("Check True in FavoritesModule");
        setFlag(true);
      } else {
        console.log("Check False in FavoritesModule");
        setFlag(false);
      }

  }, [check]);

  return (
    <div>
      {flag ? (
        <Component/>
        
      ) : (
        <div>
          <p class="unauth">Unauthorized!</p> <button onClick={goBackHandler}>Go back</button>
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;
