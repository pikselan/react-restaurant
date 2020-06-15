import React, { Component } from "react";
import Fade from "react-reveal";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import MenuBg from "../../assets/images/about-bg.svg";

import data from "../../json/MenuPage.json";

export default class index extends Component {
  render() {
    return (
      <div>
        <header
          className="container-fluid v-max"
          style={{
            background: `url(${MenuBg}) no-repeat center`,
            backgroundSize: "100% auto",
          }}
        >
          <Fade bottom>
            <Nav {...this.props} />
          </Fade>
          <div className="container text-center">
            <h1 className="h3 text-primary font-weight-bold d-sm-block d-lg-none">
              {data.title}
            </h1>
            <h1 className="display-4 text-primary font-weight-bold d-none d-lg-block">
              {data.title}
            </h1>
          </div>
        </header>
      </div>
    );
  }
}
