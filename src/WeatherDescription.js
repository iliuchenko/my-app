import React from "react";
import "./styles.css";

export default function WeatherDescription() {
  return (
    <div>
      <div className="weather-description">Sunny</div>
      <div className="current-temperature">
        <span id="currentDayCelsius">21</span>
        <a href="/" className="celsius">
          &#176;C
        </a>{" "}
        |
        <a href="/" className="fahrenheit">
          &#176;F
        </a>
      </div>
    </div>
  );
}
