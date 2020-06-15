import React, { Component } from "react";
import Fade from "react-reveal";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import MenuBg from "../../assets/images/about-bg.svg";

import data from "../../json/MenuPage.json";

export default class index extends Component {
  render() {
    return (
      <div>
        <header
          className="container-fluid v-max"
          style={{
            background: `url(${MenuBg}) no-repeat center`,
            backgroundSize: "100% auto",
          }}
        >
          <Fade bottom>
            <Nav pathname={this.props.location.pathname} />
          </Fade>
          <div className="container text-center">
            <Fade bottom delay={300}>
              <h1 className="h2 text-primary font-weight-bold d-sm-block d-lg-none">
                {data.title}
              </h1>
              <h1 className="display-3 text-primary font-weight-bold d-none d-lg-block">
                {data.title}
              </h1>
            </Fade>
          </div>
        </header>
        <section className="content-menu container-fluid bg-base">
          <div className="container">
            <div className="col-12">
              <div className="row">
                <div className="col-4 col-md-2 middle">
                  <Fade bottom delay={500}>
                    <img
                      src={data.mainFood.image}
                      alt=""
                      style={{ width: "100%" }}
                      className="rounded"
                    />
                  </Fade>
                </div>
                <div className="col-8 col-md-10 middle justify-content-start">
                  <Fade bottom delay={700}>
                    <h1 className="h3 text-primary font-weight-bold d-sm-block d-lg-none">
                      {data.mainFood.title}
                    </h1>
                    <h1 className="display-4 text-primary font-weight-bold d-none d-lg-block">
                      {data.mainFood.title}
                    </h1>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4">
              <div className="row text-center">
                <Fade bottom>
                  {data.mainFood.item.map((item, index) => {
                    return (
                      <div
                        className="col-6 col-md-3 mt-3"
                        key={`mainfood-${index}`}
                      >
                        <div className="card d-sm-block d-lg-none">
                          <img
                            className="mx-auto"
                            src={item.image}
                            alt=""
                            style={{ width: "100%" }}
                          />
                          <h4 className="h5 card-title small d-sm-block d-lg-none">
                            {item.name}
                          </h4>
                          <div className="card-body">
                            <h6 className="card-text small">
                              {item.description}
                            </h6>
                          </div>
                        </div>
                        <div className="card d-none d-lg-block">
                          <img
                            className="card-img-top mx-auto"
                            src={item.image}
                            alt=""
                          />
                          <h4 className="card-title">{item.name}</h4>
                          <div className="card-body">
                            <h6 className="card-text">{item.description}</h6>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Fade>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row mb-5">
            {data.optionFood.map((option, index) => {
              return (
                <div className="col-12 col-md-6 mt-5" key={`food-${index}`}>
                  <div className="row">
                    <div className="col-4 col-md-4 middle">
                      <Fade bottom delay={500}>
                        <img
                          src={option.image}
                          alt=""
                          style={{
                            width: "auto",
                            height: "100%",
                          }}
                          className="rounded"
                        />
                      </Fade>
                    </div>
                    <div className="col-8 col-md-8 middle justify-content-start">
                      <Fade bottom delay={700}>
                        <h1 className="h3 text-primary font-weight-bold d-sm-block d-lg-none">
                          {option.title}
                        </h1>
                        <h1 className="display-4 text-primary font-weight-bold d-none d-lg-block">
                          {option.title}
                        </h1>
                      </Fade>
                    </div>
                  </div>
                  <div className="col-12 my-3">
                    <ul className="list-group">
                      {option.item.map((item, index) => {
                        return (
                          <li className="list-group-item" key={`item-${index}`}>
                            {item.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="text-format container my-5 py-3">
          <Fade bottom>
            <p>{data.note}</p>
          </Fade>
        </section>
        <section className="container-fluid">
          <Footer pathname={this.props.location.pathname} />
        </section>
      </div>
    );
  }
}
