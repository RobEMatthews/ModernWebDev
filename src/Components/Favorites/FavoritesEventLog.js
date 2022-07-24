// PROTECTED ROUTE

import React, { useEffect, useState } from "react";
import Parse from "parse";
import { getEventbyUser, getBaseballEvents, getBasketballEvents, getFootballEvents, getHockeyEvents, getSoccerEvents, getAllEvents } from "../../Common/Services/event.services.js";
import { getAllUsers, getTopUsers } from "../../Common/Services/user.service.js";
 
import baseball_img from "../../images/baseball_image.jpg"; 
import basketball_img from "../../images/basketball_image.jpg"; 
import football_img from "../../images/football_image.jpg"; 
import soccer_img from "../../images/soccer_image.jpg"; 
import hockey_img from "../../images/hockey_image.jpg"; 

const FavoritesEventLog = () => {

    const user = Parse.User.current();

    // Variables in the state to hold data
    const [users, setUser] = useState([]);
    const [events, setEvents] = useState([]);
    const [userEvents, setUserEvent] = useState([]);
    const [baseballEvents, setBaseballEvent] = useState([]);
    const [basketballEvents, setBasketballEvent] = useState([]);
    const [footballEvents, setFootballEvent] = useState([]);
    const [hockeyEvents, setHockeyEvent] = useState([]);
    const [soccerEvents, setSoccerEvent] = useState([])
  
    // UseEffect to run when the page loads to
    // obtain async data and render
    useEffect(() => {
        getEventbyUser(user).then((userEvents) => {
            setUserEvent(userEvents);
        }).catch(e => {
            console.log(e);
        });
    
        getAllUsers().then((users) => {
            setUser(users);
        }).catch(e => {
            console.log(e);
        });
        
        getAllEvents().then((events) => {
            setEvents(events);
        }).catch(e => {
            console.log(e);
        });
        
        // next 20 lines sort events by sport
        getBaseballEvents(user).then((baseballEvents) => {
            setBaseballEvent(baseballEvents);
        }).catch(e => {
            console.log(e);
        });
        
        getBasketballEvents(user).then((basketballEvents) => {
            setBasketballEvent(basketballEvents);
        }).catch(e => {
            console.log(e);
        });
        
        getFootballEvents(user).then((footballEvents) => {
            setFootballEvent(footballEvents);
        }).catch(e => {
            console.log(e);
        });
        
        getHockeyEvents(user).then((hockeyEvents) => {
            setHockeyEvent(hockeyEvents);
        }).catch(e => {
            console.log(e);
        });
        
        getSoccerEvents(user).then((soccerEvents) => {
            setSoccerEvent(soccerEvents);
        }).catch(e => {
            console.log(e);
        });
    }, [user]);
    
    // const top3 = getTopUsers(users);
    // console.log("top3: ", top3);
    
    const { username } = Parse.User.current().attributes;
    // console.log("userEvents", userEvents);

    return(
        <><h1>Event Log for: {username}{" "}</h1>


        <div>
            {userEvents.length > 0 && (
                <ul>
                {userEvents.map((event) => (
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
        <div>
        <h1 class="title">Baseball Events </h1>  
        <img
            src={baseball_img}
            alt="Baseball"
            width="100"
            height="100" 
        /> 
        </div>
        <div>
        {baseballEvents.length > 0 && (
            <ul>
            {baseballEvents.map((event) => (
                <div>
                <span>
                    {/* Using getter for event Object to display name */}
                    <li key={event.objectId}>{event.get("date")} | {event.get("venue")} | "{event.get("comment")}" | <br/> {<img src={event.get("eventImage").url()} width="100" height="100" alt="not found"/>}</li>{" "}                
                </span>
                </div>
            )
            )}
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
                    <li key={event.objectId}>{event.get("date")} | {event.get("venue")} | "{event.get("comment")}" | <br/> {<img src={event.get("eventImage").url()} width="100" height="100" alt="not found"/>}</li>{" "}                </span>
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
                    <li key={event.objectId}>{event.get("date")} | {event.get("venue")} | "{event.get("comment")}" | <br/> {<img src={event.get("eventImage").url()} width="100" height="100" alt="not found"/>}</li>{" "}                </span>
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
                    <li key={event.objectId}>{event.get("date")} | {event.get("venue")} | "{event.get("comment")}" | <br/> {<img src={event.get("eventImage").url()} width="100" height="100" alt="not found"/>}</li>{" "}                </span>
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
                    <li key={event.objectId}>{event.get("date")} | {event.get("venue")} | "{event.get("comment")}" | <br/> {<img src={event.get("eventImage").url()} width="100" height="100" alt="not found"/>}</li>{" "}                </span>
                </div>
            ))}
            </ul>
        )}
        </div> 
        </>
    );
};

export default FavoritesEventLog;






