// PROTECTED ROUTE

import React, { useEffect, useState } from "react";
import Parse from "parse";
import { getAllEvents, getEventbyUser, filterEventbySport } from "../../Common/Services/event.services.js";
import { getAllUsers, getUserById } from "../../Common/Services/user.service.js";
 

import baseball_img from "../../images/baseball_image.jpg"; 
import basketball_img from "../../images/basketball_image.jpg"; 
import football_img from "../../images/football_image.jpg"; 
import soccer_img from "../../images/soccer_image.jpg"; 
import hockey_img from "../../images/hockey_image.jpg"; 

const FavoritesEventLog = () => {

    const user = Parse.User.current();
    //console.log("user: ", user);

    // Variables in the state to hold data
    const [events, setEvent] = useState([]);
    const [users, setUser] = useState([]);
  
    // UseEffect to run when the page loads to
    // obtain async data and render
    useEffect(() => {
      getEventbyUser(user).then((events) => {
        console.log("events", events);
        setEvent(events);
      });
  
      getAllUsers().then((users) => {
        console.log("users: ", users);
        setUser(users);
      });
    }, [user]);

    if(events.constructor == Array) {

        console.log("events is an array!");
    }
    // const baseballEvents = events.filterEventbySport();
    // console.log("baseballEvents: ", baseballEvents);

    return(
        <><h1>Event Log</h1>


        {/*begin use of the grid layout*/}
        
        <h1 class="title">Baseball Events</h1>   
        <img
            src={baseball_img}
            alt="Baseball"
            width="100"
            height="100" 
        />
        {/* <div>
        {userEvents.length > 0 && (
            <ul>
            {userEvents.filter((event) => (
                <div>
                <span>
                    {/* Using getter for event Object to display name 
                    <li key={event.objectId}>{event.get("name")}</li>{" "}
                </span>
                </div>
            ))}
            </ul>
        )}
        </div> */}






            
        <h1 class="title">Basketball Events</h1>
        <img
            src={basketball_img}
            alt="Basketball"
            width="100"
            height="100" 
        />
            
        <h1 class="title">Football Events</h1>
        <img
            src={football_img}
            alt="Football"
            width="100"
            height="100" 
        />
        
        <h1 class="title">Hockey Events</h1>
        <img 
            src={hockey_img} 
            alt="Hockey" 
            width="100" 
            height="100" 
        />
        
        <h1 class="title">Soccer Events</h1>
        <img 
            src={soccer_img} 
            alt="Soccer" 
            width="100" 
            height="100" 
        />
        </>
    );
};

export default FavoritesEventLog;






