import React, { Component } from "react";
import Navbartop from "../components/Navbartop";
import Portcontent from "../components/Portcontent";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Navbartop />
        <Portcontent />
      </div>
    );
  }
}
