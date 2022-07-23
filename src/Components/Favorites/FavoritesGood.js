import React, { useEffect, useState } from "react";
import Parse from "parse";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import FavoritesEventLog from "./FavoritesEventLog";
import FavoritesForm from "./FavoritesForm"
import { createEvent } from "../../Common/Services/event.services";

const FavoritesGood = () => {

    const history = useHistory();
    
    const check = !!(Parse.User.current() && Parse.User.current().authenticated);

    useEffect(() => {
        if (check) {
                history.push("/favorites");
            }
    }, [check, history]);
      
    const { username } = Parse.User.current().attributes;


    const [newEvent, setNewEvent] = useState({
        sport: "",
        level: "",
        date: "",
        venue: "",
        comment: "",
    });

    const [selectedImage, setSelectedImage] = useState(null);
    
    useEffect(() => {
        if (selectedImage !== null && selectedImage.size > 0) {
            const file = selectedImage;
            const name = "photo";
        
            const parseFile = new Parse.File(name, file);
    
            newEvent.eventImage = parseFile;
        }
    }, [selectedImage, newEvent]);


    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

    useEffect(() => {
        if (newEvent && add) {
            createEvent(newEvent).then((eventCreated) => {
                if (eventCreated) {
                    console.log("event created: ", eventCreated);
                }
                setAdd(false);
            })
        }
    }, [newEvent, add]);


    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
        const { name, value: newValue } = e.target;
        console.log(newValue);

        console.log(e.target.type);
        if (e.target.type == 'file'){
            setSelectedImage(e.target.files[0]);
        }
        

        setNewEvent({
          ...newEvent,
          [name]: newValue
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("submitted: ", e.target);
        setAdd(true);
        
      };

    
    return (
        <div>
        <h1>
            {" "}
            User: {username}{" "}
        </h1>
        <FavoritesForm
            event={newEvent}
            onChange={onChangeHandler}
            onSubmit={onSubmitHandler}
            />
        <FavoritesEventLog/>
        <br />
        <button>
            <Link to="/auth">Go back.</Link>
        </button>
        </div>
    );
};

export default FavoritesGood;
