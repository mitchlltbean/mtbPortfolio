import React, { Component } from "react";
import Navbartop from "../components/Navbartop";
import Aboutcontent from "../components/About";
import Footer from "../components/Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbartop />
        <Aboutcontent />
        <Footer />
      </div>
    );
  }
}
