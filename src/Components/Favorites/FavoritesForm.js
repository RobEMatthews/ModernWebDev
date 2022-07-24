// PROTECTED ROUTE
// This form allows users to record new events and store in the parse database

import React from "react";

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
        <br />
        <div>
          <input
          type="file"
          name="myImage"
          onChange={onChange}
          />
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
