import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './header.css'
import logo from '../assets/logo.PNG'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from "./homePage";


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
          <NavLink to="/contact" exact  id='contactUs ' className='change' activeClassName="active">Contact Us</NavLink>
        </div>
      </div>  */}
      
      
    </div>
    );
}

export default Header;