import React from "react";
import "./assets/scss/styles.scss";
import Logo from "./assets/images/logo.png";
import PlateUnder from "./assets/images/plate-under.png";
import Plate1 from "./assets/images/plate-1.png";
import Plate2 from "./assets/images/plate-2.png";
import HeroBg from "./assets/images/hero-bg.svg";
import MenuBg from "./assets/images/menu-bg.svg";
import ListBg from "./assets/images/list-bg.svg";
import AboutBg from "./assets/images/about-bg.svg";
import ReviewBg from "./assets/images/review-bg.svg";
import IcFacebook from "./assets/images/ic-facebook.svg";
import IcInstagram from "./assets/images/ic-instagram.svg";
import IcTwitter from "./assets/images/ic-twitter.svg";
import IcTripadvisor from "./assets/images/ic-tripadvisor.svg";
import IcTripadvisorMini from "./assets/images/ic-tripadvisor-mini.svg";
import IcPhone from "./assets/images/ic-phone.svg";
import MenuFirst from "./assets/images/menu-first.png";
import Food1 from "./assets/images/food-1.png";
import Food2 from "./assets/images/food-2.png";
import Food3 from "./assets/images/food-3.png";
import Food4 from "./assets/images/food-4.png";
import About1 from "./assets/images/about-1.png";
import About2 from "./assets/images/about-2.png";
import About3 from "./assets/images/about-3.png";
import IcStar from "./assets/images/ic-star.svg";
import IcLeft from "./assets/images/ic-left.svg";
import IcRight from "./assets/images/ic-right.svg";
import IcMap from "./assets/images/ic-map.svg";
import ToTop from "./assets/images/to-top.svg";
import "./assets/js/index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header className="container-fluid v-max">
        <nav className="navbar navbar-expand-md navbar-light bg-white">
          <Link to={`/`} className="navbar-brand">
            <img
              src={Logo}
              alt="Kaikaya By The Sea"
              style={{ height: "10vh", maxWidth: "212px", maxHeight: "100px" }}
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center h4"
            id="navbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to={`/`} className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item d-block d-md-none">
                <Link
                  to={`/`}
                  className="nav-link text-primary font-weight-bold"
                >
                  Book a Table
                </Link>
              </li>
            </ul>
          </div>
          <Link to={`/`} className="btn btn-primary d-none d-md-block">
            Book a Table
          </Link>
        </nav>
        <div className="hero row">
          <div className="hero-text col-12 col-md-8 col-lg-6">
            <div
              className="hero-title"
              style={{
                background: `url(${HeroBg}) no-repeat`,
                backgroundSize: "100% auto",
              }}
            >
              <h1 className="hero-h1 h2 text-primary font-weight-bold d-sm-block d-lg-none">
                “Treasure Every Encounter, For It Will Never Recur.”
              </h1>
              <h1 className="hero-h1 display-3 text-primary font-weight-bold d-none d-lg-block">
                “Treasure Every Encounter, For It Will Never Recur.”
              </h1>
              <h2 className="mt-4 h6 d-sm-block d-lg-none">
                You are “by the ocean” wherever you are, For Japan is surrounded
                by the ocean. Fish caught in the morning is on the table in the
                evening.
              </h2>
              <h2 className="mt-4 h2 d-none d-lg-block">
                You are “by the ocean” wherever you are, For Japan is surrounded
                by the ocean. Fish caught in the morning is on the table in the
                evening.
              </h2>
              <Link to={`/`} className="btn btn-primary d-md-none mr-3 mt-4">
                Book a Table
              </Link>
              <Link tp={`/`} className="btn btn-info mt-4">
                Our Menu
              </Link>
            </div>
            <div className="hero-icon row position-absolute w-100">
              <Link to={`/`}>
                <img src={IcFacebook} alt="Facebook" />
              </Link>
              <Link to={`/`}>
                <img src={IcTwitter} alt="Twitter" className="ml-3" />
              </Link>
              <Link to={`/`}>
                <img src={IcInstagram} alt="Instagram" className="ml-3" />
              </Link>
              <Link to={`/`}>
                <img
                  src={IcTripadvisor}
                  alt="Tripadvisor"
                  className="ml-3 d-none d-xl-block"
                />
                <img
                  src={IcTripadvisorMini}
                  alt="Tripadvisor"
                  className="ml-3 d-block d-xl-none"
                />
              </Link>
              <Link
                to={`tel:+81337700878`}
                className="row border-left text-decoration-none ml-3 pl-3"
              >
                <img src={IcPhone} alt="Phone" />
                <h5 className="ml-3 my-2 d-none d-lg-block">+81-3-3770-0878</h5>
              </Link>
            </div>
          </div>
          <div className="hero-image col-12 col-md-4 col-lg-6">
            {/* <div className="plate-under mx-auto">
              <img
                style={{ maxHeight: "806px", height: "84vh" }}
                src={PlateUnder}
                alt="Front Store"
              />

              <img
                className="plate-2 position-absolute"
                style={{ maxHeight: "386px", height: "24vw" }}
                src={Plate2}
                alt="Food 2"
              />
              <img
                className="plate-1 position-absolute"
                style={{ maxHeight: "350px", height: "22vw" }}
                src={Plate1}
                alt="Food 1"
              />
            </div> */}
          </div>
        </div>
      </header>
      <section className="content-base container-fluid bg-base">
        <section
          className="item-menu container v-max"
          style={{
            background: `url(${MenuBg}) no-repeat`,
            backgroundSize: "100% auto",
          }}
        ></section>
        <section
          className="item-list container v-max"
          style={{
            background: `url(${ListBg}) no-repeat`,
            backgroundSize: "100% auto",
          }}
        ></section>
      </section>
      <section
        className="about container-fluid"
        style={{
          background: `url(${AboutBg}) no-repeat`,
          backgroundSize: "100% auto",
        }}
      ></section>
      <section className="container-fluid v-max">
        <section
          className="review container border-bottom text-center mt-5 pt-5"
          style={{
            background: `url(${ReviewBg}) no-repeat`,
            backgroundSize: "100% auto",
          }}
        ></section>
        <footer className="container-fluid mt-3"></footer>
      </section>
    </Router>
  );
}

export default App;
