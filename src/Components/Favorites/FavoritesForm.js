// PROTECTED ROUTE

import React from "react";
import UploadAndDisplayImage from "./ImageUpload"
// import UploadImage from "./UploadingImage";

// import baseball_img from "../../images/baseball_image.jpg"; 
// import basketball_img from "../../images/basketball_image.jpg"; 
// import football_img from "../../images/football_image.jpg"; 
// import soccer_img from "../../images/soccer_image.jpg"; 
// import hockey_img from "../../images/hockey_image.jpg"; 


/* Favorites MODULE */
const FavoritesForm = ({ event, user, onChange, onSubmit }) => {
  return (
    <div>

      <div id="app"></div>

      <form onSubmit={onSubmit} autoComplete="off">
        <div className="form-group">
          <br />
          <label>Sport: </label>
          <br />
          <input
            type="text"
            className="form-control"
            id="sport-input"
            value={event.sport}
            onChange={onChange}
            name="sport"
            placeholder="Sport"
            required
          />
        </div>

        <div className="form-group">
          <br />
          <label>Level: </label>
          <br />
          <input
            type="text"
            className="form-control"
            id="level-input"
            value={event.level}
            onChange={onChange}
            name="level"
            placeholder="Level"
            required
          />
        </div>

        <div className="form-group">
          <br />
          <label>Date: </label>
          <br />
          <input
            type="date"
            className="form-control"
            id="date-input"
            value={event.date}
            onChange={onChange}
            name="date"
            required
          />
        </div>

        <div className="form-group">
          <br />
          <label>Venue: </label>
          <br />
          <input
            type="text"
            className="form-control"
            id="venue-input"
            value={event.venue}
            onChange={onChange}
            name="venue"
            placeholder="Venue"
            required
          />
        </div>

        <div className="form-group">
          <br />
          <label>Comments? </label>
          <br />
          <input
            type="text"
            className="form-control"
            id="comment-input"
            value={event.comment}
            onChange={onChange}
            name="comment"
            placeholder="Enter Comment"
          />
        </div>
        
        <div>
          <UploadAndDisplayImage/>
        </div>
        
        <div className="form-group">
          <br />
          <button type="submit" className="btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FavoritesForm;

