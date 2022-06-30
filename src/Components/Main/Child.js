import React from "react";
import DataList from "./Main.js";

const DataDisplay = ({onChange, onClick }) => {
  return (
    <div>
      {DataList.event.length > 0 && (
          <ul>
            {event.map((event) => (
              <div>
                <span>
                  {/* Using getter for event Object to display name */}
                  <li key={event.id}>{event.get("name")}</li>{" "}
                </span>
              </div>
            ))}
          </ul>
              )}
    </div>
  );
};

export default DataDisplay;