import React from "react";
import propTypes from "prop-types";
import Button from "./Button";

import IcFacebook from "../assets/images/ic-facebook.svg";
import IcInstagram from "../assets/images/ic-instagram.svg";
import IcTwitter from "../assets/images/ic-twitter.svg";
import IcTripadvisor from "../assets/images/ic-tripadvisor.svg";
import IcTripadvisorMini from "../assets/images/ic-tripadvisor-mini.svg";
import IcPhone from "../assets/images/ic-phone.svg";

export default function Social(props) {
  const className = [props.className];
  return (
    <div className={className}>
      <Button href={`/`} type="link">
        <img src={IcFacebook} alt="Facebook" />
      </Button>
      <Button href={`/`} type="link">
        <img src={IcTwitter} alt="Twitter" className="ml-3" />
      </Button>
      <Button href={`/`} type="link">
        <img src={IcInstagram} alt="Instagram" className="ml-3" />
      </Button>
      <Button href={`/`} type="link">
        <img
          src={IcTripadvisor}
          alt="Tripadvisor"
          className="ml-3 d-none d-xl-block"
        />
        {props.withMiniTripadvisor ? (
          <img
            src={IcTripadvisorMini}
            alt="Tripadvisor"
            className="ml-3 d-block d-xl-none"
          />
        ) : (
          ""
        )}
      </Button>
      {props.withPhone ? (
        <Button
          type="link"
          href={`tel:+81337700878`}
          className="row border-left text-decoration-none ml-3 pl-3"
          isExternal
        >
          <img src={IcPhone} alt="Phone" />
          <h5 className="ml-3 my-2 d-none d-lg-block">+81-3-3770-0878</h5>
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}

Social.propTypes = {
  className: propTypes.string,
  withMiniTripadvisor: propTypes.bool,
  withPhone: propTypes.bool,
};
