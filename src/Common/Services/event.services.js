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
  query.equalTo("user",userObject);
  return query.find().then((results) => {
    // returns array of user objects
    return results;
  });
};