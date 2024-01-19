import React, { useState, useEffect } from 'react';
import './aboutUs.css';
import aboutusImg_1 from '../assets/aboutusImg_1.jpg';
import aboutusImg_2 from '../assets/aboutusImg_2.png';
import aboutusImg_3 from '../assets/aboutusImg_3.jpg'
import { useNavigate } from "react-router-dom";


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
    head:'"Engage,Boost,Succeed"',
    description:"We prioritize your satisfaction and work closely with you to understand your specific needs, ensuring that our services are tailored to your requirements.",
    name:"Ankit Shah",
    designation:"Head, Marketing and Sales"
  }
];

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
          <div className="diva-2">
          <img
            loading="lazy"
            src={aboutusImg_1}
            className="aboutusImg-1"
          />
          </div>
          <div className="diva-3 mx-4 my-3 px-2 w-100" style={{lineHeight:"2rem"}}>
            <div className="aspan-1">
              We are a general insurance company. Now, before those words conjure images of beige walls and bleak souls in your head, let us tell you we are vibrant <br />
              and vivacious, and were founded to break that drab mould you were about to cast us in.
              <br />
            </div>
            <div className="aspan-1">
              We started in 2016 as India’s first digital insurer, and are currently the fastest growing insurance company in the country. In a span of three years we have<br /> 
              revved up insurance with technology and given it a snazzy makeover—we’ve taken it online, wiped out much of the paperwork associated with it, created<br /> 
              products that are a cut above the ho-hum, and sold them to over 50 million unique customers.<br />
            </div>
            <div className="aspan-1">
              All this jazzing up has been brought about by our team that is obsessed with making insurance effortless. This team has grown from a small huddle of 6 <br />
              when we started, to a clan of more than 400 now. And this eclectic clan—comprising everyone from coders who double up as comics to finance whizzes <br />
              who slay at karaokes—is responsible for other great feats too.
              <br />
            </div>
          </div>
        </div>
        <div className="adiv-9">
          <div className="adiv-10">
          <div className={`card-container ${swap ? 'swap' : ''}`}>
        <div className={`cards card1 ${swap ? 'swap' : ''}`}></div>
        <div className={`cards card2 ${swap ? 'swap' : ''}`}></div>
        <div className={`cards card3 ${swap ? 'swap' : ''}`}></div>
        <div className={`cards card4 ${swap ? 'swap' : ''}`}></div>
      </div>
                  <div className="acolumn-5">
                    <div className="adiv-14">
                      <div className="adiv-15 w-auto">
                        <div className="adiv-16">
                          <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                            We have 25+ years of experience Team.
                            <br />
                          </span>
                          <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400}}>
                            Over 25 Years of Expertise: Our seasoned team brings
                            unparalleled experience to every project, ensuring
                            excellence and reliability
                            <br />
                          </span>
                        </div>
                        <div className="adiv-17 w-auto">
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
                          <div className="adiv-20">Industry Insights</div>
                        </div>
                        <div className="adiv-21">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0fa82cd5b25aa478837e5bba1bb1d672cc0bdc45fd2913063f1c8326a650889?apiKey=9d6521b3bd494d48816871a061465c45&"
                            className="aimg-8"
                          />
                          <div className="adiv-22">Time-Tested Solutions</div>
                        </div>
                        <div className="adiv-23">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93294b95e6de4f19689ea42f60182fd895f42d77be139098ef9845648324f395?apiKey=9d6521b3bd494d48816871a061465c45&"
                            className="aimg-9"
                          />
                          <div className="adiv-24">Reliable Partner</div>
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
        <div className="vision d-flex">
          <div className="diva-3 mx-4 my-3 px-2 w-100">
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
            <div className="d-flex diva-4 float-end">
            <img
            loading="lazy"
            src={aboutusImg_2}
            className="w-100"
          />
            </div>            
          </div>
        </div>
        <div className="mission d-flex">
          <div className="diva-3 mx-4 my-3 px-2 w-100 flex-column">
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
        <div className="diva-6">
          <div className="diva-7">
            <br /><h3>FAQ's</h3><br />
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
             <b>Discover What's New: Our Recent <br />News and Updates</b><br />
              Dive into the latest buzz surrounding KIT Services as we share <br />
              noteworthy news and updates that showcase our ongoing<br />
              commitment to innovation and excellence.<br />
              <button className='aboutdiv-button'color="inherit" onClick={()=> navigate('/blog')}>Learn More</button>  
            </div>
          </div>
        </div>
      </div>
          </>
  );
}

export default Aboutus;

