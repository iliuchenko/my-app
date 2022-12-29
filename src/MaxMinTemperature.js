import React from "react";
import "./styles.css";

export default function MaxMinTemperature() {
  return (
    <div className="max-min temp">
      H: <span id="max-temp">21</span>
      <span className="celsius">&#176;C</span>
      <br />
      L:{" "}
      <span clasNames="forecast-temperature-min" id="min-temp">
        13
      </span>
      <span className="celsius">&#176;C</span>
    </div>
  );
}
