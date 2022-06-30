import Parse from "parse";

export const getAllEvents = () => {
  console.log("check1");
  const Event = Parse.Object.extend("Event");
  console.log("check2");
  const query = new Parse.Query(Event);
  console.log("check3");
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