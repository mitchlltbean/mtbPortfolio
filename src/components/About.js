import React, { Component } from "react";
import me from "../images/me.jpg";
import "./About.css";

export default class Aboutcontent extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h1 style={{ color: "#404040" }}>About Me</h1>

            <img src={me} className="profilepic" alt="image of Mitchell Bean" />

            <p id="bio-content" style={{ color: "#404040" }}>
              <strong>
                Hello my name is Mitchell Bean and I am currently enrolled in
                the coding bootcamp through Trilogy industries. I hope to
                complete the class within the next weeks and further my
                oppurtunities to land a job in the technology field.
              </strong>
              <br />
              <br />
              <br />
              <strong>
                If I am am not studying I like to spend time first with my wife
                and daughter. After that i enjoy cooking Steak, playing pc
                games, and golfing.
              </strong>
              <br />
              <br />
              <br />
              <strong>
                My current portfolio contains my work on our two group projects
                and four homeworks from the class.
              </strong>
            </p>
          </div>

          <div
            className="column is-offset-one-quarter"
            id="contactColumn"
            style={{ color: "#404040" }}
          >
            <h1>Contact</h1>
            <h2>Mitchtroybean@gmail.com</h2>
            <h2>Phone: 206-707-3586</h2>
            <a
              class="navbar-item"
              href="https://github.com/mitchlltbean/"
              style={{ color: "bisque", background: "#92643b" }}
            >
              {" "}
              <strong> Github Profile</strong>{" "}
            </a>
            ~
            <a
              class="navbar-item"
              href="https://www.linkedin.com/in/mitchell-bean-2619541b8/"
              style={{ color: "bisque", background: "#92643b" }}
            >
              <strong> LinkedIn Profile</strong>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
