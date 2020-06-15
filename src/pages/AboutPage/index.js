import React, { Component } from "react";
import Fade from "react-reveal";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import AboutBg from "../../assets/images/review-bg.svg";

import data from "../../json/AboutPage.json";

export default class index extends Component {
  componentDidMount() {
    document.title = `Kaikaya by The Sea - ${data.title}`;
    window.scrollTo(0, 0);
  }
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
              background: `url(${AboutBg}) no-repeat center`,
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
        <section className="content-about container-fluid">
          <div className="container">
            <div className="row">
              <Fade bottom>
                <div className="col-sm-4 col-md-3 middle">
                  <img src={data.imageOutdoor} alt="" width="100%" />
                </div>
                <div className="col-sm-8 col-md-9 middle">
                  {data.storyJapan}
                </div>
                <div className="col-12 mt-3 mb-5">{data.storyEnglish}</div>
              </Fade>
              <div className="col-sm-12 col-md-3 mb-5">
                <div className="row">
                  <Fade bottom>
                    <div className="col-12 col-sm-4 col-md-12 middle">
                      <img src={data.imageIndoor} alt="" width="100%" />
                    </div>
                    <div className="col-12 col-sm-8 col-md-12 middle">
                      <p className="mt-2 small">{data.description}</p>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="col-1"></div>
              <div className="col-md-8 mb-5">
                <div className="row">
                  <Fade bottom>
                    <div className="col-sm-4 col-md-4 middle order-sm-2">
                      <img src={data.imageOwner} alt="" width="100%" />
                    </div>
                    <div className="col-sm-8 col-md-8 middle order-sm-1">
                      {data.historyJapan}
                    </div>
                    <div className="col-12 mt-3 order-sm-3">
                      {data.historyEnglish}
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid">
          <Footer pathname={this.props.location.pathname} />
        </section>
      </div>
    );
  }
}
