import * as React from "react";
import './homePage.css';
import Carousel from "@itseasy21/react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import whychooseus from '../assets/whyChoseUs.png';
import landingimg from '../assets/Frame 11.png'

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


  
  if(document.getElementsByClassName('rec-arrow')[0]){
    document.getElementsByClassName('rec-arrow')[0].innerText = '';
    document.getElementsByClassName('rec-arrow-right')[0].innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
    document.getElementsByClassName('rec-arrow-left')[0].innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
  }

  return (
    <div className="sections-container">
      {/*#############--------------  section 1 --------------#################*/}
        <section className="landing-animation-section mb-4">
          <div className="designers-developers-animation-container">
            <div className="animation-svg-container">
              <div className="homediv-13">
                      <div className="homediv-14">We Are</div>
                      <div className="container">
                          <div className="homediv-15" style={{color:"#0A161C"}}>Creator's </div>
                          <div className="homediv-15">Designer's </div>
                          <div className="homediv-15" style={{color:"#042636"}}>Developer's </div>     
                      </div>
              </div>
              <div className="homediv-16 mt-4">
                      Your trusted partner in IT services and solutions. With a
                      passion for technology and a commitment to excellence, we
                      have been providing cutting-edge IT services to business.
              </div>
                  <button className='get-started-button mt-5' onClick={()=> navigate('/services')}>Get Started</button>
                  <svg className="landing-page-svg" xmlns="http://www.w3.org/2000/svg" width="700" height="350" viewBox="0 0 648 351" fill="none">
                    <path d="M645.037 313.312C609.618 194.299 421.877 198.554 317.45 165.798C172.142 113.114 39.761 -11.1163 -122.892 1.82229C-432.179 26.43 -433.167 379.522 -303.247 502.826C-80.2943 714.425 254.198 644.833 514.662 521.675C655.612 455.024 652.822 358.252 645.037 313.312Z" fill="#005E8D"/>
                  </svg>
            </div>
          </div>
          <div className="landing-page-img-container">
            <img className="landingimg" src={landingimg} alt="" />
          </div>
        </section>

        {/*#############--------------  section 2 --------------#################*/}
        <section className="why-choose-us-section d-flex justify-content-between">
          <div className="why-choose-img-container w-50">
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
          <div className="why-choose-us-text-container d-flex flex-column my-4 mx-3 w-50">
            <h3 className="mt-4">Why Choose Us?</h3>
            <ul className="fs-5 my-2">
              <li>We Design product requirements from clients considering time and budget Constraints, Design modularity and product robustness.</li>
              <li>We stick to the coding guidelines, adopting the programming language as the client needs.</li>
              <li>We track defects and are debugged and retested with quality standards.</li>
              <li>We are providing reliable and user friendly services, maintenance, updating, repairs and fix issues in software.</li>
              <li>We prioritise your satisfaction and work closely with you to understand your specific needs, ensuring that our services are tailored to your requirements.</li>
            </ul>
          </div>
        </section>
        {/*#############-------------- section 3 --------------#################*/}
        <section className="what-client-says-section">
          <div className="what-client-says-animation">
              <h2>What Client Says</h2>
              <div>
                <Carousel  itemsToShow={2} showArrows={true} pagination={false} >
                  {data.map((item, i) => (
                    <div>
                      <div className='testimonial-card-container'>
                      <span className='adiv-46' style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400, width:45}}>
                        <b>{item.head} </b>
                      <br />
                      <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400}}/>
                        {item.description}
                      </span>
                      </div>
                      <div className='testimonial-name-position'>
                      <div className='mt-2 fw-bold' style={{ fontFamily: 'Calibri, sans-serif',fontSize:'1.2rem'}}>
                      {item.name} </div>
                      <div className='mt-3' style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400}}/>
                        {item.designation}
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
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
  


