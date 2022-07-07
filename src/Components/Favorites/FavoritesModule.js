import React from "react";
import { useEffect, useState } from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import { getAllEvents } from "../../Common/Services/event.services.js";
import { getUserById } from "../../Common/Services/user.service.js";
import FavoritesForm from "./FavoritesForm";
import Parse from "parse";

const FavoritesModule = () => {

    const [flag, setFlag] = useState(false);
    var check = document.getElementById("flagBox");

    const currentUser = Parse.User.current();

    // Variables in the state to hold data
    const [events, setEvent] = useState([]);
    const [users, setUser] = useState([]);
  
    // UseEffect to run when the page loads to
    // obtain async data and render
    useEffect(() => {
      getAllEvents().then((events) => {
        console.log(events);
        setEvent(events);
      });
  
      getUserById().then((users) => {
        console.log(users);
        setUser(users);
      });

      if (check) {
        if (check.currentUser.authenticated()) {
          console.log("GOOD");
          setFlag(true);
        } else {
          console.log("BAD");
          setFlag(false);
        }
      }

    }, [check]);

  return (
    <div>
      <ProtectedRoute
      exact
      path="/user/firstName/lastName"
      flag={flag}
      component={FavoritesForm}
      />
    </div>

    //   {users.length > 0 && (
    //     <ul>
    //       {users.map((user) => (
    //         <div>
    //           <span>
    //             {/* Using getter for user Object to display name */}
    //             <li key={user.objectId}>{user.get("username")}</li>{" "}
    //           </span>
    //         </div>
    //       ))}
    //     </ul>
    //   )}
    // </div>
  )
};

export default FavoritesModule;