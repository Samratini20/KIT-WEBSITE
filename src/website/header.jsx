import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";
import logo from '../assets/logo.png';
function Header() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleSelect = () => {
    // Set the state to collapse the navbar when an item is selected
    setExpanded(false);
  };

  return (
    <div className="div-2">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="d-flex">
          <a className="navbar-brand" href="/">
            <img className="w-25" src={logo} alt="logo" style={{scale:'1.5'}} />
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
          className={`fs-5 justify-content-end mainNav collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                id="home"
                className="change nav-link mx-4"
                onClick={handleSelect}
                style={{ color: location.pathname === "/" ? "#14B1FF" : "inherit" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                id="aboutUs"
                exact
                className="change nav-link mx-4"
                onClick={handleSelect}
                style={{ color: location.pathname === "/about" ? "#14B1FF" : "inherit" }}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                exact
                id="services"
                className="change nav-link mx-4"
                onClick={handleSelect}
                style={{ color: location.pathname === "/services" ? "#14B1FF" : "inherit" }}
              >
                Services
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/blog"
                exact
                id="blog"
                className="change nav-link mx-4"
                onClick={handleSelect}
                style={{ color: location.pathname === "/blog" ? "#14B1FF" : "inherit" }}
              >
                Blog
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                to="/careers"
                exact
                id="careers"
                className="change nav-link careers-link mx-4"
                onClick={handleSelect}
                style={{ color: location.pathname === "/careers" ? "#14B1FF" : "inherit" }}
              >
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                exact
                id="contactUs"
                className="change nav-link contactus-link mx-4"
                onClick={handleSelect}
                style={{ color: location.pathname === "/contact" ? "#14B1FF" : "inherit" }}
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
