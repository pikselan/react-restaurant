import React from "react";
import Fade from "react-reveal";
import IcMap from "../assets/images/ic-map.svg";
import ToTop from "../assets/images/to-top.svg";
import IcPhone from "../assets/images/ic-phone.svg";
import Social from "./Social";
import Button from "./Button";
import NavItem from "./NavItem";

export default function Footer() {
  return (
    <footer className="footer container-fluid middle">
      <div className="row w-100">
        <Fade bottom>
          <div className="col-12 text-center mb-2">
            <img src={ToTop} alt="" />
          </div>
        </Fade>
        <Fade left>
          <div className="col-md-4">
            <div className="justify-content-start">
              <div className="col-12 row">
                <Button
                  href={`tel:+81337700878`}
                  type="link"
                  className="text-decoration-none row pl-3"
                  isExternal
                >
                  <img
                    src={IcPhone}
                    alt="Phone"
                    className="d-none d-lg-block"
                  />
                  <h6 className="ml-3 my-2 d-block d-lg-none text-secondary">
                    Call{" "}
                  </h6>
                  <h6 className="ml-3 my-2">+81-3-3770-0878</h6>
                </Button>
              </div>
              <div className="col-12 row">
                <img src={IcMap} alt="Map" className="d-none d-lg-block" />
                <span className="ml-3 my-2 font-weight-light">
                  23-7 Maruyama-cho, Shibuya-ku, Tokyo
                </span>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="col-md-4 text-center">
            <nav className="navbar navbar-expand-md navbar-light bg-white d-none d-lg-block">
              <NavItem
                className="collapse navbar-collapse justify-content-center h4"
                id="navbar"
              />
            </nav>

            <span className="font-weight-light">
              Copyright @ 2020 Kaikaya By The Sea
            </span>
          </div>
        </Fade>
        <Fade right>
          <div className="col-md-4">
            <div className="d-none d-md-block">
              <Social className="col-12 row justify-content-end" />
            </div>
            <div className="col-12 row justify-content-end">
              <p className="mr-3 my-2 font-weight-light">Privacy Policy</p>
              <p className="my-2 font-weight-light">Cookies</p>
            </div>
          </div>
        </Fade>
      </div>
    </footer>
  );
}
