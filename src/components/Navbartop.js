import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbartop.css";

export default class Navbartop extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbarRow">
          <div className="navbarleft">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={{ color: "bisque" }}
            >
              About/Contact
            </Link>
          </div>
          <div className="navbarright">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/Portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={{ color: "bisque" }}
            >
              Portfolio
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
