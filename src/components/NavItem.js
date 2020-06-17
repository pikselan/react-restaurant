import React from "react";
import Button from "./Button";

export default function NavItem(props) {
  const getNavActive = (path) => {
    return props.pathname === path ? "active" : "";
  };
  return (
    <div className={props.className} id={props.id}>
      <ul className="navbar-nav">
        <li className={`nav-item ${getNavActive("/menu")}`}>
          <Button href={`/menu`} type="link" className="nav-link">
            Menu
          </Button>
        </li>
        <li className={`nav-item ${getNavActive("/gallery")}`}>
          <Button href={`/gallery`} type="link" className="nav-link">
            Gallery
          </Button>
        </li>
        <li className={`nav-item ${getNavActive("/about")}`}>
          <Button href={`/about`} type="link" className="nav-link">
            About
          </Button>
        </li>
        <li className={`nav-item`}>
          <Button type="link" className="nav-link" href="#contact" isExternal>
            Contact
          </Button>
        </li>
      </ul>
    </div>
  );
}
