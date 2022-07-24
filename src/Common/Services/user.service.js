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