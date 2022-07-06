import React from "react";
import DisplayData from "./DisplayData.js";
import { Link } from "react-router-dom";

/* MAIN PARENT COMPONENT */
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
      id="email_reg"
      required
    />

    <label for="psw"><b class="question">Password</b></label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw"
      id="psw_reg"
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
      By creating an account you agree to our Terms and Privacy.
    </p>

    <Link to="/register">
        <button type="submit" class="option">Register</button>
    </Link>
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
      id="email_log"
      required
    />

    <label for="psw"><b class="question">Password</b></label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw"
      id="psw_log"
      required
    />

    <hr />
    <p class="option">
      By creating an account you agree to our Terms and Privacy
    </p>

    <Link to="/login">
    <button type="submit" class="option">Login</button>
    </Link>
    
  </div>
  <div>
    <DisplayData />
  </div>

</form>
    </div>
  );
};

export default MainModule;