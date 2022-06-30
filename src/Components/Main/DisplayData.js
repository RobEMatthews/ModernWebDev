import React from "react";
import DataList from "./DataList.js";

console.log("Data", DataList.event)

const DataDisplay = ({onChange, onClick }) => {
  return (
    <div>
      {DataList.event.length > 0 && (
        <ul>
          {DataList.event.map((game) => (
            <div>
              <span>
                {/* Using getter for event Object to display name */}
                <li key={game.id}>{game.get("name")}</li>{" "}
              </span>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataDisplay;