import React from "react";
import DataList from "../Main/DataList.js";


/* CHILD STATELESS COMPONENT */
const DisplayFavorites = () => {
  return (
    <div>
        <ul>
          {DataList.users.map((user) => (
            <div>
              <span>
                {/* Using getter for event Object to display name */}
                <li key={user.id}>{user.get("username")}</li>{" "}
              </span>
            </div>
          ))}
        </ul>
    </div>
  );
};

export default DisplayFavorites;