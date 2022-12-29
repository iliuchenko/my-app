import React from "react";
import "./styles.css";
import CurrentDate from "./CurrentDate.js";
import WeatherDescription from "./WeatherDescription.js";
import MaxMinTemperature from "./MaxMinTemperature.js";
import WeatherPHW from "./WeatherPHW.js";

export default function MainWeather() {
  return (
    <div class="row">
      <CurrentDate />
      <div class="col-4" id="weather">
        <WeatherDescription />
        <MaxMinTemperature />
      </div>
      <WeatherPHW />
    </div>
  );
}
