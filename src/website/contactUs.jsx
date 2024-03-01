import * as React from "react";
import "./contactUs.css";
import ContactUS_img from "../assets/contactUs_img.png";
import ContactUS_img_1 from "../assets/contact-circle-1.png";
import ContactUS_img_2 from "../assets/contact-circle-2.png";
import ContactUS_img_3 from "../assets/contact-circle-3.png";
import { useEffect, useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  function SubmitButton() {
    if (contactMessage && subject && email && name) {
      return (
        <button
          type="submit"
          className="btn rounded-5 py-2 send-message fw-bold px-4 mb-4"
        >
          Send Message
        </button>
      );
    } else {
      return (
        <button
          type="submit"
          className="btn rounded-5 py-2 send-message fw-bold px-4 mb-4"
          disabled
        >
          Send Message
        </button>
      );
    }
  }

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    const alphabeticRegex = /^[A-Za-z\s]*$/;
    if (alphabeticRegex.test(inputValue)) {
      setName(inputValue);
    }
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (inputValue && emailregex.test(inputValue)) {
      setEmail(inputValue);
      document.getElementById("errorMessage").innerText = "";
    } else {
      setEmail("");
      document.getElementById("errorMessage").innerText =
        "Please Enter a valid Email";
    }
  };

  return (
    <div className="container-fluid contactus-container">
      <div className="row d-flex px-3 px-sm-0">
        {/* dummy div column dnt delete */}
        <div className="col-sm-1"></div>
        <div className="col-12 col-sm-5 getIntouch mb-1 mb-sm-5">
          <h3 className="fw-medium mt-2 mt-sm-5 ">Keep in touch with us</h3>
          <form
            action="https://formsubmit.co/info@kitservices.in"
            method="POST"
          >
            <div class="row mt-4">
              <div class="col-12 col-sm ">
                <label for="firstname" class="form-label mx-1 text-black">
                  Name: <span className="text-danger">*</span>{" "}
                </label>
                <input
                  id="firstname"
                  type="text"
                  class="form-control"
                  aria-label="First name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div class="col-12 col-sm">
                <label for="emailid" class="form-label mx-1 text-black">
                  Email-ID: <span className="text-danger">*</span>{" "}
                </label>
                <input
                  id="emailid"
                  type="text"
                  class="form-control"
                  aria-label="Email"
                  onChange={handleEmailChange}
                  required
                />
                <span id="errorMessage" className="mt-2 text-danger"></span>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12 col-sm">
                <label for="subject" class="form-label mx-1 text-black">
                  Subject: <span className="text-danger">*</span>{" "}
                </label>
                <input
                  id="subject"
                  type="text"
                  class="form-control"
                  aria-label="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div class="col-12 col-sm">
                <label for="website" class="form-label mx-1 text-black">
                  Website: <span className="text-danger">*</span>{" "}
                </label>
                <input
                  id="website"
                  type="text"
                  class="form-control"
                  aria-label="Website"
                />
              </div>
            </div>
            <div class="mb-3 mt-3">
              <label for="exampleFormControlTextarea1" class="form-label text-black">
                Type your message here:{" "}
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={ e => setContactMessage(e.target.value)} 
                required
              ></textarea>
            </div>
            <SubmitButton />
          </form>
        </div>
        {/* dummy div column dnt delete */}
        <div className="col-sm-1"></div>
        <div className="col-12 col-sm-5 contactmargin">
          <h3 className="fw-medium mt-2 mt-sm-5">Contact Details</h3>
          {/* company address */}
          <div className="d-flex mt-4 ">
            <div>
              <i class="fa-solid fa-location-dot contactUsicons font-color-blue"></i>
            </div>
            <div>
              <h6 className="fw-semibold font-color-blue">Company Address</h6>
              <p className="font-color-blue">
                2nd Floor, NO 23/1, SONNENAHALLI, HOODY, F6, Channama layout,
                Bangalore North, Bangalore- 560048, Karnataka.
              </p>
              <a
                href=" https://maps.app.goo.gl/UXbpqWW2f7iKGuqC8"
                target="_blank"
              >
                View Map
              </a>
            </div>
          </div>
          {/* phone Number */}
          <div className="d-flex mt-3">
            <div>
              <i class="fa-solid fa-phone contactUsicons font-color-blue"></i>
            </div>
            <div>
              <h6 className="fw-semibold font-color-blue">Call Us</h6>
              <p>
                <a href="tel:919686112338" target="_blank">
                      +91- 9686112338
                </a>
              </p>
            </div>
          </div>
          {/* Email */}
            <div className="d-flex mt-3">
                <div>
                <i class="fa-regular fa-envelope contactUsicons font-color-blue"></i>
                </div>
                <div>
                  <h6 className="fw-semibold font-color-blue">
                    Email Us
                  </h6>
                  <a href="mailto:info@kitservices.in" target="_blank">
                    info@kitservices.in
                     </a>
                </div>
            </div>
            {/* Contact Us */}
            <div className="d-flex mt-3 mb-5 mb-sm-0">
                <div>
                <i class="fa-solid fa-headset contactUsicons font-color-blue"></i>
                </div>
                <div>
                  <h6 className="fw-semibold font-color-blue">Contact Us</h6>
                  <a href="mailto:support@kitservices.in" target="_blank">
                    support@kitservices.in
                     </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
