//import * as React from "react";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './footer.css'
import logo from '../assets/logo.jpg'
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
    // Perform actions with form data, e.g., submit to a server
    //console.log('email submitted:', email);
  };
    return (
      <div className="div-39">
      <div className="div-40">
        <div className="div-41">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&"
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
          <div className="div-51"><Link to="/terms&conditions" className='terms'>Terms & Conditions</Link></div>{" "}
          <div className="div-52"><Link to="/privacy/policy" className='privacy'>Privacy Policy</Link></div>
        </div>{" "}
        <div className="div-53">
          <div className="div-54">Follow Us On</div>{" "}
          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/292716d4cc908304fa794336812059f1563ffdc5d561ce600dd79e89a744d324?apiKey=9d6521b3bd494d48816871a061465c45&"
            className="img-9"
          /> */}
          <div className='socialMedia img-9'>
            <a href="https://www.facebook.com/learnbuildteach/"
              className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com/jamesqquick" className="twitter social">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.instagram.com/learnbuildteach"
              className="instagram social">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.twitter.com/jamesqquick" className="linkedin social">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.twitter.com/jamesqquick" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>{" "}
        <div className="div-55">
          <div className="div-56">Newsletter</div>{" "}
          <div className="div-57">
            <div className="div-58">
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                //onChange={(e) => setEmail(e.target.value)}
              />
            </div>{" "}
            <div className="div-59">
              <button type="submit" onClick={handleSubmit}>Send</button>
            </div>
          </div>{" "}
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