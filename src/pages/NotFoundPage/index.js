import React, { Component } from "react";
import Fade from "react-reveal";

import Nav from "../../components/Nav";
import Button from "../../components/Button";

export default class index extends Component {
  render() {
    return (
      <div>
        <header className="container-fluid v-max">
          <Fade bottom>
            <Nav pathname={this.props.location.pathname} isSingle />
          </Fade>
          <section className="container h-100 middle">
            <div className="row">
              <div className="col-12">
                <img src="" alt="" />
              </div>
              <div className="col-12">
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
