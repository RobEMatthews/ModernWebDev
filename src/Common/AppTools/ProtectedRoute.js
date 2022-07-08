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

  console.log(rest); // show rest.path in the console

  const [flag, setFlag] = useState(false);
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
          <p>Unauthorized!</p> <button onClick={goBackHandler}>Go back.</button>
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;

//  TODO - redirect to Component