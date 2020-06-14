import React from "react";
import Button from "./Button";

export default function NavItem(props) {
  return (
    <div className={props.className} id={props.id}>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Button href={`/menu`} type="link" className="nav-link">
            Menu
          </Button>
        </li>
        <li className="nav-item">
          <Button href={`/gallery`} type="link" className="nav-link">
            Gallery
          </Button>
        </li>
        <li className="nav-item">
          <Button href={`/about`} type="link" className="nav-link">
            About
          </Button>
        </li>
        <li className="nav-item">
          <Button href={`/book`} type="link" className="nav-link">
            Contact
          </Button>
        </li>
      </ul>
    </div>
  );
}
