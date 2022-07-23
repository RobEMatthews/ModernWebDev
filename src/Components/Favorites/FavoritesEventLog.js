// PROTECTED ROUTE

import React, { useEffect, useState } from "react";
import Parse from "parse";
import { getEventbyUser, getBaseballEvents, getBasketballEvents, getFootballEvents, getHockeyEvents, getSoccerEvents } from "../../Common/Services/event.services.js";
import { getAllUsers, } from "../../Common/Services/user.service.js";
 

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
    const [baseballEvents, setBaseballEvent] = useState([]);
    const [basketballEvents, setBasketballEvent] = useState([]);
    const [footballEvents, setFootballEvent] = useState([]);
    const [hockeyEvents, setHockeyEvent] = useState([]);
    const [soccerEvents, setSoccerEvent] = useState([]);
    
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

      getBaseballEvents(user).then((baseballEvents) => {
        setBaseballEvent(baseballEvents);
      });

      getBasketballEvents(user).then((basketballEvents) => {
        setBasketballEvent(basketballEvents);
      });

      getFootballEvents(user).then((footballEvents) => {
        setFootballEvent(footballEvents);
      });

      getHockeyEvents(user).then((hockeyEvents) => {
        setHockeyEvent(hockeyEvents);
      });

      getSoccerEvents(user).then((soccerEvents) => {
        setSoccerEvent(soccerEvents);
      });



    }, []);
    

    // const baseballEvents = getBaseballEvents(user);
    
    // const baseballEvents = events.filterEventbySport();
    // console.log("baseballEvents: ", baseballEvents);

    const { username } = Parse.User.current().attributes;

    return(
        <><h1>Event Log for: {username}{" "}</h1>


        <div>
            {events.length > 0 && (
                <ul>
                {events.map((event) => (
                    <div>
                    <span>
                        {/* Using getter for event Object to display name */}
                        <li key={event.objectId}>{event.get("date")} | {event.get("sport")} | {event.get("venue")}</li>{" "}
                    </span>
                    </div>
                ))}
                </ul>
            )}
        </div>

        {/*begin use of the grid layout*/}
        
        <h1 class="title">Baseball Events</h1>   
        <img
            src={baseball_img}
            alt="Baseball"
            width="100"
            height="100" 
        /> 
        <div>
        {baseballEvents.length > 0 && (
            <ul>
            {baseballEvents.map((event) => (
                <div>
                <span>
                    {/* Using getter for event Object to display name */}
                    <li key={event.objectId}>{event.get("date")} | {event.get("venue")} | "{event.get("comment")}"</li>{" "}                </span>
                </div>
            ))}
            </ul>
        )}
        </div> 
            
        <h1 class="title">Basketball Events</h1>
        <img
            src={basketball_img}
            alt="Basketball"
            width="100"
            height="100" 
        />
        <div>
        {basketballEvents.length > 0 && (
            <ul>
            {basketballEvents.map((event) => (
                <div>
                <span>
                    {/* Using getter for event Object to display name */}
                    <li key={event.objectId}>{event.get("date")} | {event.get("venue")} | "{event.get("comment")}"</li>{" "}                </span>
                </div>
            ))}
            </ul>
        )}
        </div> 
            
        <h1 class="title">Football Events</h1>
        <img
            src={football_img}
            alt="Football"
            width="100"
            height="100" 
        />
        <div>
        {footballEvents.length > 0 && (
            <ul>
            {footballEvents.map((event) => (
                <div>
                <span>
                    {/* Using getter for event Object to display name */}
                    <li key={event.objectId}>{event.get("date")} | {event.get("venue")} | "{event.get("comment")}"</li>{" "}                </span>
                </div>
            ))}
            </ul>
        )}
        </div> 

        
        <h1 class="title">Hockey Events</h1>
        <img 
            src={hockey_img} 
            alt="Hockey" 
            width="100" 
            height="100" 
        />
                <div>
        {hockeyEvents.length > 0 && (
            <ul>
            {hockeyEvents.map((event) => (
                <div>
                <span>
                    {/* Using getter for event Object to display name */}
                    <li key={event.objectId}>{event.get("date")} | {event.get("venue")} | "{event.get("comment")}"</li>{" "}                </span>
                </div>
            ))}
            </ul>
        )}
        </div> 
        
        <h1 class="title">Soccer Events</h1>
        <img 
            src={soccer_img} 
            alt="Soccer" 
            width="100" 
            height="100" 
        />
        <div>
        {soccerEvents.length > 0 && (
            <ul>
            {soccerEvents.map((event) => (
                <div>
                <span>
                    {/* Using getter for event Object to display name */}
                    <li key={event.objectId}>{event.get("date")} | {event.get("venue")} | "{event.get("comment")}"</li>{" "}                </span>
                </div>
            ))}
            </ul>
        )}
        </div> 
        </>
    );
};

export default FavoritesEventLog;






