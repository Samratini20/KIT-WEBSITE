import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './header.css'
import logo from '../assets/logo.PNG'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from "./homePage";
import { Nav } from "react-bootstrap";


function Header() {
  
    return (
      <div className="div-2">
        {/* <NavLink to="/" exact className='home' activeClassName="active">
        <img
            loading="lazy"
            src={logo}
            className="img" 
          />
        </NavLink>
        
       <div className="div-3">
        <div className="div-4">          
          <NavLink to="/" exact id='home ' className='change' activeClassName='active'>Home</NavLink>
          </div>
        <div className="div-5">
          <NavLink to="/about" exact id='aboutUs ' className='change' activeClassName="active">About Us</NavLink>
          </div>
        <div className="div-6">
          <NavLink to="/services" exact id='services ' className='change' activeClassName="active" >Services</NavLink>
        </div>
        <div className="div-7">
          <NavLink to="/blog" exact  id='blog ' className='change' activeClassName="active">Blog</NavLink>
        </div>
        <div className="div-8">
          <NavLink >Contact Us</NavLink>
        </div>
      </div>  */}

<nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="">
      <img className="img" src={logo} alt="logo"/>
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <NavLink to="/" exact id='home' className='change nav-link active' aria-current="page" activeClassName='active'> Home </NavLink>
        </li>
        <li className="nav-item">
         <NavLink to="/about" exact id='aboutUs' className='change nav-link active' aria-current="page"  activeClassName="active"> About Us </NavLink>
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