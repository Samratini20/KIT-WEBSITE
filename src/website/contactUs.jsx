import * as React from "react";
import {useForm} from 'react-hook-form';
import './contactUs.css';
import ContactUS_img from '../assets/contactUs_img.png'   
  
const ContactUs = () => {
     const { register, handleSubmit, formState: {errors} } = useForm();

     const onSubmit = (data) => {
      console.log(data);
     };
  return (
    <>
      <div className="cdiv">
        
        <div className="cdiv-9">
          <div className="cdiv-10">
            <div className="cdiv-11">
              <h6 id="h6">Get in touch</h6>
              <br />
              Contact
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="cdiv-12">
              <div className="form">
                <label htmlFor="name">Name <span className="red">*</span></label>
                <input 
                type="text"
                placeholder="Your name"
                id="name"
                {...register('name',{required:true,pattern:/^[a-zA-Z]+$/})}
                 />
                 <div className="error" style={{color:'red'}}>
                <p>{errors.name?.type === "required" && 'Name is required'}</p>
                <p>{errors.name?.type === 'pattern' && 'Enter valid Name'}</p>
                </div>
              </div>
              <div className="form">
                <label htmlFor="email">E-mail ID <span className="red">*</span></label>
                <input 
                type="text"
                placeholder="Your email"
                id="email"
                {...register('email',{required:true,pattern:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/})}
                 />
                 <div className="error" style={{color:'red'}}>
                  <p>{errors.email?.type === "required" && 'Email is required'}</p>
                  <p>{errors.email?.type === 'pattern' && 'Enter valid Email'}</p>
                  </div>
              </div>
              <div className="form">
                <label htmlFor="subject">Subject <span className="red">*</span></label>
                <input 
                type="text"
                placeholder="Subject"
                id="subject"
                {...register('subject',{required:true})}
                 />
                 <div className="error" style={{color:'red'}}>
                  <p>{errors.subject?.type === "required" && 'Subject is required'}</p>
                  </div>
              </div>
              <div className="form">
                <label htmlFor="websiteUrl">Website URL</label>
                <input 
                type="url"
                placeholder="Website URL"
                id="websiteurl"
                
                 />
              </div>
              <div className="form">
                <label htmlFor="message">Type your message here <span className="red">*</span></label>
                <textarea   
                id="message"
                placeholder="Type here....."
                {...register('message',{required:true})}
                 />
                 <div className="error" style={{color:'red'}}>
                 <p>{errors.message?.type === "required" && 'Message is required'}</p>
                 </div>
              </div>
              <button className="btn" type="submit">Send Message </button>
              </div>
            </form>
            {/* <div className="cdiv-12">
              <span style={{color: rgba(0,94,141,1)}}>Name </span>
              <span style={{color: rgba(227,0,0,1)}}>*</span>
            </div>
            <div className="cdiv-13">Your name</div>
            <div className="cdiv-14">
              <span style={{color: rgba(0,94,141,1)}}>E-mail ID </span>
              <span style={{color: rgba(227,0,0,1)}}>*</span>
            </div>
            <div className="cdiv-15">Your email</div>
            <div className="cdiv-16">
              <span style={{color: rgba(0,94,141,1)}}>Subject </span>
              <span style={{color: rgba(227,0,0,1)}}>*</span>
            </div> */}
            {/* <div className="cdiv-17">Subject</div>
            <div className="cdiv-18">Website URL</div>
            <div className="cdiv-19">Website URL</div> */}
            {/* <div className="cdiv-20">
              <span style={{color: rgba(0,94,141,1)}}>
                Type your message here{" "}
              </span>
              <span style={{color: rgba(227,0,0,1)}}>*</span>
            </div> */}
          </div>
          <div className="cdiv-21">
            {/* <div className="cdiv-22" /> */}
            <div className="cdiv-23">
              <div className="cdiv-24" />
              <div className="cdiv-25" />
            </div>
          </div>
          {/* <div className="cdiv-26">Contact Details</div> */}
          {/* <div className="imgdiv">
          <img 
            loading="lazy"
            src={ContactUS_img} 
            className="img-1"
            />
          </div> */}
          <div className="cdiv-27">
          
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88cac1f1ba11503b7092ee39a09fa004ab7f30ef817fa3a0f8807ebbfa3170e?apiKey=9d6521b3bd494d48816871a061465c45&"
              className="img-2"
            /> */}
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/444e5c42acfa51b41f37c22acc565ab8b0773fdb8698e5af47ecdcdbca610c67?apiKey=9d6521b3bd494d48816871a061465c45&"
              className="img-3"
            /> */}
          </div>
          <div className="cdiv-28">
         
          <div className="Img_div">
          <img 
            loading="lazy"
            src={ContactUS_img} 
            className="img-1"
            />
         
         </div>
           <div className="cdiv-29">
           
            <h1>Contact Details</h1>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88cac1f1ba11503b7092ee39a09fa004ab7f30ef817fa3a0f8807ebbfa3170e?apiKey=9d6521b3bd494d48816871a061465c45&"
              className="img-2"
            />
              <span id="title" style={{fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                Company Address
                
                <br />
              </span>
              <span  style={{fontFamily: 'Calibri, sans-serif',fontWeight: 400}}>
                <p id="address">
                23/1, Serenity Spaces, 1st Main Road,
                <br/>
                  Channama Layout, EPIP,
                Bangalore - 560048
                <br />
                </p>
              </span>
              <span style={{fontFamily: 'Calibri, sans-serif',fontWeight: 400}}>
               <a id="map" href="https://www.google.com/maps/place/Brookefield+Mall/@12.9862541,77.6875023,13.86z/data=!3m1!5s0x3bae12265c31549d:0xdec5384b2e62e98d!4m9!1m2!2m1!1s23%2F1,+Serenity+Spaces,+1st+Main+Road,+%E2%80%A8Channama+Layout,+EPIP,+Bangalore+-+560048!3m5!1s0x3bae12336cac1167:0x23953b77cf84106c!8m2!3d12.9660074!4d77.7181261!16s%2Fg%2F11bzypfx2l?entry=ttu"> 
               View Map</a>
              </span>
            
            <div className="cdiv-30">
              <span  style={{fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                Call us
                <br />
              </span>
              <span style={{fontFamily: 'Calibri, sans-serif',fontWeight: 400 , textDecoration: 'underline'}}>
                +91- 9686112338
              </span>
            </div>
            <div className="cdiv-31">
              <span style={{fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                Email Us
                <br />
              </span>
              <span style={{fontFamily: 'Calibri, sans-serif',fontWeight: 400, textDecoration: 'underline'}}>
                hello@kitservices.in
              </span>
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/444e5c42acfa51b41f37c22acc565ab8b0773fdb8698e5af47ecdcdbca610c67?apiKey=9d6521b3bd494d48816871a061465c45&"
              className="img-3"
            />
           
              <div className="cdiv-32">
              <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b950db10e325a5912da29feb855032d7ba7cfbce14bf725bf715854fdd7cdf81?apiKey=9d6521b3bd494d48816871a061465c45&"
                      className="img-4"
                    />
                    {/* <div className="cdiv-33"> */}
                      <span id="cust" style={{fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                        Customer Support
                        <br />
                      </span>
                      <span id='support' style={{fontFamily: 'Calibri, sans-serif',fontWeight: 400, textDecoration: 'underline'}}>
                        support@kitservices.in
                      </span>
                     
                      {/* </div> */}
                    </div>
                  </div>
            </div>
          </div>
        </div>
        {/* <div className="cdiv-32">
          <div className="cdiv-33">
            <div className="cdiv-34">
              <div className="cdiv-35">
                <div className="column">
                  {/* <div className="cdiv-36">Type here.....</div> 
                </div>
                <div className="column-2">
                  <div className="cdiv-37">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b950db10e325a5912da29feb855032d7ba7cfbce14bf725bf715854fdd7cdf81?apiKey=9d6521b3bd494d48816871a061465c45&"
                      className="img-4"
                    />
                    <div className="cdiv-38">
                      <span style={{fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                        Customer Support
                        <br />
                      </span>
                      <span style={{fontFamily: 'Calibri, sans-serif',fontWeight: 400, textDecoration: 'underline'}}>
                        support@kitservices.in
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="cdiv-39">Send Message</div> 
          </div>
          {/* <div className="cdiv-40">
            <div className="cdiv-41">
              <div className="cdiv-42">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5a250ad49393d69c20e9d2ccc1360ecea0919edf33771fc70e4de867e9a026e6?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a250ad49393d69c20e9d2ccc1360ecea0919edf33771fc70e4de867e9a026e6?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a250ad49393d69c20e9d2ccc1360ecea0919edf33771fc70e4de867e9a026e6?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a250ad49393d69c20e9d2ccc1360ecea0919edf33771fc70e4de867e9a026e6?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a250ad49393d69c20e9d2ccc1360ecea0919edf33771fc70e4de867e9a026e6?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a250ad49393d69c20e9d2ccc1360ecea0919edf33771fc70e4de867e9a026e6?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a250ad49393d69c20e9d2ccc1360ecea0919edf33771fc70e4de867e9a026e6?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a250ad49393d69c20e9d2ccc1360ecea0919edf33771fc70e4de867e9a026e6?apiKey=9d6521b3bd494d48816871a061465c45&"
                  className="img-5"
                />
              </div>
              <div className="cdiv-43">
                <div className="cdiv-44">Quick Links</div>
                <div className="cdiv-45">Home</div>
                <div className="cdiv-46">About Us</div>
                <div className="cdiv-47">Services</div>
                <div className="cdiv-48">Blog</div>
                <div className="cdiv-49">Contact Us</div>
              </div>
              <div className="cdiv-50">
                <div className="cdiv-51">
                  <div className="column-3">
                    <div className="cdiv-52">
                      <div className="cdiv-53">Company</div>
                      <div className="cdiv-54">Terms & Conditions</div>
                      <div className="cdiv-55">Privacy Policy</div>
                    </div>
                  </div>
                  <div className="column-4">
                    <div className="cdiv-56">
                      <div className="cdiv-57">Follow Us On</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/18b6b31291067c1fd851c30874283a984fca7e401f876d6fe14f8d158f1de950?apiKey=9d6521b3bd494d48816871a061465c45&"
                        className="img-6"
                      />
                    </div>
                  </div>
                  <div className="column-5">
                    <div className="cdiv-58">
                      <div className="cdiv-59">Newsletter</div>
                      <div className="cdiv-60">
                        <div className="cdiv-61">Email Address</div>
                        <div className="cdiv-62">Send</div>
                      </div>
                      <div className="cdiv-63">
                        Subscribe to our mailing list and get updates to your
                        email inbox.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cdiv-64">KIT Services © All Rights Reserved</div>
          </div> *
        </div> */}
      </div>
      </>
      );
      }
export default ContactUs;
      {/* <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cdiv-2 {
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          align-self: stretch;
          display: flex;
          width: 100%;
          justify-content: space-between;
          gap: 20px;
          padding: 4px 80px;
        }
        @media (max-width: 991px) {
          .cdiv-2 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .img {
          aspect-ratio: 0.76;
          object-fit: contain;
          object-position: center;
          width: 58px;
          overflow: hidden;
          max-width: 100%;
        }
        .cdiv-3 {
          align-self: center;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .cdiv-3 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .cdiv-4 {
          color: var(--Text, #292929);
          align-self: start;
          white-space: nowrap;
          font: 400 18px Calibri, sans-serif;
        }
        @media (max-width: 991px) {
          .cdiv-4 {
            white-space: initial;
          }
        }
        .cdiv-5 {
          color: var(--Text, #292929);
          align-self: start;
          font: 400 18px Calibri, sans-serif;
        }
        .cdiv-6 {
          color: var(--Text, #292929);
          align-self: start;
          font: 400 18px Calibri, sans-serif;
        }
        .cdiv-7 {
          color: var(--Text, #292929);
          align-self: stretch;
          font: 400 18px Calibri, sans-serif;
        }
        .cdiv-8 {
          color: #14b1ff;
          align-self: start;
          white-space: nowrap;
          font: 700 18px Calibri, sans-serif;
        }
        @media (max-width: 991px) {
          .cdiv-8 {
            white-space: initial;
          }
        }
        .cdiv-9 {
          display: flex;
          margin-top: 41px;
          width: 100%;
          max-width: 1211px;
          flex-direction: column;
          padding: 0 20px 37px;
        }
        @media (max-width: 991px) {
          .cdiv-9 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .cdiv-10 {
          align-self: start;
          display: flex;
          flex-direction: column;
        }
        .cdiv-11 {
          color: var(--Section-1, #005e8d);
          letter-spacing: 1.2px;
          white-space: nowrap;
          font: 700 30px/45px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .cdiv-11 {
            white-space: initial;
          }
        }
        .cdiv-12 {
          justify-content: center;
          color: var(--Section-1, #e30000);
          letter-spacing: 0.72px;
          margin-top: 64px;
          font: 400 18px/35px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .cdiv-12 {
            margin-top: 40px;
          }
        }
        .cdiv-13 {
          color: var(--Section-1, #005e8d);
          letter-spacing: 0.72px;
          margin-top: 37px;
          white-space: nowrap;
          font: 400 18px/35px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .cdiv-13 {
            white-space: initial;
          }
        }
        .cdiv-14 {
          justify-content: center;
          color: var(--Section-1, #e30000);
          letter-spacing: 0.72px;
          margin-top: 46px;
          font: 400 18px/35px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .cdiv-14 {
            margin-top: 40px;
          }
        }
        .cdiv-15 {
          color: var(--Section-1, #005e8d);
          letter-spacing: 0.72px;
          margin-top: 36px;
          white-space: nowrap;
          font: 400 18px/35px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .cdiv-15 {
            white-space: initial;
          }
        }
        .cdiv-16 {
          justify-content: center;
          color: var(--Section-1, #e30000);
          letter-spacing: 0.72px;
          margin-top: 46px;
          font: 400 18px/35px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .cdiv-16 {
            margin-top: 40px;
          }
        }
        .cdiv-17 {
          color: var(--Section-1, #005e8d);
          letter-spacing: 0.72px;
          margin-top: 33px;
          white-space: nowrap;
          font: 400 18px/35px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .cdiv-17 {
            white-space: initial;
          }
        }
        .cdiv-18 {
          justify-content: center;
          color: var(--Section-1, #005e8d);
          letter-spacing: 0.72px;
          margin-top: 43px;
          font: 400 18px/35px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .cdiv-18 {
            margin-top: 40px;
          }
        }
        .cdiv-19 {
          color: var(--Section-1, #005e8d);
          letter-spacing: 0.72px;
          margin-top: 36px;
          white-space: nowrap;
          font: 400 18px/35px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .cdiv-19 {
            white-space: initial;
          }
        }
        .cdiv-20 {
          color: var(--Section-1, #e30000);
          letter-spacing: 0.72px;
          margin-top: 43px;
          white-space: nowrap;
          font: 400 18px/35px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .cdiv-20 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .cdiv-21 {
          align-self: end;
          z-index: 1;
          display: flex;
          margin-top: -551px;
          width: 343px;
          max-width: 100%;
          gap: 3px;
        }
        @media (max-width: 991px) {
          .cdiv-21 {
            margin-top: -200px;
          }
        }
        .cdiv-22 {
          border-radius: 50%;
          background-color: #e7f7ff;
          display: flex;
          width: 288px;
          max-width: 100%;
          height: 288px;
          flex-direction: column;
        }
        .cdiv-23 {
          align-self: center;
          display: flex;
          flex-basis: 0%;
          flex-direction: column;
          margin: auto 0;
        }
        .cdiv-24 {
          border-radius: 50%;
          display: flex;
          height: 24px;
          flex-direction: column;
        }
        .cdiv-25 {
          border-radius: 50%;
          display: flex;
          margin-top: 6px;
          height: 47px;
          flex-direction: column;
        }
        .cdiv-26 {
          color: var(--Section-1, #005e8d);
          letter-spacing: 1.2px;
          align-self: end;
          z-index: 1;
          white-space: nowrap;
          margin: -66px 271px 0 0;
          font: 700 30px/45px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .cdiv-26 {
            margin-right: 10px;
            white-space: initial;
          }
        }
        .cdiv-27 {
          align-self: center;
          z-index: 1;
          display: flex;
          width: 24px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
          margin: 41px 0 0 129px;
        }
        @media (max-width: 991px) {
          .cdiv-27 {
            display: none;
            margin-top: 40px;
          }
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          margin-top: 216px;
        }
        @media (max-width: 991px) {
          .img-3 {
            margin-top: 40px;
          }
        }
        .cdiv-28 {
          align-self:
        } */}
