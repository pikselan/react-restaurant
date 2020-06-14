import React, { Component } from "react";

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

export default class index extends Component {
  render() {
    return (
      <div>
        <header className="container-fluid v-max">
          <Nav />
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
                  <h1 className="hero-h1 h2 text-primary font-weight-bold d-sm-block d-lg-none">
                    “Treasure Every Encounter, For It Will Never Recur.”
                  </h1>
                  <h1 className="hero-h1 display-3 text-primary font-weight-bold d-none d-lg-block">
                    “Treasure Every Encounter, For It Will Never Recur.”
                  </h1>
                  <h2 className="mt-4 h6 d-sm-block d-lg-none">
                    You are “by the ocean” wherever you are, For Japan is
                    surrounded by the ocean. Fish caught in the morning is on
                    the table in the evening.
                  </h2>
                  <h2 className="mt-4 h2 d-none d-lg-block">
                    You are “by the ocean” wherever you are, For Japan is
                    surrounded by the ocean. Fish caught in the morning is on
                    the table in the evening.
                  </h2>
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
                <img
                  style={{ maxHeight: "806px", height: "84vh" }}
                  src={`assets/images/plate-under.png`}
                  alt="Front Store"
                />

                <img
                  className="plate-2 position-absolute"
                  style={{ maxHeight: "386px", height: "24vw" }}
                  src={`assets/images/plate-2.png`}
                  alt="Food 2"
                />
                <img
                  className="plate-1 position-absolute"
                  style={{ maxHeight: "350px", height: "22vw" }}
                  src={`assets/images/plate-1.png`}
                  alt="Food 1"
                />
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
                <img
                  src={`assets/images/menu-first.png`}
                  alt="Menu"
                  className="w-100"
                />
              </div>
              <div className="col-md-6 middle">
                <div className="row">
                  <h1 className="item-menu-title h3 text-primary d-sm-block d-lg-none">
                    The Finest Sea Cuisine
                  </h1>
                  <h1 className="item-menu-title display-4 text-primary d-none d-lg-block">
                    The Finest Sea Cuisine
                  </h1>
                  <h2 className="h6 mt-4 text-gray d-sm-block d-lg-none">
                    The menu is based on Japanese style, a fusion of Asian and
                    Western food. The dishes are mainly made from fish delivered
                    directly from the sea by the owner
                  </h2>
                  <h2 className="h4 mt-4 text-gray d-none d-lg-block">
                    The menu is based on Japanese style, a fusion of Asian and
                    Western food. The dishes are mainly made from fish delivered
                    directly from the sea by the owner
                  </h2>
                  <Button href={`/`} type="link" className="btn btn-info mt-4">
                    Check Menu
                  </Button>
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
                  <h1 className="h-3 text-primary d-sm-block d-lg-none">
                    Best Sea Food
                  </h1>
                  <h1 className="display-4 text-primary d-none d-lg-block">
                    Best Sea Food
                  </h1>
                </div>
                <div className="col-6 col-md-3">
                  <div className="card">
                    <img
                      className="card-img-top mx-auto"
                      src={`assets/images/food-1.png`}
                      alt=""
                    />
                    <h4 className="card-title">Sengyo no Karuppacho</h4>
                    <div className="card-body">
                      <p className="card-text text-truncate">
                        Fresh fish carpaccio
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="card">
                    <img
                      className="card-img-top mx-auto"
                      src={`assets/images/food-2.png`}
                      alt=""
                    />
                    <h4 className="card-title">Shimorhuri Gyu no Sushi</h4>
                    <div className="card-body">
                      <p className="card-text text-truncate">
                        Premium Japanese beef sushi
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="card">
                    <img
                      className="card-img-top mx-auto"
                      src={`assets/images/food-3.png`}
                      alt=""
                    />
                    <h4 className="card-title">Ebi no Ebi niyoru Ebi Sousu</h4>
                    <div className="card-body">
                      <p className="card-text text-truncate">
                        Prawn with prawn sauce
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="card">
                    <img
                      className="card-img-top mx-auto"
                      src={`assets/images/food-4.png`}
                      alt=""
                    />
                    <h4 className="card-title">Shinsen Zako no Guriru</h4>
                    <div className="card-body">
                      <p className="card-text text-truncate">
                        Grilled fresh fish with garlic, olive oil
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <Button href={`/`} type="link" className="btn btn-info mt-4">
                    Other Foods
                  </Button>
                </div>
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
                    <h1 className="h3 text-primary d-sm-block d-lg-none">
                      KAIKAYA <br />
                      By The Sea
                    </h1>
                    <h1 className="display-4 text-primary d-none d-lg-block">
                      KAIKAYA <br />
                      By The Sea
                    </h1>
                    <h2 className="h6 mt-4 text-gray d-sm-block d-lg-none">
                      In some country, there is a port town. In this tow, there
                      is a restaurant. Owned by a mysterius Japanese man, who
                      cooks marvelous seafood dishes.
                    </h2>
                    <h2 className="h4 mt-4 text-gray d-none d-lg-block">
                      In some country, there is a port town. In this tow, there
                      is a restaurant. Owned by a mysterius Japanese man, who
                      cooks marvelous seafood dishes.
                    </h2>
                    <Button
                      href={`/`}
                      type="link"
                      className="btn btn-info mt-4"
                    >
                      About Us
                    </Button>
                  </div>
                </div>
                <div className="col-md-8 row d-none d-md-block">
                  <div className="about-2 mx-auto">
                    <img
                      style={{ maxHeight: "725px", height: "74vh" }}
                      src={`assets/images/about-2.png`}
                      alt="About2"
                    />
                  </div>

                  <img
                    className="about-1 position-absolute"
                    style={{ maxHeight: "221px", height: "12vw" }}
                    src={`assets/images/about-1.png`}
                    alt="About1"
                  />
                  <img
                    className="about-3 position-absolute"
                    style={{ maxHeight: "285px", height: "15vw" }}
                    src={`assets/images/about-3.png`}
                    alt="About3"
                  />
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
              <div className="col-1 middle">
                <Button href={`/`} type="link">
                  <img src={IcLeft} alt="" />
                </Button>
              </div>
              <div className="col-10">
                <Star className="col-12" />
                <div className="col-12 mt-4">
                  <h5 className="font-weight-bold text-primary">
                    My favorite Sea food restaurant in Japan!
                  </h5>
                </div>
                <div className="col-12 mt-4">
                  <h5 className="font-italic">
                    I love this restaurant because it’s calm and authentic. The
                    service is excellent and I’ve always enjoyed the variety of
                    dishes they offer.
                  </h5>
                </div>
                <div className="col-12 mt-4">
                  <h5>Satoshi Kimura</h5>
                  <h5 className="font-weight-light">Tokyo, Japan</h5>
                </div>
                <div className="col-12 mt-4">
                  <img src={IcTripadvisor} alt="" />
                </div>
              </div>
              <div className="col-1 middle">
                <Button href={`/`} type="link">
                  <img src={IcRight} alt="" />
                </Button>
              </div>
            </div>
          </section>
          <Footer />
        </section>
      </div>
    );
  }
}
