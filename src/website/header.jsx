import * as React from "react";
import './header.css'
import logo from '../assets/logo.PNG'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from "./homePage";


function Header() {
    return (
      <div className="div-2">
        <Link to="/" className='home'>
        <img
            loading="lazy"
            src={logo}
            className="img" 

          />
        </Link>
      <div className="div-3">
        <div className="div-4">
          {/* <a href="/" className='home'>Home</a> */}
          <Link to="/" className='home'>Home</Link></div>
        <div className="div-5">
          <Link to="/about" className='aboutUs'>About Us</Link></div>
        <div className="div-6">
          <Link to="/services" className='services'>Services</Link>
        </div>
        <div className="div-7">
          <Link to="/blog" className='blog'>Blog</Link>
        </div>
        <div className="div-8">
          <Link to="/contact" className='contactUs'>Contact Us</Link>
        </div>
      </div>
    </div>
    );
}

export default Header;    