import React from "react";
import "./assets/scss/styles.scss";
import Logo from "./assets/images/logo.png";
import HeroImage from "./assets/images/hero-image.jpg";
import HeroBg from "./assets/images/hero-bg.jpg";
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
            className="hero-text col-md-6 pt-5"
            style={{
              background: `url(${HeroBg}) no-repeat`,
              backgroundSize: "100% auto",
            }}
          >
            <h1 className="display-3 mt-5 text-primary">
              “Treasure Every Encounter, For It Will Never Recur.”
            </h1>
            <h2 className="h4 mt-4 text-gray">
              You are “by the ocean” wherever you are, For Japan is surrounded
              by the ocean. Fish caught in the morning is on the table in the
              evening.
            </h2>
            <button className="btn btn-primary mt-5 mr-4 d-md-none">
              Book a Table
            </button>
            <button className="btn btn-info mt-5">Our Menu</button>
          </div>
          <div className="hero-image col-md-6">
            <img
              className="v-100"
              style={{ maxHeight: "806px" }}
              src={HeroImage}
              alt=""
            />
          </div>
        </section>
      </header>
      <section className="content-base container-fluid bg-base">
        <section className="container v-max">menu</section>
        <section className="container v-max">list item</section>
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
