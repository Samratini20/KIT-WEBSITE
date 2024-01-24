import React, { useState, useEffect } from 'react';
import './aboutUs.css';
import aboutusImg_1 from '../assets/aboutusImg_1.jpg';
import aboutusImg_2 from '../assets/aboutusImg_2.png';
import aboutusImg_3 from '../assets/aboutusImg_3.jpg'
import { useNavigate } from "react-router-dom";

function Aboutus(props) {  
  const navigate = useNavigate();

  const [swap, setSwap] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSwap(prevSwap => !prevSwap);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

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
    <>
      <div className="about-us-container bg-white">
        <div className="d-flex diva-1 flex-column" style={{marginTop:"6.8rem"}}>
          <div className="diva-2 mx-auto">
          <img
            loading="lazy"
            src={aboutusImg_1}
            className="aboutusImg-1 "
          />
          </div>
          <div className="diva-3 mx-3 my-3 px-3 fs-5">
            <div className="my-2 py-2 px-4">
            Welcome to K.I.T Global Technologies Pvt Ltd, where innovation meets efficiency. 
            We're a dynamic software company dedicated to crafting cutting-edge solutions that empower businesses to thrive in the digital era.
              <br />
            </div>
            <div className="my-2 py-2 px-4">
            Our team of experts combines passion with expertise to deliver software that not only meets 
            but exceeds your expectations.Explore the future of technology with K.I.T Global Technologies Pvt Ltd.<br />
            </div>
            <div className="my-2 py-2 about-us-text">
            At K.I.T Global Technologies Pvt Ltd, we simplify complexity and elevate user experiences. 
            With a relentless commitment to quality, we specialise in creating bespoke software solutions tailored 
            to your unique needs. Whether you're aiming to streamline operations, enhance productivity, or stay 
            ahead of industry trends, we're your strategic partner in achieving success. Join us on a journey where
             innovation, reliability, and customer satisfaction converge.<br/><b className='d-flex justify-content-center mt-4'><em>"Your vision, our technology – let's build the future together".</em></b>
              <br />
            </div>
          </div>
        </div>
        <div className="adiv-9 mt-5">
          <div className="adiv-10">
          <div className='card-container'>
              <div className='cards card1'></div>
              <div className='cards card2'></div>
              <div className='cards card3'></div>
              <div className='cards card4 '></div>
          </div>
                  <div className="acolumn-5">
                    <div className="adiv-14">
                      <div className="d-flex flex-column m-5 w-75">
                          <span className='fs-3 fw-bold mb-3'>
                            We have teams with years of Experience.
                            <br />
                          </span>
                          <span className='fs-5 mb-2'>
                            Over the Years of Expertise: Our seasoned team brings
                            unparalleled experience to every project, ensuring
                            excellence and reliability
                            <br />
                          </span>
                        <div className="adiv-17 align-items-center d-flex mt-3">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b43fe2462f3f8d4433eb85ee52f5135db524dc29e4e1d84ef4e202094a715f33?apiKey=9d6521b3bd494d48816871a061465c45&"
                            className="aimg-6"
                          />
                          <div className="adiv-18">
                            Proven Expertise
                            <br />
                          </div>
                        </div>
                        <div className="adiv-19">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b15a45b8fafda85d0363576d3b4fe36e0cf07d868707a55cdef3a9dfd9d2bf?apiKey=9d6521b3bd494d48816871a061465c45&"
                            className="aimg-7"
                          />
                          <div className="adiv-18">Industry Insights</div>
                        </div>
                        <div className="adiv-21">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0fa82cd5b25aa478837e5bba1bb1d672cc0bdc45fd2913063f1c8326a650889?apiKey=9d6521b3bd494d48816871a061465c45&"
                            className="aimg-8"
                          />
                          <div className="adiv-18">Time-Tested Solutions</div>
                        </div>
                        <div className="adiv-23">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93294b95e6de4f19689ea42f60182fd895f42d77be139098ef9845648324f395?apiKey=9d6521b3bd494d48816871a061465c45&"
                            className="aimg-9"
                          />
                          <div className="adiv-18">Reliable Partner</div>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
        <div className="adiv-25">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3ee81f025b53e38d435e7cb01a9e8dd80961c85e92d3bfa5cc0de709a658395?apiKey=9d6521b3bd494d48816871a061465c45&"
            className="aimg-10"
          />
          <div className="adiv-26">
            <div className="adiv-27">
              <div className="adiv-28" data-aos="fade-up">100</div>
              <div className="adiv-29">Websites Designed</div>
            </div>
            <div className="adiv-30">
              <div className="adiv-31">
                <div className="adiv-32" data-aos="fade-up">100</div>
                <div className="adiv-33">Apps Developed</div>
              </div>
              <div className="adiv-34">
                <div className="adiv-35" data-aos="fade-up">100</div>
                <div className="adiv-36">Happy Clients</div>
              </div>
              <div className="adiv-37">
                <div className="adiv-38" data-aos="fade-up">100</div>
                <div className="adiv-39">Team Members</div>
              </div>
            </div>
          </div>
        </div>
        <div className="vision d-flex my-2">
          <div className="diva-3 mt-3 px-2 w-100">
            <div className="aspan-1 mb-2 fw-bold">
              <b>Our Vision</b>
            </div>
            <div className="aspan-1 mb-2">
            To be the leading force in shaping the future of information and technology, K.I.T Global Technologies 
            Pvt Ltd envisions a world where seamless connectivity, advanced analytics, and intelligent automation 
            redefine possibilities. We aspire to be at the forefront of technological innovation, creating solutions
             that not only address current challenges but also anticipate and shape the evolving needs of our clients.
              Through our commitment to sustainability, inclusivity, and excellence, we aim to be a catalyst for 
              positive transformations in the global digital ecosystem.
            </div>           
          </div>
          <div className="d-flex float-end">
            <img
            loading="lazy"
            src={aboutusImg_2}
            className="w-100 our-mission-img"
          />
            </div> 
        </div>
        <div className="mission d-flex">
          <div className="diva-3 my-3 px-2 w-100 flex-column">
            <div className="aspan-1 fw-bold mb-2">
              Our Mission
            </div>
            <div className="aspan-1 mb-2">
            At K.I.T Global Technologies Pvt Ltd, our mission is to empower individuals and organisations
             through innovative information and technology solutions. We are committed to delivering cutting-edge products
              and services that enhance efficiency, foster growth, and drive positive change in the digital landscape. 
              With a focus on integrity, collaboration, and continuous improvement, we strive to be a trusted partner in
               our clients' success.
            </div>
          </div>
        </div>        
        <div className="d-flex diva-6 w-100 d-none">
          <div className="diva-7  w-75">
            <h3 className='fa-2x fw-bold my-3'>FAQ's</h3>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item bg-transparent">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-tranparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What services does your IT company provide?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Over 25 Years of Expertise: Our seasoned team brings unparalleled experience to every project, ensuring excellence and reliability<br /> 
      unparalleled experience to every project, ensuring excellence and reliability unparalleled experience to every project
      </div>
    </div>
  </div>
  <div class="accordion-item bg-transparent">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What technologies do you specialize in?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Over 25 Years of Expertise: Our seasoned team brings unparalleled experience to every project, ensuring excellence and reliability<br /> 
      unparalleled experience to every project, ensuring excellence and reliability unparalleled experience to every project
      </div>
    </div>
  </div>
  <div class="accordion-item bg-transparent">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How do you ensure data security and confidentiality?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Over 25 Years of Expertise: Our seasoned team brings unparalleled experience to every project, ensuring excellence and reliability<br /> 
      unparalleled experience to every project, ensuring excellence and reliability unparalleled experience to every project
      </div>
    </div>
  </div>
  <div class="accordion-item bg-transparent">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      How can our business benefit from your IT services?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Over 25 Years of Expertise: Our seasoned team brings unparalleled experience to every project, ensuring excellence and reliability<br /> 
      unparalleled experience to every project, ensuring excellence and reliability unparalleled experience to every project
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
        <div className="diva-9 my-4">
          <div className="diva-10">
          <img
            loading="lazy"
            src={aboutusImg_3}
            className="aboutusImg-3"
          />
          </div>
          <div className="diva-11">
            <div className="diva-12">
             <b className='mb-1 d-flex fw-bold fs-4'>Discover What's New: Our Recent <br />News and Updates</b>
              Dive into the latest buzz surrounding KIT global technologies as we share <br />
              noteworthy news and updates that showcase our ongoing<br />
              commitment to innovation and excellence.<br />
              <button className='aboutdiv-button d-none'color="inherit" onClick={()=> navigate('/blog')}>Learn More</button>  
            </div>
          </div>
        </div>
      </div>
          </>
  );
}

export default Aboutus;

