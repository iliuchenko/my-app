import React from "react";
import "./styles.css";

export default function Pressure() {
  return (
    <div className="pressure">
      Pressure: <span id="current-pressure">1023</span> hPa
    </div>
  );
}
