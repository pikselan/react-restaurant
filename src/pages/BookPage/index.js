import React, { Component } from "react";
import Fade from "react-reveal";

import { connect } from "react-redux";
import { fetchPage } from "../../store/actions/page";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

import BookBg from "../../assets/images/list-bg.svg";

class index extends Component {
  state = {
    data: null,
    lang: "Japanese",
    desclaimer: null,
    options: null,
    warning: null,
    infoStore: null,
    note: null,
    onDesclaimer: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.props.page.book) this.props.fetchPage(`/book`, "book");
  }

  changeLanguage = () => {
    return this.state.lang !== "Japanese"
      ? this.setState({
          lang: "Japanese",
          desclaimer: this.props.page.book.content.japanese.desclaimer,
          options: this.props.page.book.content.japanese.options,
          warning: this.props.page.book.content.japanese.warning,
          infoStore: this.props.page.book.content.japanese.infoStore,
          note: this.props.page.book.content.japanese.note,
        })
      : this.setState({
          lang: "English",
          desclaimer: this.props.page.book.content.english.desclaimer,
          options: this.props.page.book.content.english.options,
          warning: this.props.page.book.content.english.warning,
          infoStore: this.props.page.book.content.english.infoStore,
          note: this.props.page.book.content.english.note,
        });
  };
  getDesclaimer = () => {
    return this.setState((prevState) => ({
      onDesclaimer: !prevState.onDesclaimer,
    }));
  };

  render() {
    const {
      lang,
      desclaimer,
      options,
      warning,
      infoStore,
      note,
      onDesclaimer,
    } = this.state;

    const { page } = this.props;
    if (!page.hasOwnProperty("book")) return null;
    const data = page.book.content;
    const url = process.env.REACT_APP_HOST;
    const title = page.book.title;
    document.title = `Kaikaya by The Sea - ${title}`;
    return (
      <div onLoad={this.changeLanguage}>
        <header className="container-fluid v-max">
          <Fade bottom>
            <Nav pathname={this.props.location.pathname} />
          </Fade>
          <div
            className="container text-center h-100"
            style={{
              background: `url(${BookBg}) no-repeat center`,
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
        <section className="content-book container-fluid">
          <div className="container">
            <div className="row mb-5">
              <Fade bottom>
                <div className="col-md-6 mb-3">
                  <img
                    src={`${url}/${data.imageFood}`}
                    alt=""
                    width="100%"
                    style={{ maxWidth: "540px" }}
                  />
                </div>
                <div className="col-md-6 middle">
                  <div>
                    <Button
                      className="btn btn-outline-primary mb-4"
                      onClick={this.changeLanguage}
                    >
                      {lang}
                    </Button>
                    <p>{desclaimer}</p>
                    <p className="text-primary">{warning}</p>
                    <Button
                      type="link"
                      className="btn btn-outline-secondary"
                      onClick={this.getDesclaimer}
                      href="#desclaimer"
                      isExternal
                    >
                      はい / Yes
                    </Button>
                    <Button
                      className="btn btn-info ml-3"
                      type="link"
                      href="/booknow"
                    >
                      いいえ / No
                    </Button>
                    <p className="small">{options}</p>
                  </div>
                </div>
                <div className="container d-flex justify-content-center my-3">
                  <div
                    id="desclaimer"
                    className={`col-sm-7 bg-base border rounded p-3 ${
                      onDesclaimer ? "" : "d-none"
                    }`}
                  >
                    <div className="small text-format text-center">
                      <h5 className="text-primary font-weight-bold">
                        {data.desclaimer.title}
                      </h5>
                      <ol className="text-left">
                        {data.desclaimer.item.map((item, index) => {
                          return <li key={`item-${index}`}>{item.text}</li>;
                        })}
                      </ol>
                      <p className="text-info">{data.desclaimer.confirm}</p>

                      <Button
                        className="btn btn-primary mb-3"
                        type="link"
                        href="/booknow"
                      >
                        進む / Proceed
                      </Button>
                      <Button
                        className="btn btn-outline-secondary ml-3 mb-3"
                        onClick={this.getDesclaimer}
                      >
                        進まない / Don’t proceed.
                      </Button>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="row mb-5">
              <Fade bottom>
                <div className="col-md-6 order-md-2 text-center mb-3">
                  <img
                    src={`${url}/${data.imageMap}`}
                    alt=""
                    width="100%"
                    style={{ maxWidth: "347px" }}
                  />
                </div>
                <div className="col-md-6 order-md-1 middle" id="contact">
                  <h5 className="text-format text-center">{infoStore}</h5>
                </div>
              </Fade>
            </div>
            <div className="col-12 mb-5">
              <Fade bottom>
                <p className="text-format">{note}</p>
              </Fade>
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
