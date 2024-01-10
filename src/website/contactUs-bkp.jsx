import * as React from "react";
import './contactUs.css'
import ContactUS_img from '../assets/contactUs_img.png'
import ContactUS_img_1 from '../assets/contact-circle-1.png'   
import ContactUS_img_2 from '../assets/contact-circle-2.png'  
import ContactUS_img_3 from '../assets/contact-circle-3.png'   
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactUs(props) {
  return (
      <div className="d-flex col-12">
          <div className="getIntouch d-flex flex-column col-4">
            <span className="fw-bold">Get in touch</span>
            <hr/>
            <span className="fw-bold fs-2">Contact</span>
            <form>
              <div class="form-row">
                <div class="form-group col-12 my-4">
                  <span for="Name" className="fs-5">Name <span class="text-danger ml-2">*</span></span>
                  <input type="text" class="form-control p-0 pt-4 py-2 underlined-input" id="name" placeholder="Your Name"/>
                </div>
                <div class="form-group col-12 my-4">
                  <span for="emailID" className="fs-5">Email - ID <span class="text-danger ml-2">*</span></span>
                  <input type="email" class="form-control p-0 pt-4 py-2 underlined-input" id="emailId" placeholder="Your Email"/>
                </div>
                <div class="form-group col-12 my-4">
                  <span for="subject" className="fs-5">Subject <span class="text-danger ml-2">*</span></span>
                  <input type="text" class="form-control p-0 pt-4 py-2 underlined-input" id="subject" placeholder="Subject"/>
                </div>
                <div class="form-group col-12 my-4">
                  <span for="websiteURL" className="fs-5">Website URL <span class="text-danger ml-2">*</span></span>
                  <input type="url" class="form-control p-0 pt-4 py-2 underlined-input" id="websiteURL" placeholder="Website URL"/>
                </div>
                <div class="form-group col-12 my-4">
                  <span for="textArea" className="fs-5">Type your Message here <span class="text-danger ml-2">*</span></span>
                  <textarea rows={5} cols={10} class="form-control mt-4" id="contact-message" placeholder="Type here ......."/>
                </div>
              </div>

                <button type="submit" className="btn rounded-5 py-2 mt-5 send-message fw-bold px-4">Send Message</button>
            </form>
          </div>
          <div className="contact-img mx-5">
              <img 
                loading="lazy"
                src={ContactUS_img_1} 
                className="contact-img-1 z-n1"
                />
                <img 
                loading="lazy"
                src={ContactUS_img_3} 
                className="contact-img-2"
                />
                <img 
                loading="lazy"
                src={ContactUS_img_2} 
                className="contact-img-2"
                />
              <img 
                loading="lazy"
                src={ContactUS_img} 
                className="img-1"
                />
                <div className="contactDetails">
                  <span>Contact Details</span>
                  <div className="fs-6 mx-4">
                    <div className="mt-3">Company Address</div>
                    <div className="mt-1 fw-normal">
                      23/1, Serenity Spaces, 1st Main Road, 
                      Channama Layout, EPIP, Bangalore - 560048
                    </div>
                    <div className="fw-normal mt-1 map-link">
                      <a href=" https://maps.app.goo.gl/UXbpqWW2f7iKGuqC8" target="_blank">View Map</a>
                    </div>
                  </div>
                  <div className="fs-6 mx-4">
                    <div className="fw-bold mt-4">Call Us</div>
                    <div className="mt-1 fw-normal text-decoration-underline">
                       +91- 9686112338
                    </div>
                  </div>
                  <div className="fs-6 mx-4">
                    <div className="fw-bold mt-4">Email Us</div>
                    <div className="mt-1 fw-normal text-decoration-underline">
                       hello@kitservices.in
                    </div>
                  </div>
                  <div className="fs-6 mx-4">
                    <div className="fw-bold mt-4">Customer Support</div>
                    <div className="mt-1 fw-normal text-decoration-underline">
                       support@kitservices.in
                    </div>
                  </div>
                </div>
          </div>
      </div>
      );
      }
export default ContactUs;