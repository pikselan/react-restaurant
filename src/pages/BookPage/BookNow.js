import React, { Component } from "react";
import Fade from "react-reveal";
import axios from "axios";

import Nav from "../../components/Nav";
import BookForm from "./BookForm";
import BookConfirmation from "./BookConfirmation";
import BookComplete from "./BookComplete";

import Bg from "../../assets/images/about-bg.svg";

// import data from "../../json/DataBooking.json";

export default class index extends Component {
  state = {
    title: "開花屋, Booking!",
    peopleList: null,
    timeList: null,
    progress: "form",
    isSelecTime: false,
    isFillDetail: false,
    formCompleted: false,
    peoples: "",
    date: "",
    time: "",
    timeId: "",
    tag: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    info: "",
  };

  componentDidMount() {
    document.title = `Kaikaya by The Sea - ${this.state.title}`;
    window.scrollTo(0, 0);
    this.getData("time", "timeList");
    this.getData("people", "peopleList");
  }

  getData = (collection, array) => {
    try {
      axios
        .get(`${process.env.REACT_APP_HOST}/api/v1/public/${collection}`)
        .then((res) => {
          this.setState({ [array]: res.data });
        });
    } catch (err) {
      console.log(err);
    }
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

  onFillDetail = (e, id) => {
    return this.setState((prevState) => ({
      isFillDetail: !prevState.isFillDetail,
      isSelecTime: !prevState.isSelecTime,
      time: e,
      timeId: id,
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
    const {
      date,
      peoples,
      timeId,
      tag,
      firstName,
      lastName,
      email,
      phone,
      info,
    } = this.state;
    try {
      axios
        .post(`${process.env.REACT_APP_HOST}/api/v1/public/book`, {
          date,
          peopleId: peoples,
          timeId: timeId,
          tag,
          firstName,
          lastName,
          email,
          phone,
          info,
        })
        .then((result) => {
          this.setState({ progress: "confirmation" });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  toComplete = () => {
    this.setState({ progress: "complete" });
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
