import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink} from "react-router-dom";
import './header.css'
import logo from '../assets/logo.PNG'
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {

  // useEffect(() => {
  //   const navLinks = document.querySelectorAll('.nav-item');
  //   const menuToggle = document.getElementById('navbarSupportedContent');
  //   const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

  //   navLinks.forEach((l) => {
  //     l.addEventListener('click', () => { bsCollapse.toggle(); });
  //   });
  //   return () => {
  //     navLinks.forEach((l) => {
  //       l.removeEventListener('click', () => { bsCollapse.toggle(); });
  //     });
  //   };
  // }, []); 
    return (
      <div className="div-2">

<nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="">
      <img className="img" src={logo} alt="logo"/>
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="mainNav collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <NavLink to="/" exact id='home' className='change nav-link active' aria-current="page" activeClassName='active'  > Home </NavLink>
        </li>
        <li className="nav-item">
         <NavLink to="/about"  id='aboutUs' exact className='change nav-link active' aria-current="page"  activeClassName="active"> About Us </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/services" exact id='services' className='change nav-link active' aria-current="page" activeClassName="active">Services</NavLink> 
        </li>
        <li className="nav-item">
         <NavLink to="/blog" exact  id='blog ' className='change nav-link active' aria-current="page" activeClassName="active"> Blog </NavLink>
        </li>
        <li className="nav-item">
         <NavLink to="/contact" exact  id='contactUs ' className='change nav-link active' aria-current="page" activeClassName="active">Contact Us</NavLink>
        </li>
      </ul>
    </div>
</nav>
      
      
    </div>
    );
}

export default Header;


