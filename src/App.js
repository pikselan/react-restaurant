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
              style={{ height: "10vh", maxWidth: "212px" }}
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
