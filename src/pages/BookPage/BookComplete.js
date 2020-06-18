import React from "react";
import Fade from "react-reveal";

import Button from "../../components/Button";

import IllSuccess from "../../assets/images/illustration-success.svg";

export default function BookComplete(props) {
  return (
    <div className="row w-100">
      <Fade bottom delay={200}>
        <div className="col-12 middle mt-5">
          <img
            src={IllSuccess}
            alt=""
            width="100%"
            style={{ maxWidth: "370px" }}
          />
        </div>
        <div className="col-12 middle mt-5 text-center">
          <Fade bottom delay={400}>
            <p className="h4">
              {`Thanks for reservation, we send your information to
              "${props.email}". We will call you to information before the day.`}
            </p>
          </Fade>
        </div>
        <div className="col-12 middle my-5">
          <Fade bottom delay={600}>
            <Button className={`btn btn-primary`} type="link" href="/">
              Back to Home
            </Button>
          </Fade>
        </div>
      </Fade>
    </div>
  );
}
