import Parse from "parse";

// used in auth register component to create a new user
export async function createUser(newUser) {
  const user = new Parse.User();

  // use setter to assign values
  user.set("username", newUser.username);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);
  user.set("favoriteSport", newUser.favoriteSport);

  console.log("User: ", user);
  try {
    const newUserSaved = await user
      .signUp();
    return newUserSaved;
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
};

// used in auth login component
export async function checkUser(authUser) {
  const user = new Parse.User();

  user.set("username", authUser.email);
  user.set("password", authUser.password);
  user.set("email", authUser.email);

  console.log("User: ", user);
  try {
    const authUserSaved = await user
      .logIn();
    return authUserSaved;
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}
