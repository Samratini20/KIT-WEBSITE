import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../assets/logo.PNG";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    // Set the state to collapse the navbar when an item is selected
    setExpanded(false);
  };

  return (
    <div className="div-2">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img className="img" src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className={`mainNav collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                id="home"
                className="change nav-link active"
                aria-current="page"
                activeClassName="active"
                onClick={handleSelect}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                id="aboutUs"
                exact
                className="change nav-link active"
                aria-current="page"
                activeClassName="active"
                onClick={handleSelect}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                exact
                id="services"
                className="change nav-link active"
                aria-current="page"
                activeClassName="active"
                onClick={handleSelect}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                exact
                id="blog"
                className="change nav-link active"
                aria-current="page"
                activeClassName="active"
                onClick={handleSelect}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                exact
                id="contactUs"
                className="change nav-link active"
                aria-current="page"
                activeClassName="active"
                onClick={handleSelect}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
