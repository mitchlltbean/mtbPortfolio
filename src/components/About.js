import React, { Component } from "react";
import me from "../images/me.jpg";
import "./About.css";

export default class Aboutcontent extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h1>About Me</h1>

            <img src={me} className="profilepic" alt="image of Mitchell Bean" />

            <p id="bio-content">
              Hello my name is Mitchell Bean and I am currently enrolled in the
              coding bootcamp through Trilogy industries. I hope to complete the
              class within four months and further my oppurtunities to land a
              job in the technology field.
              <br />
              <br />
              <br />
              If I am am not studying I like to spend time first with my wife
              and daughter. After that i enjoy cooking Steak, playing pc games,
              and golfing.
              <br />
              <br />
              <br />
              My current portfolio contains my work on our two group projects
              and two homeworks from the class.
            </p>
          </div>

          <div className="column is-offset-one-quarter" id="contactColumn">
            <h1>Contact</h1>
            <h2>Mitchtroybean@gmail.com</h2>
            <h2>Phone: 206-707-3586</h2>
            <a class="navbar-item" href="https://github.com/mitchlltbean/">
              {" "}
              Github Profile{" "}
            </a>

            <a
              class="navbar-item"
              href="https://www.linkedin.com/in/mitchell-bean-2619541b8/"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    );
  }
}
