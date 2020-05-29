import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostFav from "parts/MostFav";

import landingPage from "json/landingPage.json";
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refFav = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refFav={this.refFav} />
        <MostFav refFav={this.refFav} data={landingPage.mostFav} />
      </>
    );
  }
}
