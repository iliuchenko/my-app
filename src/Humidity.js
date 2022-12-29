import React from "react";
import "./styles.css";

export default function Humidity() {
  return (
    <div className="humidity">
      Humidity: <span id="current-humidity">100</span>%
    </div>
  );
}
