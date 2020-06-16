import React, { Component } from "react";
import Fade from "react-reveal";

import Nav from "../../components/Nav";
import Button from "../../components/Button";

import Bg from "../../assets/images/about-bg.svg";
import IllForm from "../../assets/images/illustration-form.svg";
import IcPeoples from "../../assets/images/ic-peoples.svg";
import IcAddress from "../../assets/images/ic-address.svg";
import IcDate from "../../assets/images/ic-date.svg";
import IcInfo from "../../assets/images/ic-info.svg";
import IcMail from "../../assets/images/ic-mail.svg";
import IcNumber from "../../assets/images/ic-number.svg";
import IcPerson from "../../assets/images/ic-person.svg";
import IcTag from "../../assets/images/ic-tag.svg";
import IcTime from "../../assets/images/ic-time.svg";

import data from "../../json/DataBooking.json";

export default class index extends Component {
  getMinDate = () => {
    // next day
    return new Date(Date.now() + 86400000).toISOString().split("T")[0];
  };
  getMaxDate = () => {
    // next year
    return new Date(Date.now() + 31536000000).toISOString().split("T")[0];
  };

  render() {
    return (
      <div>
        <header
          className="book-now container-fluid"
          style={{
            background: `url(${Bg}) no-repeat center`,
            backgroundSize: "100% auto",
            height: "100vh",
          }}
        >
          <Fade bottom>
            <Nav pathname={this.props.location.pathname} isSingle />
          </Fade>
          <section className="container middle">
            <div className="row">
              <Fade bottom delay={200}>
                <div className="col-md-6 middle mt-5">
                  <img
                    src={IllForm}
                    alt=""
                    width="100%"
                    style={{ maxWidth: "477px" }}
                    className="d-none d-md-block"
                  />
                  <img
                    src={IllForm}
                    alt=""
                    width="100%"
                    style={{ maxWidth: "100px" }}
                    className="d-block d-md-none"
                  />
                </div>
                <div className="col-md-6 middle mt-5">
                  <form action="">
                    <p className="text-primary">
                      Please input your information
                    </p>
                    <div className="form-group">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text bg-primary">
                            <img src={IcPeoples} alt="" />
                          </div>
                        </div>
                        <select
                          className="custom-select"
                          defaultValue={"default"}
                        >
                          <option value="default" disabled>
                            Select peoples
                          </option>
                          {data.peoples.map((item, index) => {
                            return (
                              <option key={`people-${index}`} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text bg-primary">
                            <img src={IcDate} alt="" />
                          </div>
                        </div>
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          placeholder="Date"
                          min={this.getMinDate()}
                          max={this.getMaxDate()}
                        />
                      </div>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text bg-primary">
                            <img src={IcTime} alt="" />
                          </div>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="time"
                          placeholder="Select Time"
                          required
                          disabled
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </Fade>
              <div className="col-12 text-center">
                <h4>Select Time :</h4>
                {data.timeAvailable.map((item, index) => {
                  return (
                    <Button
                      className="btn btn-outline-primary ml-2"
                      key={`time-${index}`}
                    >
                      {item}
                    </Button>
                  );
                })}
              </div>
              <div className="col-12 middle my-5">
                <Fade bottom delay={400}>
                  <Button
                    href="/"
                    type="link"
                    className="btn btn-outline-secondary mr-3"
                  >
                    Cancel
                  </Button>
                </Fade>
                <Fade bottom delay={600}>
                  <Button
                    href="/"
                    type="link"
                    className="btn btn-primary"
                    isDisabled
                  >
                    Continue
                  </Button>
                </Fade>
              </div>
            </div>
          </section>
        </header>
      </div>
    );
  }
}
