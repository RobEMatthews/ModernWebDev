import Parse from "parse";

export const getUserById = (id) => {
  const User = Parse.Object.extend("_User"); // protected class '_'
  const query = new Parse.Query(User);
  return query.get("glXvOEbAvS").then((result) => {
    // return User object with objectId: id
    return result;
  });
};