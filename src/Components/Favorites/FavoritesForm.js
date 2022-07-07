// this should be the protected route

import React from "react";
import { Link, useParams } from "react-router-dom";

/* Favorites MODULE */
const FavoritesForm = () => {
  // const { firstname, lastname } = useParams();
  
  return (
    <div>
      <h1>
        {" "}
        User: {firstname} {lastname}{" "}
      </h1>
         <div id="app"></div>

<form action="/action_page.php">
  <div class="container">
    <h1 class="title">Record an event</h1>
    <p class="title">Input data to create a new entry in your event log!</p>

    <hr />

    {/*Begin form for entering data about an event*/}
    {/*Sport label should be a multiple choice*/}
    <label for="sport"><b class="question">Sport:</b></label>
    <input type="radio" name="sport" value="baseball" />
    <b class="option">Baseball</b>
    <img
      src="src/images/baseball_image.jpg"
      alt="Baseball"
      width="100"
      height="100"
    />

    <input type="radio" name="sport" value="football" />
    <b class="option">Football</b>
    <img
      src="src/images/football_image.jpg"
      alt="Football"
      width="100"
      height="100"
    />
    <input type="radio" name="sport" value="basketball" />
    <b class="option">Basketball</b>
    <img
      src="src/images/basketball_image.jpg"
      alt="Basketball"
      width="100"
      height="100"
    />
    <input type="radio" name="sport" value="hockey" />
    <b class="option">Hockey</b>
    <img
      src="src/images/hockey_image.jpg"
      alt="Hockey"
      width="100"
      height="100"
    />
    <input type="radio" name="sport" value="soccer" />
    <b class="option">Soccer</b>
    <img
      src="src/images/soccer_image.jpg"
      alt="Soccer"
      width="100"
      height="100"
    />

    {/*Final option is 'other' for user to input their own sport*/}
    <input type="radio" name="sport" value="other" checked="checked" />
    <b class="option">other</b>
    <input type="text" placeholder="Enter Sport" name="sport" id="sport" />

    <hr />

    {/*Level label should be a multiple choice*/}
    <label for="level"><b class="question">Level:</b></label>
    <input type="radio" name="level" value="professional" />
    <b class="option">Professional</b>
    <input type="radio" name="level" value="college" />
    <b class="option">College</b>
    <input type="radio" name="level" value="highschool" />
    <b class="option">High School</b>
    <input type="radio" name="level" value="youth" />
    <b class="option">Youth</b>

    {/*Final option is 'other' for user to input their own level*/}
    <input type="radio" name="level" value="other" checked="checked" />
    <b class="option">other</b>
    <input
      type="text"
      placeholder="Enter Level"
      name="otherLevel"
      id="otherLevel"
    />

    <hr />

    {/*Date form type*/}
    <label for="eventDate"><b class="question">Date:</b></label>
    <input type="date" name="date" />

    <hr />

    {/*text type for venue entry*/}
    <label for="venue"><b class="question">Venue:</b></label>
    <input
      type="text"
      placeholder="Enter Venue"
      name="venue"
      id="venue"
      required
    />

    <hr />

    {/*text type for comment entry*/}
    <label for="comment"><b class="question">Comments?</b></label>
    <input
      type="text"
      placeholder="Enter comment"
      name="comment"
      id="comment"
    />

    <hr />

    <button type="submit" class="question">Submit entry</button>
  </div>
</form>

<h1>Event Log</h1>


{/*begin use of the grid layout*/}
<article>
  <img
    src="src/images/baseball_image.jpg"
    alt="Baseball"
    width="100"
    height="100"
  />

</article>
<article>
  <img
    src="src/images/football_image.jpg"
    alt="Football"
    width="100"
    height="100"
  />

</article>
<article>
  <img
    src="src/images/basketball_image.jpg"
    alt="Basketball"
    width="100"
    height="100"
  />

</article>
<article>
  <img
    src="src/images/hockey_image.jpg"
    alt="Hockey"
    width="100"
    height="100"
  />

</article>
<article>
  <img
    src="src/images/soccer_image.jpg"
    alt="Soccer"
    width="100"
    height="100"
  />

</article>

<h1 class="title">Baseball Events</h1>

<img
  src="src/images/baseball_image.jpg"
  alt="Baseball"
  width="100"
  height="100"
/>

<h1 class="title">Basketball Events</h1>

<img
  src="src/images/basketball_image.jpg"
  alt="Basketball"
  width="100"
  height="100"
/>

<h1 class="title">Football Events</h1>

<img
  src="src/images/football_image.jpg"
  alt="Football"
  width="100"
  height="100"
/>

<h1 class="title">Hockey Events</h1>

<img src="src/images/hockey_image.jpg" alt="Hockey" width="100" height="100" />

<h1 class="title">Soccer Events</h1>

<img src="src/images/soccer_image.jpg" alt="Soccer" width="100" height="100" />

<button>
        <Link to="/auth">Go back.</Link>
 </button>

    </div>
  );
};

export default FavoritesForm;