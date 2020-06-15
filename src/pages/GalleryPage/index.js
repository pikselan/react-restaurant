import React, { Component } from "react";
import Fade from "react-reveal";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

import GalleryBg from "../../assets/images/menu-bg.svg";

import data from "../../json/GalleryPage.json";

export default class index extends Component {
  render() {
    return (
      <div>
        <header className="container-fluid v-max">
          <Fade bottom>
            <Nav pathname={this.props.location.pathname} />
          </Fade>
          <div
            className="container text-center h-100"
            style={{
              background: `url(${GalleryBg}) no-repeat center`,
              backgroundSize: "100% auto",
            }}
          >
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
        <section className="content-gallery container-fluid bg-base">
          <div className="container">
            <div className="col-12">
              <div className="row">
                <Fade bottom>
                  {data.post.map((item, index) => {
                    return (
                      <div
                        className="card flex-row flex-wrap rounded mb-4"
                        key={`gallery-${index}`}
                      >
                        <div className="col-3 card-header border-0">
                          <img src={item.image} alt="" width="100%" />
                        </div>
                        <div className="col-9 card-block px-2 py-3">
                          <h4 className="h5 card-title text-primary font-weight-bold mb-0 d-sm-block d-lg-none">
                            {item.title}
                          </h4>
                          <h4 className="h2 card-title text-primary font-weight-bold mb-0 d-none d-lg-block">
                            {item.title}
                          </h4>
                          <h6 className="small">
                            <i>{`by ${item.createdBy}`}</i>
                          </h6>
                          <p className="card-text text-format">
                            {item.description}
                          </p>
                        </div>
                        <div className="w-100"></div>
                        <div className="card-footer w-100 text-muted small">
                          {`${item.timestamp}`}
                        </div>
                      </div>
                    );
                  })}
                  <div className="col-12 text-center mt-2">
                    <Button className="btn btn-info">Load More</Button>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid">
          <Footer pathname={this.props.location.pathname} />
        </section>
      </div>
    );
  }
}
