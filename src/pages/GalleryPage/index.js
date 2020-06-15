import React, { Component } from "react";
import Fade from "react-reveal";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import GalleryBg from "../../assets/images/menu-bg.svg";

import data from "../../json/GalleryPage.json";

export default class index extends Component {
  render() {
    return (
      <div>
        <header className="container-fluid v-max">
          <Fade bottom>
            <Nav pathname={this.props.location.pathname} />
          </Fade>
          <div
            className="container text-center h-100"
            style={{
              background: `url(${GalleryBg}) no-repeat center`,
              backgroundSize: "100% auto",
            }}
          >
            <Fade bottom delay={300}>
              <h1 className="h2 text-primary font-weight-bold d-sm-block d-lg-none">
                {data.title}
              </h1>
              <h1 className="display-3 text-primary font-weight-bold d-none d-lg-block">
                {data.title}
              </h1>
            </Fade>
          </div>
        </header>
      </div>
    );
  }
}
