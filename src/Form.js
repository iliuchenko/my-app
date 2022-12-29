import React from "react";
import "./styles.css";

export default function Form() {
  return (
    <form>
      <div className="row d-flex">
        <div className="col-6">
          <input
            type="search"
            id="search-city"
            className="search"
            placeholder="Type a city..."
            autocomplete="off"
          />
        </div>
        <div className="col-3">
          <button type="submit" className="search-button">
            Search the city
          </button>
        </div>
        <div className="col-3">
          <button
            type="submit"
            className="search-button"
            id="search-current-location"
          >
            Current location
          </button>
        </div>
      </div>
    </form>
  );
}
