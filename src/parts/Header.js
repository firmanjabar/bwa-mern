import React, { useState } from "react";
import Button from "elements/Button";
import BrandIcon from "./IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  const [toggle, setToggle] = useState(false);

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon></BrandIcon>
          <Button
            onClick={() => setToggle(!toggle)}
            className={`navbar-toggler${toggle === true ? "" : " collapsed"}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler02"
            aria-controls="navbarToggler02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>

          <div
            className={`collapse navbar-collapse${
              toggle === true ? " show" : ""
            }`}
            id="navbarToggler02"
          >
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/menu")}`}>
                <Button className="nav-link" type="link" href="/menu">
                  Menu
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
