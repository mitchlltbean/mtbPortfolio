import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbartop.css";

export default class Navbartop extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbarleft" align="left">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>
        </span>
        <span className="navbarright" align="right">
          <Link
            to="/discover"
            className={
              window.location.pathname === "/Portfolio"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Portfolio
          </Link>
        </span>
      </nav>
    );
  }
}
