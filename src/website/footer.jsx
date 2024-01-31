import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './footer.css'
import logo from '../assets/logo-dark.png';
  
function Footer() {
    return (
      <div className='footer-container'>
      <footer className='footer d-flex w-100 ' >
        <a className='footer-logo-container' href='/'>
          <img className='logo-img mt-5' loading='lazy' src={logo} alt="logo" />
        </a>
        <div className='footer-quicklinks-container d-flex flex-column'>
          <h4 className='mt-3'>Quick links</h4>
          <Link className='mt-4 footer-link' to="/">Home</Link> 
          <Link className='mt-2 footer-link' to="/about">About Us</Link>
          <Link className='mt-2 footer-link' to="/services">Services</Link>
          {/* <Link className='mt-2 footer-link' to="/blog">Blog</Link> */}
          <Link className='mt-2 footer-link' to="/careers">Careers</Link>
          <Link className='mt-2 footer-link' to="/contact">Contact Us</Link>
        </div>
        <div className='footer-terms&policy-container d-flex flex-column'>
          <h4 className='mt-3'>Company</h4>
            <Link className='mt-4 footer-link' to="/termsconditions">Terms & Conditions</Link>
            <Link className='mt-2 footer-link' to="privacypolicy">Privacy Policy</Link>
        </div>
        <div className='social-media-container'>
          <h4 className='mt-3'>Follow Us On</h4>
          <div className='icons mt-4'>
          <a href="https://www.facebook.com/profile.php?id=61554749135083" className='footer-link' target='_blank'><i class="fa-brands fa-facebook" style={ {color: "#ffffff;"}}></i> </a>
        <a href="https://twitter.com/KITGlobalTech?t=DvfTgvP5tzvgeb1drCT0Rg&s=08" target='_blank' className='footer-link'><i class="fa-brands fa-x-twitter" style={{color: "#ffffff;"}}></i></a> 
        <a href="https://www.instagram.com/kit_globaltechnologies?igsh=MWltM3AyMWd3czJ4" target='_blank' className='footer-link'><i class="fa-brands fa-instagram" style={{color: "#ffffff;"}}></i> </a>
        <a href="https://www.linkedin.com/company/kit-services-official/mycompany/" target='_blank' className='footer-link'>  <i class="fa-brands fa-linkedin" style={{color: "#ffffff;"}}></i></a>
          </div>
        </div>
      </footer>
      <span className='d-flex justify-content-center mt-4 pb-3'>KIT Global Technologies &copy; 2024 all rights Reserved</span>
      </div>
    );
}

export default Footer; 