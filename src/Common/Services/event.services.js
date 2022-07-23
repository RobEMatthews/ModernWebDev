import Parse from "parse";

export const getAllEvents = () => {
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  return query.find().then((results) => {
    // returns array of Event objects
    return results;
  });
};

export const getEventbyUser = (userObject) => {
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  query.equalTo("user", userObject);
  return query.find().then((results) => {
    // returns array of User objects
    return results;
  });
};

export const getBaseballEvents = (userObject) => {
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  query.equalTo("sport", "Baseball");
  return query.find().then((results) => {
    return results;
  });
};

export const getBasketballEvents = (userObject) => {
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  query.equalTo("sport", "Basketball");
  return query.find().then((results) => {
    return results;
  });
};

export const getFootballEvents = (userObject) => {
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  query.equalTo("sport", "Football");
  return query.find().then((results) => {
    return results;
  });
};

export const getHockeyEvents = (userObject) => {
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  query.equalTo("sport", "Hockey");
  return query.find().then((results) => {
    return results;
  });
};

export const getSoccerEvents = (userObject) => {
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  query.equalTo("sport", "Soccer");
  return query.find().then((results) => {
    return results;
  });
};

// used to create a new event object assigned to a user
export async function createEvent(newEvent) {
  const event = new Parse.Object("Event");

  // use setter to assign values to the event 
  event.set("sport", newEvent.sport);
  event.set("level", newEvent.level);
  event.set("date", newEvent.date);
  event.set("venue", newEvent.venue);
  event.set("comment", newEvent.comment);
  event.set("user", Parse.User.current());

  console.log("Event: ", event);
  try {
    const newEventSaved = await event.save();
      // .signUp();
    return newEventSaved;
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
};