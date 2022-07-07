import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// used in auth login component
export const checkUser = (authUser) => {
  const user = new Parse.User();

  user.set("username", authUser.email);
  user.set("firstName", authUser.firstName);
  user.set("lastName", authUser.lastName);
  user.set("password", authUser.password);
  user.set("email", authUser.email);

  console.log("User: ", user);
  return user
    .logIn()
    .then((authUserSaved) => {
      return authUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};