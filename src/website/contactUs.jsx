import * as React from "react";
import './contactUs.css'
import ContactUS_img from '../assets/contactUs_img.png'
import ContactUS_img_1 from '../assets/contact-circle-1.png'   
import ContactUS_img_2 from '../assets/contact-circle-2.png'  
import ContactUS_img_3 from '../assets/contact-circle-3.png'   
import { useEffect , useState} from "react";

function ContactUs(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [contactMessage, setContactMessage] = useState("");

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);


  function SubmitButton(){
    if (contactMessage && subject && email && name){
      return  <button type="submit" className="btn rounded-5 py-2 send-message fw-bold px-4 mb-4">Send Message</button>
    } else {
      return  <button type="submit" className="btn rounded-5 py-2 send-message fw-bold px-4 mb-4" disabled>Send Message</button>
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
    if(inputValue && emailregex.test(inputValue)) {
      setEmail(inputValue);
      document.getElementById("errorMessage").innerText = '';
    }else{
      setEmail("");
      document.getElementById("errorMessage").innerText = 'Please Enter a valid Email';
    }  
  };


  return (
    <div className="d-flex container-fluid">
        <div className="row w-100">
          <div className="getIntouch col">
            <form action="https://formsubmit.co/info@kitservices.in" method="POST">
              <div class="form-row">
                <span className="fw-bold fs-4 mb-3">Get in touch</span>
                <div class="form-group col-12 my-4">
                  <span for="Name" className="fs-5">Name <span class="text-danger ml-2">*</span></span>
                  <input
                    type="text"
                    className={`form-control p-0 pt-4 py-2 underlined-input`}
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                <div class="form-group col-12 my-4">
                  <span for="emailID" className="fs-5">Email - ID <span class="text-danger ml-2">*</span></span>
                  <input 
                    type="email" 
                    class="form-control p-0 pt-4 py-2 underlined-input " 
                    name="emailId" 
                    placeholder="Your Email" 
                    onChange={handleEmailChange}
                    required
                  />
                  <span id="errorMessage" className="mt-2 text-danger fw-bold"></span>
                </div>
                <div class="form-group col-12 my-4">
                  <span for="subject" className="fs-5">Subject <span class="text-danger ml-2">*</span></span>
                  <input 
                    type="text" 
                    class="form-control p-0 pt-4 py-2 underlined-input  " 
                    name="subject" 
                    placeholder="Subject" 
                    onChange={ e => setSubject(e.target.value)} 
                    required
                  />
                </div>
                <div class="form-group col-12 my-4">
                  <span for="websiteURL" className="fs-5">Website URL</span>
                  <input 
                    type="text" 
                    class="form-control p-0 pt-4 py-2 underlined-input" 
                    name="websiteURL" 
                    placeholder="Website URL"
                  />
                </div>
                <div class="form-group col-12 my-4">
                  <span for="textArea" className="fs-5">Type your Message here <span class="text-danger ml-2">*</span></span>
                  <textarea rows={5} cols={10} class="form-control mt-4 bg-transparent" name="contact-message" placeholder="Type here ......." onChange={ e => setContactMessage(e.target.value)} required/>
                </div>
              </div>
              <SubmitButton/>
            </form>
          </div>
          <div className="contact-img col">
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
                  <div className="fs-5 mx-4">
                    <div className="mt-3">
                    <i class="fa-solid fa-location-dot contactUsicons"></i>
                      Company Address</div>
                    <div className="mt-1 fw-normal w-75">
                          2nd Floor, NO 23/1, SONNENAHALLI, HOODY ,F6,  Channama layout ,Bangalore North,
                          Bangalore- 560048, Karnataka.
                    </div>
                    <div className="fw-normal mt-1 map-link text-decoration-underline">
                      <a href=" https://maps.app.goo.gl/UXbpqWW2f7iKGuqC8" target="_blank">View Map</a>
                    </div>
                  </div>
                  <div className="fs-5 mx-4">
                    <div className="fw-bold mt-4">
                    <i class="fa-solid fa-phone contactUsicons"></i>
                      Call Us</div>
                    <div className="mt-1 fw-normal text-decoration-underline">
                    <a href="tel:919686112338" target="_blank">
                    +91- 9686112338
                    </a>
                    </div>
                  </div>
                  <div className="fs-5 mx-4">
                    <div className="fw-bold mt-4">
                    <i class="fa-regular fa-envelope contactUsicons"></i>
                      Email Us</div>
                    <div className="mt-1 fw-normal text-decoration-underline">
                    <a href="mailto:info@kitservices.in" target="_blank">
                    info@kitservices.in
                    </a>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      );
      }
export default ContactUs;