import React from "react";
import { useEffect, useState } from "react";
import { getAllEvents } from "../../Common/Services/event.services.js";
import { getUserById } from "../../Common/Services/user.service.js";

const DisplayFavorites = () => {

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
    }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <div>
              <span>
                {/* Using getter for user Object to display name */}
                <li key={user.objectId}>{user.get("username")}</li>{" "}
              </span>
            </div>
          ))}
        </ul>
      )}
    </div>
  )
};

export default DisplayFavorites;