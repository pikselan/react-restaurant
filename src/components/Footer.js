import React from "react";
import Fade from "react-reveal";
import IcMap from "../assets/images/ic-map.svg";
import ToTop from "../assets/images/to-top.svg";
import IcPhone from "../assets/images/ic-phone.svg";
import Social from "./Social";
import Button from "./Button";
import NavItem from "./NavItem";

export default function Footer(props) {
  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <footer className="footer container-fluid middle">
      <div className="row w-100">
        <Fade bottom>
          <div className="col-12 text-center mb-2">
            <Button type="link" className="btn" onClick={toTop()} href="#">
              <img src={ToTop} alt="" />
            </Button>
          </div>
        </Fade>
        <Fade left>
          <div className="col-md-4" id="contact">
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
                <span className="ml-3 my-2">
                  <small>23-7 Maruyama-cho, Shibuya-ku, Tokyo</small>
                </span>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="col-md-4 text-center">
            <nav className="navbar navbar-expand-md navbar-light bg-white d-none d-lg-block">
              <NavItem
                pathname={props.pathname}
                className="collapse navbar-collapse justify-content-center h4"
                id="navbar"
              />
            </nav>

            <span className="font-weight-light">
              <small>Copyright @ 2020 Kaikaya By The Sea</small>
            </span>
          </div>
        </Fade>
        <Fade right>
          <div className="col-md-4">
            <div className="d-none d-md-block">
              <Social className="col-12 row justify-content-end" />
            </div>
            <div className="col-12 row justify-content-end">
              <p className="mr-3 my-2 font-weight-light">
                <small>Privacy Policy</small>
              </p>
              <p className="my-2 font-weight-light">
                <small>Cookies</small>
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </footer>
  );
}
