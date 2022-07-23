// PROTECTED ROUTE

import React from "react";
import UploadAndDisplayImage from "./ImageUpload"
// import UploadImage from "./UploadingImage";

import baseball_img from "../../images/baseball_image.jpg"; // you can import them
import basketball_img from "../../images/basketball_image.jpg"; // you can import them
import football_img from "../../images/football_image.jpg"; // you can import them
import soccer_img from "../../images/soccer_image.jpg"; // you can import them
import hockey_img from "../../images/hockey_image.jpg"; // you can import them


/* Favorites MODULE */
const FavoritesForm = () => {
  
  return (
    <div>
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
    {/* <img
      src={baseball_img}
      alt="Baseball"
      width="100"
      height="100"
    /> */}

    <input type="radio" name="sport" value="football" />
    <b class="option">Football</b>
    {/* <img
      src={football_img}
      alt="Football"
      width="100"
      height="100"
    /> */}
    <input type="radio" name="sport" value="basketball" />
    <b class="option">Basketball</b>
    {/* <img
      src={basketball_img}
      alt="Basketball"
      width="100"
      height="100"
    /> */}
    <input type="radio" name="sport" value="hockey" />
    <b class="option">Hockey</b>
    {/* <img
      src={hockey_img}
      alt="Hockey"
      width="100"
      height="100"
    /> */}
    <input type="radio" name="sport" value="soccer" />
    <b class="option">Soccer</b>
    {/* <img
      src={soccer_img}
      alt="Soccer"
      width="100"
      height="100"
    /> */}

    {/*Final option is 'other' for user to input their own sport*/}
    <input type="radio" name="sport" value="other" checked="checked" />
    <b class="option">Other </b>
    <input type="text" placeholder="Enter sport" name="sport" id="sport" />

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
    <b class="option">Other </b>
    <input
      type="text"
      placeholder="Enter level"
      name="otherLevel"
      id="otherLevel"
    />

    <hr />

    {/*Date form type*/}
    <label for="eventDate"><b class="question">Date: </b></label>
    <input type="date" name="date" />

    <hr />

    {/*text type for venue entry*/}
    <label for="venue"><b class="question">Venue: </b></label>
    <input
      type="text"
      placeholder="Enter venue"
      name="venue"
      id="venue"
      required
    />

    <hr />

    {/*text type for comment entry*/}
    <label for="comment"><b class="question">Comments? </b></label>
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
    src={baseball_img}
    alt="Baseball"
    width="100"
    height="100"
  />

</article>
<article>
  <img
    src={football_img}
    alt="Football"
    width="100"
    height="100"
  />

</article>
<article>
  <img
    src={basketball_img}
    alt="Basketball"
    width="100"
    height="100"
  />

</article>
<article>
  <img
    src={hockey_img}
    alt="Hockey"
    width="100"
    height="100"
  />

</article>
<article>
  <img
    src={soccer_img}
    alt="Soccer"
    width="100"
    height="100"
  />

</article>

<h1 class="title">Baseball Events</h1>

<img
  src={baseball_img}
  alt="Baseball"
  width="100"
  height="100"
/>
<UploadAndDisplayImage/>

<h1 class="title">Basketball Events</h1>

<img
  src={basketball_img}
  alt="Basketball"
  width="100"
  height="100"
/>
<UploadAndDisplayImage/>

<h1 class="title">Football Events</h1>

<img
  src={football_img}
  alt="Football"
  width="100"
  height="100"
/>

<UploadAndDisplayImage/>
<h1 class="title">Hockey Events</h1>

<img src={hockey_img} alt="Hockey" width="100" height="100" />
<UploadAndDisplayImage/>

<h1 class="title">Soccer Events</h1>

<img src={soccer_img} alt="Soccer" width="100" height="100" />
<UploadAndDisplayImage/>
<h1 class="title">Other Events</h1>
  <UploadAndDisplayImage/>
    </div>
  );
};

export default FavoritesForm;