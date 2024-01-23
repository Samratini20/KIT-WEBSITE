import * as React from "react";
import './homePage.css';
import Carousel from 'framer-motion-carousel'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import whychooseus from '../assets/whyChoseUs.png';
import whatclientsays from '../assets/what-client-says.jpg';

const data= [
  {
    id:'1',
    head:'"Design Rank Impress"',
    description:"We prioritize your satisfaction and work closely with you to understand your specific needs, ensuring that our services are tailored to your requirements.",
    name:"Prabhakar Rai",
    designation:"General Manager"
  },
  {
    id:'2',
    head:'"Soar with SEO"',
    description:"We prioritize your satisfaction and work closely with you to understand your specific needs, ensuring that our services are tailored to your requirements.",
    name:"Shirish Yadav",
    designation:"AGM"
  },
  {
    id:'3',
    head:'"Outdated to Outstanding"',
    description:"We prioritize your satisfaction and work closely with you to understand your specific needs, ensuring that our services are tailored to your requirements.",
    name:"Yash Singh",
    designation:"General Manager"
  },
  {
    id:'4',
    head:'"Engage, Boost, Succeed"',
    description:"We prioritize your satisfaction and work closely with you to understand your specific needs, ensuring that our services are tailored to your requirements.",
    name:"Ankit Shah",
    designation:"Head, Marketing and Sales"
  }
];
const data1=["1", "2", "3", "4"];
function HomePage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sections-container">
      {/*#############--------------  section 1 --------------#################*/}
        <section className="landing-animation-section">
        <div className="homediv-10">
            <div className="homecolumn">
              <div className="homediv-11">
                <div className="homediv-12">
                  <div className="homediv-13">
                    <div className="homediv-14">We Are </div>
                    <div className="container">
                    <div className="homediv-15" style={{color:"#0A161C"}}>Creator's </div>
                    <div className="homediv-15">Designer's </div>
                    <div className="homediv-15" style={{color:"#042636"}}>Developer's </div>     
                    </div>
                  </div>{" "}
                  <div className="homediv-16 mb-2">
                    Your trusted partner in IT services and solutions. With a
                    passion for technology and a commitment to excellence, we
                    have been providing cutting-edge IT services to business.
                  </div>
                </div>{" "}
                <div className="homediv-17">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1459f01c8e74237bd4d4c6a9a0aa5ee82a63110b4fad46fb2f7f1f33f8137d6b?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="homeimg-2"
                  />{" "}
                    <button className='homediv-18' onClick={()=> navigate('/services')}>Get Started</button>
                </div>  
              </div>
            </div>{" "}
            <div className="homecolumn-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/996e9de6b0b2ce32c7b1c4c12b95dee85cffd76d8e747562f95ef9de41998041?apiKey=9d6521b3bd494d48816871a061465c45&"
                
                className="homeimg-3"
              />
            </div>
          </div>
        </section>

        {/*#############--------------  section 2 --------------#################*/}
        <section className="why-choose-us-section">
          <div className="why-choose-img-container">
            <img loading="lazy" className="why-choose-us-img" src={whychooseus} alt="image"/>
            <span>
            <svg className="why-choose-us-svg" xmlns="http://www.w3.org/2000/svg" width="63" height="43" viewBox="0 0 63 43" fill="none">
                <path d="M2.44725 11.179C5.92067 4.32181 12.9545 0 20.6412 0H53.7356C61.6034 0 65.5559 9.50145 60.0094 15.0817L59.1802 15.9159C56.8164 18.2941 56.3669 21.9727 58.0886 24.8501C60.6366 29.1085 58.3072 34.6153 53.4768 35.7526L27.4992 41.869C17.2932 44.2719 6.80816 39.1473 2.43405 29.6183L2.10579 28.9032C-0.488284 23.252 -0.362558 16.7261 2.44725 11.179Z" fill="#3765B3"/>
            </svg>
            <div className="why-choose-us-dot1"></div>
            <div className="why-choose-us-dot2"></div>
            <div className="why-choose-us-dot3"></div>
            </span>
          </div>
          <div className="why-choose-us-text-container">
            <h3>Why Choose Us?</h3>
            <p>
                    Our team consists of highly skilled professionals with
                     extensive experience in the IT industry. We stay up-to-date
                     with the latest trends and technologies to provide you with
                     the best solutions.
                     <br />
                     <br />
                     We prioritize your satisfaction and work closely with you to
                     understand your specific needs, ensuring that our services
                     are tailored to your requirements.
            </p>
          </div>
        </section>
        {/*#############-------------- section 3 --------------#################*/}
        <section className="what-client-says-section">
          <div className="what-client-says-animation">
              <h2>What Client Says</h2>
              <div>
              <Carousel  renderArrowLeft={()=>null} renderArrowRight={()=>null} renderDots={()=>null}>
                 {data.map((item, i) => (
                   <>
                   <div  className="what-client-says-carousal">
                   <div className="what-client-says-carousal-text">
                   <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                     {item.head}
                   </span><br /> <br />
                   <span className="what-client-says-text-para" style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400}}>
                     {item.description} 
                   </span>
                   </div>
                   </div>
                    <br /> <br />
                    <div className="what-client-says-name-des-text">
                   <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                   {item.name}
                   </span>  <br />
                   <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400}}>
                   {item.designation}
                   </span>
                   </div>
                   </>
                 ))}
               </Carousel>
              </div>
          </div>
          <div className="what-client-says-img-container">
            <img loading="lazy" className="what-client-says-img" src={whatclientsays} alt="" />
          </div>
        </section>
        {/*#############--------------  section 4 --------------#################*/}
        <section className="ceo-founder-animation-section">
          <div className="ceo-founder-animation-container">
                <div className="ceo-founder-animation"></div>
          </div>
          <div className="ceo-founder-text">
                <div className="ceo-founder-names">
                   <p class="js-nametag">Sandeep Banvasi, CEO</p>
                   <p class="js-nametag">Aravind Kumar, Founder</p>
                </div>
                <div className="ceo-founder-testimonial mt-5 pt-5">
                   Our team consists of highly skilled professionals with
                   extensive experience in the IT industry. We stay up-to-date
                   with the latest trends and technologies to provide <br /> you with
                   the best solutions.
                   <br />
                   <br />
                   We prioritize your satisfaction and work closely with you to
                   understand your specific needs, ensuring that our services are
                   tailored to your requirements.
                 </div>
          </div>
        </section>
    </div>
  );
}

export default HomePage;
  


