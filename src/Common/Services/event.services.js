import Parse from "parse";

// users service with a single method
// requests array of users from a third-party api via axios
export function getAllEvents() {
    const Event = Parse.Object.extend("Event");
    const query = new Parse.Query(Event);
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