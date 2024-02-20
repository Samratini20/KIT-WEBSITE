import * as React from "react";
import serviceImg from '../assets/serviceImg.png'
import Img1 from '../assets/servicesImg_1.jpg';
import Img2 from '../assets/servicesImg_2.jpg';
import service_section_2 from '../assets/service_section_2.png'
import './servicePage.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ServicePage(props) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-white container-fluid overflow-hidden sdiv">
        
        <img
            loading="lazy"
            src={Img1}
            className="serviceimg-1"
          />
        
        
        <div className=" sdiv-11 mb-5 row">
          <div className="col sdiv-12">
            <div className="sdiv-13">
              <div className="sdiv-17 lh-sm ">Powerful Solution For Your Business</div>
            </div>
                <div className="align-content-center fs-5 mt-5" style={{Height:2}}>
                <span className="fs-5 my-3">We’re your research and go to organisations.</span><br/>
                <span className="fs-5 my-4">We do our best to provide service in a timely manner so that you’re on track to meeting your
                business goals.</span>
            </div>
          </div>

          <div className="col z-3 adj">

          <img
          className="w-100 adj"
            loading="lazy"
            src={serviceImg}
            // style={{marginLeft:'2.5rem',width:'38%'}}
          />
          </div>

          

          <img
        
        loading="lazy"
        src={Img2}
        className="serviceimg-2 z-0"
        />
        
        </div>
        <div className="gap-sm-5 row sdiv-33">
                  <div className="col my-5 adj1">
                    <img
                      loading="lazy"
                      src={service_section_2}
                      className="h-100 w-100 adj1"
                    />
                 </div>
              <div className="mx-2 col">
                <div >
                  <div className="fs-3 fw-bold mt-5 sdiv-40">
                    We Provide Awesome Services For You
                  </div>
                  <div className="fs-5 mt-4 sdiv-41">
                    <q>Elevate Your Experience with Our Services – Your
                    Success, Our Priority!</q>
                  </div>
                  <div className="mb-5 mt-5 w-100">
                  <Link style={{backgroundColor:'#005e8d'}} className='chatwithusbutton' to="/contact" onClick={()=>{window.scrollTo(0,0)}}>Chat With Us</Link>
                  </div>
                </div>
              </div>
        </div>
        <div className="sdiv-43">What We Provide</div>
        <div className="container-fluid">
        <div className="d-flex justify-content-center mx-auto sdiv-44">
          <div className="sdiv-45">
            <div className="scolumn">
              <div className="sdiv-46">
                <div className="sdiv-47 lh-sm">IT Services</div>
                <div className="fa-1x mb-5 sdiv-48">
                  Proactive monitoring, maintenance, and support for your IT
                  infrastructure, ensuring optimal performance and minimal
                  downtime..
                </div>
                
              </div>
            </div>
            <div className="scolumn-3">
              <div className="sdiv-51">
                <div className="sdiv-52 lh-sm">Software Development</div>
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
                <div className="sdiv-59 lh-sm">Web Design and Development</div>
                <div className="fa-1x mb-5 sdiv-48">
                  Build and optimize user-friendly websites that drive
                  conversions and enhance user experience.
                </div>
                
              </div>
            </div>
            <div className="scolumn-3">
              <div className="sdiv-63">
                <div className="sdiv-64 lh-sm">Social Media Marketing</div>
                <div className="fa-1x mb-5 sdiv-48">
                  Engage your audience and build brand awareness through
                  strategic social media campaigns.
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mx-auto sdiv-68">
          <div className="mb-5 sdiv-69">
            <div className="scolumn">
              <div className="sdiv-70">
                <div className="sdiv-71 lh-sm">Search Engine Optimization</div>
                <div className="fa-1x mb-5 sdiv-48">
                  Improve your on visibility and organic search rankings to
                  attract more website traffic.
                </div>
                
              </div>
            </div>
            <div className="scolumn-3">
              <div className="sdiv-63">
                <div className="sdiv-76 lh-sm">Pay-Per-Click Advertising</div>
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



