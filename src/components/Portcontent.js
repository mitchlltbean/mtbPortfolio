import React, { Component } from "react";
import Capture from "../images/Capture.PNG";
import Capture1 from "../images/Capture1.PNG";
import Capture3 from "../images/Capture3.PNG";
import project2 from "../images/project2.PNG";

export default class Portcontent extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h1>Kanji Study App</h1>
            <img
              src={Capture3}
              alt="image of homework"
              width="450"
              height="350"
            />
            <br></br>
            <a
              class="navbar-item"
              href="https://desasser.github.io/Japanese-Study-App/"
            >
              {" "}
              Link to Deployed Version
            </a>
            <br></br>
            <a
              class="navbar-item"
              href="https://github.com/desasser/Japanese-Study-App"
            >
              {" "}
              Link to Github Repo{" "}
            </a>
            <br />
            <br />
            <h1>MemoryBank</h1>
            <img
              src={project2}
              alt="image of homework"
              width="450"
              height="350"
            />
            <br></br>
            <a class="navbar-item" href="https://memorybank2021.herokuapp.com/">
              {" "}
              Link to Deployed Version{" "}
            </a>
            <br></br>
            <a
              class="navbar-item"
              href="https://github.com/samuelfox1/memoryBank"
            >
              {" "}
              Link to Github Repo{" "}
            </a>
            <br />
            <br />

            <h1>Day Planner</h1>
            <img
              src={Capture1}
              alt="image of homework"
              width="450"
              height="350"
            />
            <br></br>
            <a
              class="navbar-item"
              href="https://mitchlltbean.github.io/PlannerMTB/"
            >
              {" "}
              Link to Deployed Version{" "}
            </a>
            <br></br>
            <a
              class="navbar-item"
              href="https://github.com/mitchlltbean/PlannerMTB"
            >
              {" "}
              Link to Github Repo{" "}
            </a>
            <br />
            <br />

            <h1>Password Generator</h1>
            <img
              src={Capture}
              alt="image of homework"
              width="450"
              height="350"
            />
            <br></br>
            <a
              class="navbar-item"
              href="https://mitchlltbean.github.io/PasswordMtb/"
            >
              {" "}
              Link to Deployed Version{" "}
            </a>
            <br></br>
            <a
              class="navbar-item"
              href="https://github.com/mitchlltbean/PasswordMtb"
            >
              {" "}
              Link to Github Repo{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
