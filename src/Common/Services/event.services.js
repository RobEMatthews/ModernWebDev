import Parse from "parse";

export function getAllEvents() {
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  console.log("query",query)
  return query.find().then((results) => {
    // returns array of Lesson objects
    return results;
  });
}

export function getEventbyUser(userObject) {
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  query.equalTo("user",userObject)
  return query.find().then((results) => {
    // returns array of user objects
    return results;
  });
}