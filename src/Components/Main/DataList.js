// Pull in Data
import React, { useEffect, useState } from "react";
import {
  getAllEvents
} from "../../Common/Services/event.services.js";
import {
  getUserById
} from "../../Common/Services/user.service.js";

const DataList = () => {
  // Variables in the state to hold data
  const [event, setEvent] = useState([]);
  const [user, setUser] = useState([]);

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllEvents().then((events) => {
      console.log(events);
      setEvent(events);
    });
  }, []);

  useEffect(() => {
    getUserById().then((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

}

export default DataList;