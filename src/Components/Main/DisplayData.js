import React from "react";
import DataList from "./DataList.js";

/* CHILD STATELESS COMPONENT */
const DisplayData = () => {
  return (
    <div>
      {DataList.events.length > 0 && (
        <ul>
          {DataList.events.map((event) => (
            <div>
              <span>
                {/* Using getter for event Object to display name */}
                <li key={event.objectId}>{event.get("name")}</li>{" "}
              </span>
            </div>
          ))}
        </ul>
      )}
    </div>
  )
};

export default DisplayData;