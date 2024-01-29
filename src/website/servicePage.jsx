import * as React from "react";
import serviceImg from '../assets/serviceImg.png'
import Img1 from '../assets/servicesImg_1.jpg';
import Img2 from '../assets/servicesImg_2.jpg';
import service_section_2 from '../assets/service_section_2.png'
import './servicePage.css';
import { useEffect } from "react";

function ServicePage(props) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-white d-flex flex-column justify-content-between overflow-hidden sdiv">
        <img
            loading="lazy"
            src={Img1}
            className="serviceimg-1"
          />
        <div className="sdiv-11 mb-5">
          <div className="sdiv-12">
            <div className="sdiv-13">
              <div className="sdiv-17">Powerful Solution For Your Business</div>
            </div>
            <div className="sdiv-18">
              <div className="fs-5 sdiv-19">
                Unlock Success with Our Powerful Business Solutions – Elevate
                Your Performance Today!
              </div>
              <div className="sdiv-20">
                <div className="sdiv-21 fs-6 ">Quality Services</div>
              </div>
              <div className="sdiv-23" />
              <div className="sdiv-24">
                <div className="sdiv-21 fs-6 ">Experienced technicians</div>
              </div>
              <div className="sdiv-27" />
              <div className="sdiv-28">
                <div className="sdiv-21 fs-6 ">Long term warranty</div>
              </div>
              <div className="sdiv-31" />
            </div>
          </div>
          <img
            loading="lazy"
            src={serviceImg}
            style={{marginLeft:'2.5rem',width:'38%'}}
          />
          <img
              loading="lazy"
              src={Img2}
              className="serviceimg-2"
            />
        </div>
        <div className="justify-content-between sdiv-33 w-100">
                  <div className="d-flex my-5 mx-5 w-50">
                    <img
                      loading="lazy"
                      src={service_section_2}
                      className="h-100 w-100"
                    />
                 </div>
              <div className="mx-2 my-5 col-5">
                <div className="sdiv-39">
                  <div className="fs-3 fw-bold sdiv-40">
                    We Provide Awesome Services For You
                  </div>
                  <div className="fs-5 mt-4 sdiv-41">
                    <q>Elevate Your Experience with Our Services – Your
                    Success, Our Priority!</q>
                  </div>
                  <div className="mt-5 sdiv-42">
                    <a href="https://wa.me/919686112338" style={{backgroundColor:'#005e8d'}}
                        className="chatwithusbutton" target='_blank'>Chat With Us</a>
                  </div>
                </div>
              </div>
        </div>
        <div className="sdiv-43">What We Provide</div>
        <div className="d-flex flex-column">
        <div className="d-flex justify-content-center mx-auto sdiv-44">
          <div className="sdiv-45">
            <div className="scolumn">
              <div className="sdiv-46">
                <div className="sdiv-47">IT Services</div>
                <div className="fa-1x mb-5 sdiv-48">
                  Proactive monitoring, maintenance, and support for your IT
                  infrastructure, ensuring optimal performance and minimal
                  downtime..
                </div>
                
              </div>
            </div>
            <div className="scolumn-3">
              <div className="sdiv-51">
                <div className="sdiv-52">Software Development</div>
                <div className="fa-1x mb-5 sdiv-48">
                  Custom software development for web and mobile applications,
                  tailored to your unique requirements.
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mx-auto  sdiv-56">
          <div className="sdiv-57">
            <div className="scolumn">
              <div className="sdiv-58">
                <div className="sdiv-59">Web Design and Development</div>
                <div className="fa-1x mb-5 sdiv-48">
                  Build and optimize user-friendly websites that drive
                  conversions and enhance user experience.
                </div>
                
              </div>
            </div>
            <div className="scolumn-3">
              <div className="sdiv-63">
                <div className="sdiv-64">Social Media Marketing</div>
                <div className="fa-1x mb-5 sdiv-48">
                  Engage your audience and build brand awareness through
                  strategic social media campaigns.
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mx-auto sdiv-68">
          <div className="sdiv-69">
            <div className="scolumn">
              <div className="sdiv-70">
                <div className="sdiv-71">Search Engine Optimization</div>
                <div className="fa-1x mb-5 sdiv-48">
                  Improve your online visibility and organic search rankings to
                  attract more website traffic.
                </div>
                
              </div>
            </div>
            <div className="scolumn-3">
              <div className="sdiv-63">
                <div className="sdiv-76">Pay-Per-Click Advertising</div>
                <div className="fa-1x mb-5 sdiv-48">
                  Create targeted ad campaigns on search engines and social
                  media platforms for instant visibility.
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
export default ServicePage;



