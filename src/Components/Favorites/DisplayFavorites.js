import React from "react";
import DataList from "../Main/DataList.js";


/* CHILD STATELESS COMPONENT */
const DisplayFavorites = () => {
  return (
    <div>
      {DataList.users.length > 0 && (
        <ul>
          {DataList.users.map((user) => (
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