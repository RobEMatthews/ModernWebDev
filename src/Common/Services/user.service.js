import Parse from "parse";

// getUserById
export const getUserById = (id) => {
  const User = Parse.Object.extend("_User"); // protected class '_'
  const query = new Parse.Query(User);
  return query.get("glXvOEbAvS").then((result) => {
    // return User object with objectId: id
    console.log(result)
    return result;
  });
};

// getAllUsers
export const getAllUsers = () => {
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
  return query.find().then((results) => {
    // returns array of Event objects
    return results;
  });
};

export const getTopUsers = (users) => {
  let eventsAttended = Array(users.length);
  let top3 = Array(3);
  for (let i = 0; i < users.length; i++) {
      eventsAttended[i] = users[i].get("eventsAttended");
  }
  eventsAttended.sort((a, b) => b - a);
  console.log("eventsAttended sorted: ", eventsAttended);
  let pos = 0;
  while (pos < 2) {
      for (let j = 0; j < users.length; j++) {
          console.log("users[j].get('username')", users[j].get("username"));
          console.log("eventsAttended[j]: ", eventsAttended[j]);
          if(users[j].get("eventsAttended") === eventsAttended[j]) {
              top3[pos] = users[j].get("username");
              pos++;
              if(pos > 2) break;
          };
      };
  };
  return top3;
};