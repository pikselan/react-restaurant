import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { fetchPage } from "./store/actions/page";

import Spinner from "./components/Spinner";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import BookPage from "./pages/BookPage";
import BookNow from "./pages/BookPage/BookNow";
import NotFoundPage from "./pages/NotFoundPage";

import "./styles.scss";
import "bootstrap/js/src/index";

class App extends Component {
  componentDidMount() {
    // get loading (must session user if available)
    // if (!this.props.page.time) this.props.fetchPage(`/time`, "time");
  }

  render() {
    return this.props.page.isLoading ? (
      <Spinner />
    ) : (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/book" component={BookPage} />
          <Route path="/booknow" component={BookNow} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(App);
