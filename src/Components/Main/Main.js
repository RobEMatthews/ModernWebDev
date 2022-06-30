import React from "react";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const MainModule = () => {
  return (
    <div>
   <h1 class="title">SportEventTracker</h1>

<form action="/action_page.php">
  <div class="container">
    <h1 class="title">Register</h1>
   
    <p class="option">
      Please fill in this form to create a SportEventTracker account.
    </p>
    <hr />

    <label for="email"><b class="question">Email</b></label>
    <input
      type="text"
      placeholder="Enter Email"
      name="email"
      id="email"
      required
    />

    <label for="psw"><b class="question">Password</b></label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw"
      id="psw"
      required
    />

    <label for="psw-repeat"><b class="question">Repeat Password</b></label>
    <input
      type="password"
      placeholder="Repeat Password"
      name="psw-repeat"
      id="psw-repeat"
      required
    />
    <label for="fav-sport"><b class="question">Favorite Sport</b></label>
    <input
      type="text"
      placeholder="Favorite Sport"
      name="fav-sport"
      id="fav-sport"
      required
    />
    <hr />
    <p class="option">
      By creating an account you agree to our
      <a href="#">Terms & Privacy</a>.
    </p>

    <button type="submit" class="option">Register</button>
  </div>

 
</form>

<form action="/action_page.php">
  <div class="container">
    <h1 class="title">Login</h1>
   
    <p class="option">
      Please fill in this form to sign in to a SportEventTracker account.
    </p>
    <hr />

    <label for="email"><b class="question">Email</b></label>
    <input
      type="text"
      placeholder="Enter Email"
      name="email"
      id="email"
      required
    />

    <label for="psw"><b class="question">Password</b></label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw"
      id="psw"
      required
    />

    <hr />
    <p class="option">
      By creating an account you agree to our
      <a href="#">Terms & Privacy</a>.
    </p>

    <button type="submit" class="option">Register</button>
  </div>


</form>
    </div>
  );
};

export default MainModule;