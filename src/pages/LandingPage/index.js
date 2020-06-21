import React, { Component } from "react";
import Fade from "react-reveal";
// import axios from "axios";

import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Button from "../../components/Button";
import Star from "../../components/Star";

import HeroBg from "../../assets/images/hero-bg.svg";
import MenuBg from "../../assets/images/menu-bg.svg";
import ListBg from "../../assets/images/list-bg.svg";
import AboutBg from "../../assets/images/about-bg.svg";
import ReviewBg from "../../assets/images/review-bg.svg";
import IcTripadvisor from "../../assets/images/ic-tripadvisor.svg";
import IcLeft from "../../assets/images/ic-left.svg";
import IcRight from "../../assets/images/ic-right.svg";
import IcMap from "../../assets/images/ic-map-circle.svg";
import IcPhone from "../../assets/images/ic-phone-circle.svg";
import IcTime from "../../assets/images/ic-time-circle.svg";

import data from "../../json/LandingPage.json";

export default class index extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    document.title = `Kaikaya by The Sea - ${data.title}`;
    window.scrollTo(0, 0);
    // axios.get("http://localhost:3000/v1/api/landing-page").then((res) => {
    //   this.setState({ data: res.data });
    // });
  }

  render() {
    // const { data } = this.state;
    return (
      <div>
        <header className="hero container-fluid v-max">
          <Fade bottom>
            <Nav pathname={this.props.location.pathname} />
          </Fade>
          <Fade left delay={600}>
            <img
              className="plate-2 position-absolute d-none d-md-block"
              style={{ maxHeight: "466px", height: "24vw" }}
              src={data.hero.image3}
              alt="Food 2"
            />
          </Fade>
          <Fade right delay={400}>
            <img
              className="plate-1 position-absolute d-none d-md-block"
              style={{ maxHeight: "427px", height: "22vw" }}
              src={data.hero.image2}
              alt="Food 1"
            />
          </Fade>
          <div className="row middle">
            <div className="hero-text col-12 col-md-8 col-lg-6 text-center">
              <div
                className="hero-bg"
                style={{
                  background: `url(${HeroBg}) no-repeat center`,
                  backgroundSize: "100% auto",
                }}
              >
                <div className="hero-title">
                  <Fade bottom delay={200}>
                    <h1 className="hero-h1 h2 text-primary font-weight-bold d-sm-block d-lg-none">
                      {data.heading}
                    </h1>
                    <h1 className="hero-h1 display-4 text-primary font-weight-bold d-none d-lg-block">
                      {data.heading}
                    </h1>
                  </Fade>
                  <Fade bottom delay={400}>
                    <h2 className="mt-4 h6 d-sm-block d-lg-none">
                      {data.description}
                    </h2>
                    <h2 className="mt-4 h5 d-none d-lg-block">
                      {data.description}
                    </h2>
                  </Fade>
                  <Fade bottom delay={600}>
                    <Button
                      href={`/book`}
                      type="link"
                      className="btn btn-primary d-md-none mt-5"
                    >
                      Book a Table
                    </Button>
                    <Button
                      href={`/menu`}
                      type="link"
                      className="btn btn-info mt-4 mr-auto"
                    >
                      Our Menu
                    </Button>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="hero-icon col-12 position-absolute w-100 text-center d-none d-md-block">
              <div className="row">
                <Fade bottom delay={600}>
                  <div className="col-4">
                    <Button href={`#`} type="link" isDisabled>
                      <img src={IcTime} alt="Facebook" />
                      <p className="mt-1">Open Today 5:00 PM ~11:30PM</p>
                    </Button>
                  </div>
                  <div className="col-4 border-left border-right">
                    <Button href={`#`} type="link" isDisabled>
                      <img src={IcMap} alt="Facebook" />
                      <p className="mt-1">
                        23-7 Maruyama-cho, Shibuya-ku, Tokyo
                      </p>
                    </Button>
                  </div>
                  <div className="col-4">
                    <Button href={`#`} type="link" isDisabled>
                      <img src={IcPhone} alt="Facebook" />
                      <p className="mt-1">+81-3-3770-0878</p>
                    </Button>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </header>
        <section className="content-base container-fluid bg-base">
          <section
            className="item-menu container v-max"
            style={{
              background: `url(${MenuBg}) no-repeat center`,
              backgroundSize: "100% auto",
            }}
          >
            <div className="row h-100">
              <div className="col-md-6 middle">
                <Fade bottom>
                  <img
                    src={data.content.imagePrimary}
                    alt="Menu"
                    className="w-100"
                  />
                </Fade>
              </div>
              <div className="col-md-6 middle">
                <div className="row">
                  <Fade bottom>
                    <h1 className="item-menu-title h3 text-primary d-sm-block d-lg-none">
                      {data.content.title}
                    </h1>
                    <h1 className="item-menu-title display-4 text-primary d-none d-lg-block">
                      {data.content.title}
                    </h1>
                    <h2 className="h6 mt-4 text-gray d-sm-block d-lg-none">
                      {data.content.description}
                    </h2>
                    <h2 className="h5 mt-4 text-gray d-none d-lg-block">
                      {data.content.description}
                    </h2>
                    <Button
                      href={`/gallery`}
                      type="link"
                      className="btn btn-info mt-4"
                    >
                      Check Gallery
                    </Button>
                  </Fade>
                </div>
              </div>
            </div>
          </section>
          <section
            className="item-list container v-max"
            style={{
              background: `url(${ListBg}) no-repeat center`,
              backgroundSize: "100% auto",
            }}
          >
            <div className="h-100 middle">
              <div className="row text-center">
                <div className="col-12">
                  <Fade bottom>
                    <h1 className="h-3 text-primary d-sm-block d-lg-none">
                      Best Sea Food
                    </h1>
                    <h1 className="display-4 text-primary d-none d-lg-block">
                      Best Sea Food
                    </h1>
                  </Fade>
                </div>
                <Fade bottom>
                  {data.content.popular.map((item, index) => {
                    return (
                      <div
                        className="col-6 col-md-3 mt-2"
                        key={`popular-${index}`}
                      >
                        <div className="card d-sm-block d-lg-none">
                          <img
                            className="mx-auto"
                            src={item.image}
                            alt=""
                            style={{ width: "100%" }}
                          />
                          <h4 className="h5 small card-title d-sm-block d-lg-none">
                            {item.title}
                          </h4>
                        </div>
                        <div className="card d-none d-lg-block">
                          <img
                            className="card-img-top mx-auto"
                            src={item.image}
                            alt=""
                          />
                          <h4 className="card-title h5">{item.title}</h4>
                          <div className="small card-body">
                            <p className="card-text text-truncate">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="col-12">
                    <Button
                      href={`/menu`}
                      type="link"
                      className="btn btn-info mt-4"
                    >
                      Other Foods
                    </Button>
                  </div>
                </Fade>
              </div>
            </div>
          </section>
        </section>
        <section className="about container-fluid">
          <div className="space-base container-fluid d-none d-md-block">
            <div className="bg-base h-100"></div>
          </div>
          <div
            className="container-fluid"
            style={{
              background: `url(${AboutBg}) no-repeat center`,
              backgroundSize: "100% auto",
            }}
          >
            <div className="about-margin container">
              <div className="row h-100">
                <div className="col-md-4 middle">
                  <div className="row">
                    <Fade bottom>
                      <h1 className="about-title h3 text-primary d-sm-block d-lg-none">
                        {data.about.title}
                      </h1>
                      <h1 className="about-title display-4 text-primary d-none d-lg-block">
                        {data.about.title}
                      </h1>
                      <h2 className="h6 mt-4 text-gray d-sm-block d-lg-none">
                        {data.about.description}
                      </h2>
                      <h2 className="h4 mt-4 text-gray d-none d-lg-block">
                        {data.about.description}
                      </h2>
                      <Button
                        href={`/about`}
                        type="link"
                        className="btn btn-info mt-4"
                      >
                        About Us
                      </Button>
                    </Fade>
                  </div>
                </div>
                <div className="col-md-8 row d-none d-md-block">
                  <div className="about-2 mx-auto middle">
                    <Fade>
                      <img
                        style={{ maxHeight: "725px", height: "74vh" }}
                        src={data.about.image2}
                        className="blur-image"
                        alt="About2"
                      />
                    </Fade>

                    <Fade left>
                      <img
                        className="about-1 position-absolute"
                        style={{ maxHeight: "221px", height: "12vw" }}
                        src={data.about.image1}
                        alt="About1"
                      />
                    </Fade>
                    <Fade right>
                      <img
                        className="about-3 position-absolute"
                        style={{ maxHeight: "285px", height: "15vw" }}
                        src={data.about.image3}
                        alt="About3"
                      />
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-bottom container-fluid">
          <section
            className="review container text-center middle"
            style={{
              background: `url(${ReviewBg}) no-repeat center`,
              backgroundSize: "100% auto",
            }}
          >
            <div className="row">
              <div className="col-1 d-none d-sm-block">
                <div className="h-100 middle">
                  <Fade left>
                    <Button href={`/`} type="link">
                      <img src={IcLeft} alt="" />
                    </Button>
                  </Fade>
                </div>
              </div>
              <div className="col-12 col-sm-10">
                <Fade bottom>
                  <Star className="col-12" />
                  <div className="col-12 mt-4">
                    <h5 className="h6 font-weight-bold text-primary d-sm-block d-lg-none">
                      {data.review[0].title}
                    </h5>
                    <h5 className="font-weight-bold text-primary d-none d-lg-block">
                      {data.review[0].title}
                    </h5>
                  </div>
                  <div className="col-12 mt-4">
                    <h5 className="h6 font-italic d-sm-block d-lg-none">
                      {data.review[0].description}
                    </h5>
                    <h5 className="font-italic d-none d-lg-block">
                      {data.review[0].description}
                    </h5>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="d-sm-block d-lg-none">
                      <h6>
                        {`${data.review[0].name}. `}
                        <span className="font-weight-light">
                          {data.review[0].fom}
                        </span>
                      </h6>
                    </div>
                    <div className="d-none d-lg-block">
                      <h5>{`${data.review[0].name}. `}</h5>
                      <h5 className="font-weight-light">
                        {data.review[0].from}
                      </h5>
                    </div>
                  </div>
                  <div className="col-12 mt-4 d-none d-sm-block">
                    <img src={IcTripadvisor} alt="" />
                  </div>
                </Fade>
              </div>
              <div className="col-1 d-none d-sm-block">
                <div className="h-100 middle">
                  <Button href={`/`} type="link">
                    <Fade right>
                      <img src={IcRight} alt="" />
                    </Fade>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <Footer pathname={this.props.location.pathname} />
        </section>
      </div>
    );
  }
}
