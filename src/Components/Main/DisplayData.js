import React from "react";
import DataList from "./DataList.js";

/* CHILD STATELESS COMPONENT */
const DataDisplay = ({onChange, onClick }) => {
  return (
    <div>
        <ul>
          {DataList.events.map((game) => (
            <div>
              <span>
                {/* Using getter for event Object to display name */}
                <li key={game.id}>{game.get("name")}</li>{" "}
              </span>
            </div>
          ))}
        </ul>
    </div>
  );
};

export default DataDisplay;