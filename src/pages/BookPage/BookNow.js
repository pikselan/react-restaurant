import React, { Component } from "react";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

import Nav from "../../components/Nav";
import Button from "../../components/Button";

import Bg from "../../assets/images/about-bg.svg";
import IllForm from "../../assets/images/illustration-form.svg";
import IcPeoples from "../../assets/images/ic-peoples.svg";
import IcDate from "../../assets/images/ic-date.svg";
import IcInfo from "../../assets/images/ic-info.svg";
import IcMail from "../../assets/images/ic-mail.svg";
import IcNumber from "../../assets/images/ic-number.svg";
import IcPerson from "../../assets/images/ic-person.svg";
import IcPersonLast from "../../assets/images/ic-person-last.svg";
import IcTag from "../../assets/images/ic-tag.svg";
import IcTime from "../../assets/images/ic-time.svg";

import data from "../../json/DataBooking.json";

export default class index extends Component {
  state = {
    isSelecTime: false,
    isFillDetail: false,
    formCompleted: false,
    peoples: "",
    date: "",
    time: "",
    tag: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    info: "",
  };

  listState = () => {
    const {
      date,
      time,
      firstName,
      lastName,
      email,
      phone,
      info,
      tag,
      peoples,
    } = this.state;
    return [date, time, firstName, lastName, email, phone, info, tag, peoples];
  };

  getMinDate = () => {
    // next day
    return new Date(Date.now() + 86400000).toISOString().split("T")[0];
  };

  getMaxDate = () => {
    // next year
    return new Date(Date.now() + 31536000000).toISOString().split("T")[0];
  };

  onSelectTime = () => {
    return this.setState((prevState) => ({
      isSelecTime: !prevState.isSelecTime,
      isFillDetail: false,
    }));
  };

  onFillDetail = (e) => {
    return this.setState((prevState) => ({
      isFillDetail: !prevState.isFillDetail,
      isSelecTime: !prevState.isSelecTime,
      time: e,
    }));
  };

  handleChange = (e) => {
    // return
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () =>
        this.listState().includes("")
          ? this.setState({ formCompleted: false })
          : this.setState({ formCompleted: true })
    );
  };

  handleContinue = () => {};

  render() {
    const {
      isSelecTime,
      isFillDetail,
      peoples,
      date,
      time,
      tag,
      firstName,
      lastName,
      email,
      phone,
      info,
      formCompleted,
    } = this.state;
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
            <div className="row w-100">
              <Fade bottom delay={200}>
                <div className="col-md-6 middle mt-5">
                  <img
                    src={IllForm}
                    alt=""
                    width="100%"
                    style={{ maxWidth: "370px" }}
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
                  <div className="d-block">
                    <p className="text-primary">Make a reservation</p>
                    <div className="form-group">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text bg-primary">
                            <img src={IcPeoples} alt="" />
                          </div>
                        </div>
                        <select
                          className="custom-select"
                          value={peoples}
                          name="peoples"
                          onChange={this.handleChange}
                        >
                          <option value="" disabled>
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
                          value={date}
                          onChange={this.handleChange}
                          placeholder="Date"
                          min={this.getMinDate()}
                          max={this.getMaxDate()}
                        />
                      </div>
                      <div
                        className="input-group mb-2"
                        onClick={this.onSelectTime}
                      >
                        <div className="input-group-prepend">
                          <div className="input-group-text bg-primary">
                            <img src={IcTime} alt="" />
                          </div>
                        </div>
                        <input
                          type="text"
                          className="form-control bg-white"
                          name="time"
                          value={time}
                          onChange={this.handleChange}
                          placeholder="Select Time"
                          required
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <div
                className={`col-12 text-center ${isSelecTime ? "" : " d-none"}`}
              >
                <h4>Select Time :</h4>
                {data.timeAvailable.map((item, index) => {
                  return (
                    <div
                      className="btn btn-outline-primary ml-2 mb-2"
                      key={`time-${index}`}
                      onClick={(e) => this.onFillDetail(item)}
                      value={item}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
              <div className={`col-12 ${isFillDetail ? "" : " d-none"}`}>
                <div className="d-block">
                  <h4 className="text-center">Personal detail :</h4>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-4 middle">
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-primary">
                              <img src={IcTag} alt="" />
                            </div>
                          </div>
                          <select
                            className="custom-select"
                            value={tag}
                            name="tag"
                            onChange={this.handleChange}
                          >
                            <option value="" disabled>
                              Select tag
                            </option>
                            <option value="Mr">Mr.</option>
                            <option value="Mrs">Mrs.</option>
                            <option value="Ms">Ms.</option>
                            <option value="Dr">Dr.</option>
                            <option value="Mdm">Mdm.</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 middle">
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-primary">
                              <img src={IcPerson} alt="" />
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleChange}
                            placeholder="Fist Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 middle">
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-primary">
                              <img src={IcPersonLast} alt="" />
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChange}
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 middle">
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-primary">
                              <img src={IcMail} alt="" />
                            </div>
                          </div>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 middle">
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-primary">
                              <img src={IcNumber} alt="" />
                            </div>
                          </div>
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={phone}
                            onChange={this.handleChange}
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="col-12 middle">
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-primary">
                              <img src={IcInfo} alt="" />
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            name="info"
                            value={info}
                            onChange={this.handleChange}
                            placeholder="Info or Request"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 middle my-5">
                <Link to="/book" className="text-muted small">
                  (Info)
                </Link>
                <Fade bottom delay={400}>
                  <Button
                    href="/"
                    type="link"
                    className="btn btn-outline-secondary mx-3"
                  >
                    Cancel
                  </Button>
                </Fade>
                <Fade bottom delay={600}>
                  <Button
                    href="/"
                    type="link"
                    className={`btn btn-primary ${
                      formCompleted ? " " : " disabled"
                    }`}
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
