import React from "react";
import "./styles.css";

export default function AvailableCities() {
  return (
    <div className="row">
      <div className="col-sm-6">
        <ul>
          <li className="first-city">
            <a href="/">London</a>
          </li>
          <li className="second-city">
            <a href="/">New York</a>
          </li>
          <li className="third-city">
            <a href="/">Tokyo</a>
          </li>
          <li className="fourth-city">
            <a href="/">Kyiv</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
