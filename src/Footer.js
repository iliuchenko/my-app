import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <footer>
      Coded by Viktoriia Iliuchenko and the project is
      <a
        href="https://github.com/iliuchenko/Weather1.git"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
      >
        {} open-sourced on GitHub
      </a>
    </footer>
  );
}
