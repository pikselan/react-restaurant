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
// import $ from "jquery";
// import "./assets/js/index";

function App() {
  return (
    <div>
      <header className="container-fluid v-max">
        <nav className="navbar navbar-expand-md navbar-light bg-white">
          <div className="col-md-3 navbar-brand m-0">
            <a href={"/"} className="">
              <img
                className="w-100"
                style={{ maxWidth: "212px" }}
                src={Logo}
                alt="Kaikaya By The Sea"
              />
            </a>
          </div>
          <div className="col-md-6">
            <ul className="navbar-nav justify-content-center h4">
              <li className="nav-item active">
                <a className="nav-link" href={"/"}>
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"/"}>
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"/"}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"/"}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 text-right">
            <button className="btn btn-primary" type="submit">
              Book a Table
            </button>
          </div>
        </nav>
        <section className="hero row">
          <div
            className="hero-text col-lg-6"
            style={{
              background: `url(${HeroBg}) no-repeat`,
              backgroundSize: "100% auto",
            }}
          >
            <div>
              <h1 className="display-3 text-primary font-weight-bold">
                “Treasure Every Encounter, For It Will Never Recur.”
              </h1>
              <h2 className="h4 mt-4">
                You are “by the ocean” wherever you are, For Japan is surrounded
                by the ocean. Fish caught in the morning is on the table in the
                evening.
              </h2>
              <button className="btn btn-primary mt-5 mr-4 d-md-none">
                Book a Table
              </button>
              <button className="btn btn-info mt-5">Our Menu</button>
            </div>
            <div className="hero-icon row position-absolute w-100">
              <div className="row">
                <a href={"/"}>
                  <img src={IcFacebook} alt="Facebook" className="ml-3" />
                </a>
                <a href={"/"}>
                  <img src={IcTwitter} alt="Twitter" className="ml-3" />
                </a>
                <a href={"/"}>
                  <img src={IcInstagram} alt="Instagram" className="ml-3" />
                </a>
                <a href={"/"}>
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
                </a>
                <a
                  href={"tel:+81337700878"}
                  className="row text-decoration-none ml-3 pl-3 border-left"
                >
                  <img src={IcPhone} alt="Phone" />
                  <h5 className="ml-3 my-2 d-none d-lg-block">
                    +81 3 3770 0878
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-image col-lg-6 h-100 row d-none d-lg-block">
            <div className="plate-under mx-auto">
              <img
                style={{ maxHeight: "806px", height: "84vh" }}
                src={PlateUnder}
                alt="Front Store"
              />
            </div>

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
          </div>
        </section>
      </header>
      <section className="content-base container-fluid bg-base">
        <section
          className="item-menu container v-max"
          style={{
            background: `url(${MenuBg}) no-repeat`,
            backgroundSize: "100% auto",
          }}
        >
          <div className="row">
            <div className="col-md-6 mt-5 pt-4">
              <img src={MenuFirst} alt="Menu" />
            </div>
            <div className="col-md-6 mt-5 pt-5">
              <h1 className="item-menu-title display-4 text-primary mt-5 pt-5">
                The Finest Sea Cuisine
              </h1>
              <h2 className="h4 mt-4 text-gray">
                The menu is based on Japanese style, a fusion of Asian and
                Western food. The dishes are mainly made from fish delivered
                directly from the sea by the owner
              </h2>
              <button className="btn btn-info mt-5">Check Menu</button>
            </div>
          </div>
        </section>
        <section
          className="item-list container v-max"
          style={{
            background: `url(${ListBg}) no-repeat`,
            backgroundSize: "100% auto",
          }}
        >
          <div className="row">
            <div className="col-12 text-center mt-5 pt-1">
              <h1 className="display-4 text-primary">Best Sea Food</h1>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <img className="card-img-top" src={Food1} alt="" />
                <h4 className="card-title">Sengyo no Karuppacho</h4>
                <div className="card-body">
                  <p className="card-text">Fresh fish carpaccio</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <img className="card-img-top" src={Food2} alt="" />
                <h4 className="card-title">Shimorhuri Gyu no Sushi</h4>
                <div className="card-body">
                  <p className="card-text">Premium Japanese beef sushi</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <img className="card-img-top" src={Food3} alt="" />
                <h4 className="card-title">Ebi no Ebi niyoru Ebi Sousu</h4>
                <div className="card-body">
                  <p className="card-text">Prawn with prawn sauce</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <img className="card-img-top" src={Food4} alt="" />
                <h4 className="card-title">Shinsen Zako no Guriru</h4>
                <div className="card-body">
                  <p className="card-text">
                    Grilled fresh fish with garlic, olive oil
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-info mt-5 px-3">Other Foods</button>
            </div>
          </div>
        </section>
      </section>
      <section
        className="about container-fluid"
        style={{
          background: `url(${AboutBg}) no-repeat`,
          backgroundSize: "100% auto",
        }}
      >
        <div className="about-margin container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="display-4 text-primary mt-5 pt-5">
                KAIKAYA <br />
                By The Sea
              </h1>
              <h2 className="h4 mt-4 text-gray">
                In some country, there is a port town. In this tow, there is a
                restaurant. Owned by a mysterius Japanese man, who cooks
                marvelous seafood dishes.
              </h2>
              <button className="btn btn-info mt-5">About Us</button>
            </div>
            <div className="col-md-8 row">
              <div className="about-2 mx-auto">
                <img style={{ maxHeight: "725px" }} src={About2} alt="About2" />
              </div>

              <img
                className="about-1 position-absolute"
                style={{ maxHeight: "221px" }}
                src={About1}
                alt="About1"
              />
              <img
                className="about-3 position-absolute"
                style={{ maxHeight: "285px" }}
                src={About3}
                alt="About3"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid v-max">
        <section
          className="review container border-bottom text-center mt-5 pt-5"
          style={{
            background: `url(${ReviewBg}) no-repeat`,
            backgroundSize: "100% auto",
          }}
        >
          <div className="row my-5 py-5">
            <div className="col-1 my-5 py-5">
              <a className="my-auto" href={"/"}>
                <img src={IcLeft} alt="" />
              </a>
            </div>
            <div className="col-10 my-5 py-5">
              <div className="col-12">
                <img src={IcStar} alt="" />
                <img src={IcStar} alt="" />
                <img src={IcStar} alt="" />
                <img src={IcStar} alt="" />
                <img src={IcStar} alt="" />
              </div>
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
            <div className="col-1 my-5 py-5">
              <a href={"/"}>
                <img src={IcRight} alt="" />
              </a>
            </div>
          </div>
        </section>
        <footer className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-4 mt-5">
              <div className="row justify-content-start">
                <div className="col-12 row">
                  <img src={IcPhone} alt="Phone +81-3-3770-0878" />
                  <h4 className="ml-3 my-2">+81-3-3770-0878</h4>{" "}
                </div>
                <div className="col-12 row">
                  <img src={IcMap} alt="Map" />
                  <p className="ml-3 my-2 font-weight-light">
                    23-7 Maruyama-cho, Shibuya-ku, Tokyo
                  </p>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <img src={ToTop} alt="" />

              <nav className="navbar navbar-expand navbar-light bg-white mt-4 justify-content-center">
                <ul className="navbar-nav justify-content-center h4">
                  <li className="nav-item active">
                    <a className="nav-link" href={"/"}>
                      Menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"/"}>
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"/"}>
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"/"}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <p className="font-weight-light">
                Copyright @ 2020 by Kaikaya By The Sea. All Rights Reserved
              </p>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="col-12 row justify-content-end">
                <a href={"/"}>
                  <img src={IcFacebook} alt="Facebook" className="mr-3" />
                </a>
                <a href={"/"}>
                  <img src={IcTwitter} alt="Twitter" className="mr-3" />
                </a>
                <a href={"/"}>
                  <img src={IcInstagram} alt="Instagram" className="mr-3" />
                </a>
                <a href={"/"}>
                  <img src={IcTripadvisor} alt="Tripadvisor" className="mr-3" />
                </a>
              </div>
              <div className="col-12 row justify-content-end">
                <p className="mr-3 my-2 font-weight-light">Privacy Policy</p>
                <p className="mr-3 my-2 font-weight-light">Cookies</p>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
