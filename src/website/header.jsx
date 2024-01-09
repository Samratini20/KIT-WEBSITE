import * as React from "react";
import './header.css'
//import logo from '../assets/logo.jpg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from "./homePage";


function Header() {
    return (
      <div className="div-2">
        <Link to="/" className='home'>
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f46a3395a58684b7a7a37d57be145cb33c1b586205f87107c340503679ba4dd?apiKey=9d6521b3bd494d48816871a061465c45&"
            //src={logo}
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