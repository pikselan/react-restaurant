import React, { Component } from "react";
import Fade from "react-reveal";

import Nav from "../../components/Nav";
import BookForm from "./BookForm";
import BookConfirmation from "./BookConfirmation";
import BookComplete from "./BookComplete";

import Bg from "../../assets/images/about-bg.svg";

import data from "../../json/DataBooking.json";

export default class index extends Component {
  state = {
    progress: "form",
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

  toForm = () => {
    this.setState({ progress: "form", isSelecTime: false, isFillDetail: true });
  };

  toConfirmation = () => {
    this.setState({ progress: "confirmation" });
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
            {this.state.progress === "form" ? (
              <BookForm
                {...this.state}
                data={data}
                onSelectTime={this.onSelectTime}
                onFillDetail={this.onFillDetail}
                handleChange={this.handleChange}
                toConfirmation={this.toConfirmation}
              />
            ) : (
              ""
            )}

            {this.state.progress === "confirmation" ? (
              <BookConfirmation
                {...this.state}
                toComplete={this.toComplete}
                toForm={this.toForm}
              />
            ) : (
              ""
            )}

            {this.state.progress === "complete" ? (
              <BookComplete email={this.state.email} />
            ) : (
              ""
            )}
          </section>
        </header>
      </div>
    );
  }
}
