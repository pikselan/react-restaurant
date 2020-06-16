import React, { Component } from "react";
import Fade from "react-reveal";

import Nav from "../../components/Nav";
import Button from "../../components/Button";

import NotFound from "../../assets/images/not-found.svg";
import Bg from "../../assets/images/about-bg.svg";

export default class index extends Component {
  render() {
    return (
      <div>
        <header
          className="container-fluid v-max"
          style={{
            background: `url(${Bg}) no-repeat center`,
            backgroundSize: "100% auto",
          }}
        >
          <Fade bottom>
            <Nav pathname={this.props.location.pathname} isSingle />
          </Fade>
          <section className="container middle">
            <div className="row">
              <div className="col-12 middle mt-5">
                <img
                  src={NotFound}
                  alt=""
                  width="100%"
                  style={{ maxWidth: "477px" }}
                />
              </div>
              <div className="col-12 middle mt-4">
                <h1 className="h3 text-primary font-weight-bold d-sm-block d-lg-none">
                  {`Oops... Are you lost?`}
                </h1>
                <h1 className="text-primary font-weight-bold d-none d-lg-block">
                  {`Oops... Are you lost?`}
                </h1>
              </div>
              <div className="col-12 middle mt-2">
                <Button href="/" type="link" className="btn btn-primary">
                  Back to Home
                </Button>
              </div>
            </div>
          </section>
        </header>
      </div>
    );
  }
}
