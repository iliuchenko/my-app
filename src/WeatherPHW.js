import React from "react";
import "./styles.css";
import Pressure from "./Pressure.js";
import Humidity from "./Humidity.js";
import Wind from "./Wind.js";

export default function WeatherPHW() {
  return (
    <div className="col-4 weather-phw">
      <Pressure />
      <Humidity />
      <Wind />
    </div>
  );
}
