// import { useEffect, useState } from "react";
// import { getAllEvents } from "../../Common/Services/event.services.js";
// import { getUserById } from "../../Common/Services/user.service.js";


// const DataList = () => {

//   // Variables in the state to hold data
//   const [events, setEvent] = useState([]);
//   const [users, setUser] = useState([]);

//   // UseEffect to run when the page loads to
//   // obtain async data and render
//   useEffect(() => {
//     getAllEvents().then((events) => {
//       console.log(events);
//       setEvent(events);
//     });

//     getUserById().then((users) => {
//       console.log(users);
//       setUser(users);
//     });
//   }, []);

//   return {events, users}
// }

// export default DataList;