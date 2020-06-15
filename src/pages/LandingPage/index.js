import React, { Component } from "react";
import Fade from "react-reveal";

import Social from "../../components/Social";
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

import data from "../../json/LandingPage.json";

export default class index extends Component {
  render() {
    return (
      <div>
        <header className="container-fluid v-max">
          <Fade bottom>
            <Nav pathname={this.props.location.pathname} />
          </Fade>
          <div className="hero row">
            <div className="hero-text col-12 col-md-8 col-lg-6">
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
                      {data.title}
                    </h1>
                    <h1 className="hero-h1 display-3 text-primary font-weight-bold d-none d-lg-block">
                      {data.title}
                    </h1>
                  </Fade>
                  <Fade bottom delay={400}>
                    <h2 className="mt-4 h6 d-sm-block d-lg-none">
                      {data.description}
                    </h2>
                    <h2 className="mt-4 h2 d-none d-lg-block">
                      {data.description}
                    </h2>
                  </Fade>
                  <Fade bottom delay={600}>
                    <Button
                      href={`/`}
                      type="link"
                      className="btn btn-primary d-md-none mr-3 mt-4"
                    >
                      Book a Table
                    </Button>
                    <Button
                      href={`/`}
                      type="link"
                      className="btn btn-info mt-4 mr-auto"
                    >
                      Our Menu
                    </Button>
                  </Fade>
                </div>
              </div>
              <Social
                className="hero-icon row position-absolute w-100"
                withMiniTripadvisor
                withPhone
              />
            </div>
            <div className="hero-image col-12 col-md-4 col-lg-6 d-none d-md-block">
              <div className="plate-under mx-auto">
                <Fade delay={200}>
                  <img
                    style={{ maxHeight: "806px", height: "84vh" }}
                    src={data.hero.image1}
                    alt="Front Store"
                  />
                </Fade>

                <Fade left delay={600}>
                  <img
                    className="plate-2 position-absolute"
                    style={{ maxHeight: "386px", height: "24vw" }}
                    src={data.hero.image3}
                    alt="Food 2"
                  />
                </Fade>
                <Fade right delay={400}>
                  <img
                    className="plate-1 position-absolute"
                    style={{ maxHeight: "350px", height: "22vw" }}
                    src={data.hero.image2}
                    alt="Food 1"
                  />
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
                    <h2 className="h4 mt-4 text-gray d-none d-lg-block">
                      {data.content.description}
                    </h2>
                    <Button
                      href={`/`}
                      type="link"
                      className="btn btn-info mt-4"
                    >
                      Check Menu
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
                          <h4 className="card-title">{item.title}</h4>
                          <div className="card-body">
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
                      href={`/`}
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
          <div className="space-base container-fluid">
            <div className="bg-base h-100 d-none d-md-block"></div>
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
                        href={`/`}
                        type="link"
                        className="btn btn-info mt-4"
                      >
                        About Us
                      </Button>
                    </Fade>
                  </div>
                </div>
                <div className="col-md-8 row d-none d-md-block">
                  <div className="about-2 mx-auto">
                    <Fade>
                      <img
                        style={{ maxHeight: "725px", height: "74vh" }}
                        src={data.about.image2}
                        alt="About2"
                      />
                    </Fade>
                  </div>

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
        </section>
        <section className="container-fluid v-max">
          <section
            className="review container border-bottom text-center middle"
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
                      {data.review.title}
                    </h5>
                    <h5 className="font-weight-bold text-primary d-none d-lg-block">
                      {data.review.title}
                    </h5>
                  </div>
                  <div className="col-12 mt-4">
                    <h5 className="h6 font-italic d-sm-block d-lg-none">
                      {data.review.description}
                    </h5>
                    <h5 className="font-italic d-none d-lg-block">
                      {data.review.description}
                    </h5>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="d-sm-block d-lg-none">
                      <h6>
                        {`${data.review.name}. `}
                        <span className="font-weight-light">
                          {data.review.fom}
                        </span>
                      </h6>
                    </div>
                    <div className="d-none d-lg-block">
                      <h5>{`${data.review.name}. `}</h5>
                      <h5 className="font-weight-light">{data.review.from}</h5>
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
