import React from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
// import { getAllEvents } from "../../Common/Services/event.services.js";
// import { getUserById } from "../../Common/Services/user.service.js";
import FavoritesGood from "./FavoritesGood";

const FavoritesModule = () => {

    
    // getAllEvents().then((events) => {
    //   console.log(events);
    //   setEvent(events);
    // });

    // getUserById().then((users) => {
    //   console.log(users);
    //   setUser(users);
    // });


  return (
    <div>
      <ProtectedRoute
      exact
      path="/favorites"
      component={FavoritesGood}
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