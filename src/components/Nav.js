import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import NavItem from "./NavItem";

export default function Nav(props) {
  if (props.isSingle) {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-white justify-content-center">
        <Button href={`/`} type="link" className="navbar-brand">
          <Logo />
        </Button>
      </nav>
    );
  }
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white">
      <Button href={`/`} type="link" className="navbar-brand">
        <Logo />
      </Button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavItem
        pathname={props.pathname}
        className="collapse navbar-collapse justify-content-center h4"
        id="navbar"
      />
      <Button
        href={`/book`}
        type="link"
        className="btn btn-primary d-none d-md-block"
      >
        Book a Table
      </Button>
    </nav>
  );
}
