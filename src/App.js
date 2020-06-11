import React from "react";
import "./assets/scss/styles.scss";
import Logo from "./assets/images/logo.png";
import PlateUnder from "./assets/images/plate-under.png";
import Plate1 from "./assets/images/plate-1.png";
import Plate2 from "./assets/images/plate-2.png";
import HeroBg from "./assets/images/hero-bg.svg";
import MenuBg from "./assets/images/menu-bg.svg";
import ListBg from "./assets/images/list-bg.svg";
import IcFacebook from "./assets/images/ic-facebook.svg";
import IcInstagram from "./assets/images/ic-instagram.svg";
import IcTwitter from "./assets/images/ic-twitter.svg";
import IcTripadvisor from "./assets/images/ic-tripadvisor.svg";
import IcPhone from "./assets/images/ic-phone.svg";
import MenuFirst from "./assets/images/menu-first.png";
import Food1 from "./assets/images/food-1.png";
import Food2 from "./assets/images/food-2.png";
import Food3 from "./assets/images/food-3.png";
import Food4 from "./assets/images/food-4.png";
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
            className="hero-text col-md-6 mt-5 pt-5 px-5 h-100"
            style={{
              background: `url(${HeroBg}) no-repeat`,
              backgroundSize: "100% auto",
            }}
          >
            <h1 className="display-3 mt-5 pt-5 text-primary font-weight-bold">
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
            <div className="row mt-5 pt-5">
              <div className="col-7 row mt-5 pt-5">
                <img src={IcFacebook} alt="Facebook" className="ml-3" />
                <img src={IcTwitter} alt="Twitter" className="ml-3" />
                <img src={IcInstagram} alt="Instagram" className="ml-3" />
                <img src={IcTripadvisor} alt="Tripadvisor" className="ml-3" />
              </div>
              <div className="col-5 row mt-5 pt-5">
                <img src={IcPhone} alt="Phone +81-3-3770-0878" />
                <h4 className="ml-3 my-2">+81-3-3770-0878</h4>
              </div>
            </div>
          </div>
          <div className="hero-image col-md-6 h-100">
            <div className="plate-under mx-auto">
              <img
                style={{ maxHeight: "806px" }}
                src={PlateUnder}
                alt="Front Store"
              />
            </div>

            <img
              className="plate-2 position-absolute"
              style={{ maxHeight: "386px" }}
              src={Plate2}
              alt="Food 2"
            />
            <img
              className="plate-1 position-absolute"
              style={{ maxHeight: "350px" }}
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
            <div className="col-md-3 mt-5 pt-1">
              <div className="card text-center">
                <img className="card-img-top" src={Food1} alt="" />
                <h4 className="card-title">Sengyo no Karuppacho</h4>
                <div className="card-body">
                  <p className="card-text">Fresh fish carpaccio</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-5 pt-1">
              <div className="card text-center">
                <img className="card-img-top" src={Food2} alt="" />
                <h4 className="card-title">Shimorhuri Gyu no Sushi</h4>
                <div className="card-body">
                  <p className="card-text">Premium Japanese beef sushi</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-5 pt-1">
              <div className="card text-center">
                <img className="card-img-top" src={Food3} alt="" />
                <h4 className="card-title">Ebi no Ebi niyoru Ebi Sousu</h4>
                <div className="card-body">
                  <p className="card-text">Prawn with prawn sauce</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-5 pt-1">
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
              <button className="btn btn-info mt-5 px-3">Other Food</button>
            </div>
          </div>
        </section>
      </section>
      <section className="container-fluid v-max">about</section>
      <section className="container-fluid v-max">
        <section className="container">review</section>
        <footer className="container-fluid">footer</footer>
      </section>
    </div>
  );
}

export default App;
