import React from "react";
import DataList from "./Main.js";

const DataDisplay = ({onChange}) => {
  return (
    <div>
      {DataList.event.length > 0 && (
          <ul>
            {event.map((event) => (
              <div>
                <span>
                  {/* Using getter for lesson Object to display name */}
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



  // function App() {
  //   // useState hook
  //   const [users, setUsers] = useState([]);
  
  //   // useEffect hook is used here to load user data asynchronously (pulled from .json file)
  //   useEffect(() => {
  //     getUsers().then((Data) => {
  //       setUsers(Data);
  //     });
  //   }, []);
  
  //   return html`
  //   <${Parent} title="Popular User List">
  //     Users with the most events attended this year:
  //   </${Parent}>
  //     <ul>
  //       ${users.map(
  //         (user) =>
  //           html` <li key="${user}" class="test">
  //             ${user.username} | ${user.favSport} | ${user.numEvents}
  //           </li>`
  //       )}
  //     </ul>
  //   `;
  // }
  
  // render(html` <${App} /> `, document.getElementById("app"));
  