import React from "react";
import Fade from "react-reveal";

import Button from "../../components/Button";

import IllSuccess from "../../assets/images/illustration-success.svg";

export default function BookComplete(props) {
  return (
    <div className="row w-100">
      <Fade bottom delay={200}>
        <div className="col-md-12 middle mt-5">
          <img
            src={IllSuccess}
            alt=""
            width="100%"
            style={{ maxWidth: "370px" }}
            className="d-none d-md-block"
          />
        </div>
      </Fade>
    </div>
  );
}
