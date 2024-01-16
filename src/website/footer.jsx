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
    //   <div className="div-39">
    //   <div className="div-40">
    //     <div className="div-41">
    //       <img
    //         loading="lazy"
    //         src={logo}
    //         className="img-8"
    //       />{" "}
    //     </div>{" "}
    //       <div className="div-42">
    //         <div className="div-43">Quick Links</div>{" "}
    //         <div className="div-44">
    //           <Link to="/" className='home'>Home</Link>
    //         </div>{" "}
    //         <div className="div-45">
    //           <Link to="/about" className='aoutUs'>About Us</Link>
    //         </div>{" "}
    //         <div className="div-46">
    //           {/* <a href="/services" className='services'>Services</a> */}
    //           <Link to="/services" className='services'>Services</Link>
    //         </div>{" "}
    //         <div className="div-47"><Link to="/blog" className='blog'>Blog</Link></div>{" "}
    //         <div className="div-48"><Link to="/contact" className='contactUs'>Contact Us</Link></div>
    //       </div>
    //     <div className="div-49">
    //       <div className="div-50">Company</div>{" "}
    //       <div className="div-51"><Link to="/termsconditions" className='terms'>Terms & Conditions</Link></div>{" "}
    //       <div className="div-52"><Link to="/privacypolicy" className='privacy'>Privacy Policy</Link></div>
    //     </div>{" "}
    //     <div className="div-53">
    //       <div className="div-54">Follow Us On</div>{" "}
    //       <div className='socialMedia'>
    //         <a href=" https://www.facebook.com/profile.php?id=61554749135083" target='_blank'
    //           className="fs-4">
    //               <FontAwesomeIcon icon={faFacebook}/>
    //         </a>
    //         <a href="https://x.com/KITGlobalTech?t=DvfTgvP5tzvgeb1drCT0Rg&s=08" target='_blank' className="fs-4">
    //           <FontAwesomeIcon icon={faXTwitter} />
    //         </a>
    //         <a href="https://www.instagram.com/kit_globaltechnologies?igsh=MWltM3AyMWd3czJ4" target='_blank'
    //           className="fs-4">
    //           <FontAwesomeIcon icon={faInstagram} />
    //         </a>
    //         <a href="https://www.LinkedIn.com" target='_blank' className="fs-4">
    //           <FontAwesomeIcon icon={faLinkedin} />
    //         </a>
    //         <a href="https://www.Youtube.com" target='_blank' className="fs-4">
    //           <FontAwesomeIcon icon={faYoutube} />
    //         </a>
    //       </div>
    //     </div>{" "}
    //     <div className="div-55">
    //       <div className="div-60">
    //         Subscribe to our mailing list and get updates to your email
    //         inbox.
    //       </div>
    //     </div>
    //   </div>{" "}
    //   <div className="div-61">KIT Services © All Rights Reserved</div>
    // </div>
      <div className='footer-container mt-5'>
      <footer className='footer d-flex justify-content-around w-100 ' >
        <div className='footer-logo-container'>
          <img className='logo-img' loading='lazy' src={logo} alt="logo" />
        </div>
        <div className='footer-quicklinks-container d-flex flex-column'>
          <h4 className='mt-3'>Quick links</h4>
          <Link className='mt-4' to="/">Home</Link> 
          <Link className='mt-2' to="/about">about Us</Link>
          <Link className='mt-2' to="/services">Services</Link>
          <Link className='mt-2' to="/blog">Blog</Link>
          <Link className='mt-2' to="/contact">Contact Us</Link>
        </div>
        <div className='footer-terms&policy-container d-flex flex-column'>
          <h4 className='mt-3'>Company</h4>
            <Link className='mt-4' to="/termsconditions">Terms & Conditions</Link>
            <Link className='mt-2' to="privacypolicy">Privacy Policy</Link>
        </div>
        <div className='social-media-container'>
          <h4 className='mt-3'>Follow Us On</h4>
          <div className='icons mt-4'>
          <a href="https://www.facebook.com/profile.php?id=61554749135083" target='_blank'><i class="fa-brands fa-facebook" style={ {color: "#ffffff;"}}></i> </a>
        <a href="https://twitter.com/KITGlobalTech?t=DvfTgvP5tzvgeb1drCT0Rg&s=08" target='_blank'><i class="fa-brands fa-x-twitter" style={{color: "#ffffff;"}}></i></a> 
        <a href="https://www.instagram.com/kit_globaltechnologies?igsh=MWltM3AyMWd3czJ4" target='_blank'><i class="fa-brands fa-instagram" style={{color: "#ffffff;"}}></i> </a>
        <a href="https://www.linkedin.com/company/kit-services-official/mycompany/" target='_blank'>  <i class="fa-brands fa-linkedin" style={{color: "#ffffff;"}}></i></a>
          </div>
        </div>
      </footer>
      <h5>KIT Global Technologies &copy; all rights Reserved</h5>
      </div>
    );
}

export default Footer; 