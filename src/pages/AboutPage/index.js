import React, { Component } from "react";
import Fade from "react-reveal";

import { connect } from "react-redux";
import { fetchPage } from "../../store/actions/page";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import AboutBg from "../../assets/images/review-bg.svg";

class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.props.page.about) this.props.fetchPage(`/about`, "about");
  }
  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("about")) return null;
    const data = page.about.content;
    const url = process.env.REACT_APP_HOST;
    const title = page.about.title;
    document.title = `Kaikaya by The Sea - ${title}`;
    return (
      <div>
        <header className="container-fluid v-max">
          <Fade bottom>
            <Nav pathname={this.props.location.pathname} />
          </Fade>
          <div
            className="container text-center h-100"
            style={{
              background: `url(${AboutBg}) no-repeat center`,
              backgroundSize: "100% auto",
            }}
          >
            <Fade bottom delay={300}>
              <h1 className="h2 text-primary font-weight-bold d-sm-block d-lg-none">
                {title}
              </h1>
              <h1 className="display-3 text-primary font-weight-bold d-none d-lg-block">
                {title}
              </h1>
            </Fade>
          </div>
        </header>
        <section className="content-about container-fluid">
          <div className="container">
            <div className="row">
              <Fade bottom>
                <div className="col-sm-4 col-md-3 middle">
                  <img
                    src={`${url}/${data.imageOutdoor}`}
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-sm-8 col-md-9 middle">
                  {data.storyJapan}
                </div>
                <div className="col-12 mt-3 mb-5">{data.storyEnglish}</div>
              </Fade>
              <div className="col-sm-12 col-md-3 mb-5">
                <div className="row">
                  <Fade bottom>
                    <div className="col-12 col-sm-4 col-md-12 middle">
                      <img
                        src={`${url}/${data.imageIndoor}`}
                        alt=""
                        width="100%"
                      />
                    </div>
                    <div className="col-12 col-sm-8 col-md-12 middle">
                      <p className="mt-2 small">{data.description}</p>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="col-1"></div>
              <div className="col-md-8 mb-5">
                <div className="row">
                  <Fade bottom>
                    <div className="col-sm-4 col-md-4 middle order-sm-2">
                      <img
                        src={`${url}/${data.imageOwner}`}
                        alt=""
                        width="100%"
                      />
                    </div>
                    <div className="col-sm-8 col-md-8 middle order-sm-1">
                      {data.historyJapan}
                    </div>
                    <div className="col-12 mt-3 order-sm-3">
                      {data.historyEnglish}
                    </div>
                  </Fade>
                </div>
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

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(index);
