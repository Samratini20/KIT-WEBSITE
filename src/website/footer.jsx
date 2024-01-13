import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './footer.css'
import logo from '../assets/logo-dark.PNG';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
  
function Footer() {
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
  };
    return (
      <div className="div-39">
      <div className="div-40">
        <div className="div-41">
          <img
            loading="lazy"
            src={logo}
            className="img-8"
          />{" "}
        </div>{" "}
          <div className="div-42">
            <div className="div-43">Quick Links</div>{" "}
            <div className="div-44">
              <Link to="/" className='home'>Home</Link>
            </div>{" "}
            <div className="div-45">
              <Link to="/about" className='aoutUs'>About Us</Link>
            </div>{" "}
            <div className="div-46">
              {/* <a href="/services" className='services'>Services</a> */}
              <Link to="/services" className='services'>Services</Link>
            </div>{" "}
            <div className="div-47"><Link to="/blog" className='blog'>Blog</Link></div>{" "}
            <div className="div-48"><Link to="/contact" className='contactUs'>Contact Us</Link></div>
          </div>
        <div className="div-49">
          <div className="div-50">Company</div>{" "}
          <div className="div-51"><Link to="/termsconditions" className='terms'>Terms & Conditions</Link></div>{" "}
          <div className="div-52"><Link to="/privacypolicy" className='privacy'>Privacy Policy</Link></div>
        </div>{" "}
        <div className="div-53">
          <div className="div-54">Follow Us On</div>{" "}
          <div className='socialMedia'>
            <a href=" https://www.facebook.com/profile.php?id=61554749135083" target='_blank'
              className="fs-4">
                  <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="https://x.com/KITGlobalTech?t=DvfTgvP5tzvgeb1drCT0Rg&s=08" target='_blank' className="fs-4">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.instagram.com/kit_globaltechnologies?igsh=MWltM3AyMWd3czJ4" target='_blank'
              className="fs-4">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.LinkedIn.com" target='_blank' className="fs-4">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.Youtube.com" target='_blank' className="fs-4">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>{" "}
        <div className="div-55">
          <div className="div-60">
            Subscribe to our mailing list and get updates to your email
            inbox.
          </div>
        </div>
      </div>{" "}
      <div className="div-61">KIT Services © All Rights Reserved</div>
    </div>

    );
}

export default Footer; 