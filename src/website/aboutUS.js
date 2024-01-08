import React, { useState } from 'react';
import './aboutUs.css';
import aboutusImg_1 from '../assets/aboutusImg_1.jpg';
import aboutusImg_2 from '../assets/aboutusImg_22.JPG';
//import Carousel from 'framer-motion-carousel'
import { counter } from "@fortawesome/fontawesome-svg-core";
import aboutusImg_3 from '../assets/aboutusImg_3.jpg'
import { useNavigate } from "react-router-dom";
// import Carousel from 'react-elastic-carousel'
import Carousel from "@itseasy21/react-elastic-carousel";


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
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  const navigate = useNavigate();
  return (
    <>
      <div className="adiv">
        {/* <div className="div-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa336cc3b2cc0921c60f3152c335da018b3287d17e708a024e77da5d0e1d94ce?apiKey=9d6521b3bd494d48816871a061465c45&"
            className="img"
          />
          <div className="div-3">
            <div className="div-4">Home</div>
            <div className="div-5">About Us</div>
            <div className="div-6">Services</div>
            <div className="div-7">Blog</div>
            <div className="div-8">Contact Us</div>
          </div>
        </div> */}
        <div className="diva-1">
          <div className="diva-2">
          <img
            loading="lazy"
            src={aboutusImg_1}
            className="aboutusImg-1"
          />
          </div>
          <div className="diva-3">
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
            <div className="acolumn">
              <div className="adiv-11">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ba188ee910654ea0119f304669a81eb1653777e56bcb137f84377687af6d00d4?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba188ee910654ea0119f304669a81eb1653777e56bcb137f84377687af6d00d4?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba188ee910654ea0119f304669a81eb1653777e56bcb137f84377687af6d00d4?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba188ee910654ea0119f304669a81eb1653777e56bcb137f84377687af6d00d4?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba188ee910654ea0119f304669a81eb1653777e56bcb137f84377687af6d00d4?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba188ee910654ea0119f304669a81eb1653777e56bcb137f84377687af6d00d4?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba188ee910654ea0119f304669a81eb1653777e56bcb137f84377687af6d00d4?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba188ee910654ea0119f304669a81eb1653777e56bcb137f84377687af6d00d4?apiKey=9d6521b3bd494d48816871a061465c45&"
                  className="aimg-2"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4def1bf277fb08a4e6ca75c3b51f7aebc9d371dd2031953407f7d2c67f34a3ff?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4def1bf277fb08a4e6ca75c3b51f7aebc9d371dd2031953407f7d2c67f34a3ff?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4def1bf277fb08a4e6ca75c3b51f7aebc9d371dd2031953407f7d2c67f34a3ff?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4def1bf277fb08a4e6ca75c3b51f7aebc9d371dd2031953407f7d2c67f34a3ff?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4def1bf277fb08a4e6ca75c3b51f7aebc9d371dd2031953407f7d2c67f34a3ff?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4def1bf277fb08a4e6ca75c3b51f7aebc9d371dd2031953407f7d2c67f34a3ff?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4def1bf277fb08a4e6ca75c3b51f7aebc9d371dd2031953407f7d2c67f34a3ff?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4def1bf277fb08a4e6ca75c3b51f7aebc9d371dd2031953407f7d2c67f34a3ff?apiKey=9d6521b3bd494d48816871a061465c45&"
                  className="aimg-3"
                />
              </div>
            </div>
            <div className="acolumn-2">
              <div className="adiv-12">
                <div className="adiv-13">
                  <div className="acolumn-3">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5bb8a664f5386614622a386791b86c42674c8c92754f460da6222f6200be5106?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb8a664f5386614622a386791b86c42674c8c92754f460da6222f6200be5106?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb8a664f5386614622a386791b86c42674c8c92754f460da6222f6200be5106?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb8a664f5386614622a386791b86c42674c8c92754f460da6222f6200be5106?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb8a664f5386614622a386791b86c42674c8c92754f460da6222f6200be5106?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb8a664f5386614622a386791b86c42674c8c92754f460da6222f6200be5106?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb8a664f5386614622a386791b86c42674c8c92754f460da6222f6200be5106?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb8a664f5386614622a386791b86c42674c8c92754f460da6222f6200be5106?apiKey=9d6521b3bd494d48816871a061465c45&"
                      className="aimg-4"
                    />
                  </div>
                  <div className="acolumn-4">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8bedf2309a54c1062a11b1cf577ad0a04846a2f0cf8e7dbaf8b60497dd255e2c?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bedf2309a54c1062a11b1cf577ad0a04846a2f0cf8e7dbaf8b60497dd255e2c?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bedf2309a54c1062a11b1cf577ad0a04846a2f0cf8e7dbaf8b60497dd255e2c?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bedf2309a54c1062a11b1cf577ad0a04846a2f0cf8e7dbaf8b60497dd255e2c?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bedf2309a54c1062a11b1cf577ad0a04846a2f0cf8e7dbaf8b60497dd255e2c?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bedf2309a54c1062a11b1cf577ad0a04846a2f0cf8e7dbaf8b60497dd255e2c?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bedf2309a54c1062a11b1cf577ad0a04846a2f0cf8e7dbaf8b60497dd255e2c?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bedf2309a54c1062a11b1cf577ad0a04846a2f0cf8e7dbaf8b60497dd255e2c?apiKey=9d6521b3bd494d48816871a061465c45&"
                      className="aimg-5"
                    />
                  </div>
                  <div className="acolumn-5">
                    <div className="adiv-14">
                      <div className="adiv-15">
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
                        <div className="adiv-17">
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
            </div>
          </div>
        </div>
        <div className="adiv-25">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3ee81f025b53e38d435e7cb01a9e8dd80961c85e92d3bfa5cc0de709a658395?apiKey=9d6521b3bd494d48816871a061465c45&"
            className="img-10"
          />
          <div className="adiv-26">
            <div className="adiv-27">
              <div className="adiv-28" />
              <div className="adiv-29">Websites Designed</div>
            </div>
            <div className="adiv-30">
              <div className="adiv-31">
                <div className="adiv-32" />
                <div className="adiv-33">Apps Developed</div>
              </div>
              <div className="adiv-34">
                <div className="adiv-35" />
                <div className="adiv-36">Happy Clients</div>
              </div>
              <div className="adiv-37">
                <div className="adiv-38" />
                <div className="adiv-39">Team Members</div>
              </div>
            </div>
          </div>
        </div>
        <div className="vision">
          <div className="diva-3">
            <div className="aspan-1">
              <b>Our Vision</b>
              <br />
            </div>
            <div className="aspan-1">
              Over 25 Years of Expertise: Our seasoned team brings unparalleled experience to every project, ensuring excellence and reliability unparalleled <br/>
              experience to every project, ensuring excellence and reliability unparalleled experience to every project, ensuring excellence and reliability <br/>
              unparalleled experience to every project, ensuring excellence and reliability unparalleled experience to every project, ensuring excellence and<br/>
              reliability unparalleled experience to every project, ensuring excellence and reliability. <br />
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="diva-3">
            <div className="aspan-1">
              <b>Our Mission</b>
              <br />
            </div>
            <div className="aspan-1">
              Over 25 Years of Expertise: Our seasoned team brings unparalleled experience to every project, ensuring excellence and reliability unparalleled <br/>
              experience to every project, ensuring excellence and reliability unparalleled experience to every project, ensuring excellence and reliability <br/>
              unparalleled experience to every project, ensuring excellence and reliability unparalleled experience to every project, ensuring excellence and<br/>
              reliability unparalleled experience to every project, ensuring excellence and reliability. <br />
            </div>
          </div>
        </div>
        <div className="diva-4">
          <div className="diva-5"/>
          <img
            loading="lazy"
            src={aboutusImg_2}
            className="aboutusImg-2"
          />
        </div>
        <div className="adiv-40">
          <div className="adiv-41">Testimonials</div>
          <div className="adiv-42" />
          <div className="adiv-43">What Clients Says</div>
          <div className="adiv-44">
            <div className="adiv-45">
              <div className="acolumn-6">
                <div className="">
                  {/* <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                    &quot;Design Rank Impress&quot;
                    <br />
                  </span>
                  <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400}}>
                    We prioritize your satisfaction and work closely with you to
                    understand your specific needs, ensuring that our services
                    are tailored to your requirements.
                  </span> */}
                  <Carousel  itemsToShow={2} showArrows={true} pagination={false} >
                  {data.map((item, i) => (
                    <>
                      <span className='adiv-46' style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400, width:45}}>
                        <b>{item.head} </b>
                      <br />
                      <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400}}/>
                        {item.description}
                      </span>
                        
                    </>
                  ))}
                </Carousel>
                </div>
              </div>
              {/* <div className="acolumn-7">
                <div className="adiv-47">
                  <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                    &quot;Soar with SEO&quot;
                    <br />
                  </span>
                  <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400}}>
                    We prioritize your satisfaction and work closely with you to
                    understand your specific needs, ensuring that our services
                    are tailored to your requirements.
                  </span>
                </div>
              </div> */}
            </div>
          
          <div className="adiv-48">
            <div className="adiv-49">
              <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                Prabhakar Rai
              </span>
              <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400}}>
                General Manager
              </span>
            </div>
            <div className="adiv-50">
              <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                Shirish Yadav
              </span>
              <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400}}>
                AGM
              </span>
            </div>
          </div>
          </div>
        </div>
        <div className="diva-6">
          <div className="diva-7">
            <b>FaQ's</b><br />
            <div className="diva-8">
              <div className="faqdiv-1">
                <div className='hideshow'>
                <button onClick={toggleVisibility}>
                  {isVisible ? '-' : '+'} 
                  {/* {isVisible ? 'Hide' : 'Show'} */}
                </button>
                <p>What services does your IT company provide?</p>
                </div>
                {isVisible && (
                  <div>
                  {/* Your content goes here */}
                  <p>Over 25 Years of Expertise: Our seasoned team brings unparalleled experience to every project, ensuring excellence and reliability<br /> 
                        unparalleled experience to every project, ensuring excellence and reliability unparalleled experience to every projec
                  </p>
                  </div>
                )}
              </div>
              <div className="faqdiv-2">
                <div className='hideshow'>
                  <button onClick={toggleVisibility}>
                    {isVisible ? '-' : '+'} 
                    {/* {isVisible ? 'Hide' : 'Show'} */}
                  </button>
                  <p>What technologies do you specialize in?</p>
                </div>
                {isVisible && (
                  <div>
                  {/* Your content goes here */}
                    <p>Over 25 Years of Expertise: Our seasoned team brings unparalleled experience to every project, ensuring excellence and reliability<br /> 
                        unparalleled experience to every project, ensuring excellence and reliability unparalleled experience to every projec
                    </p>
                  </div>
                )}
              </div>
              <div className="faqdiv-3">
                <div className='hideshow'>
                  <button onClick={toggleVisibility}>
                    {isVisible ? '-' : '+'} 
                    {/* {isVisible ? 'Hide' : 'Show'} */}
                  </button>
                  <p>How do you ensure data security and confidentiality?</p>
                </div>
                {isVisible && (
                  <div>
                  {/* Your content goes here */}
                    <p>Over 25 Years of Expertise: Our seasoned team brings unparalleled experience to every project, ensuring excellence and reliability<br /> 
                        unparalleled experience to every project, ensuring excellence and reliability unparalleled experience to every projec
                    </p>
                  </div>
                )}
              </div>
              <div className="faqdiv-4">
                <div className='hideshow'>
                  <button onClick={toggleVisibility}>
                    {isVisible ? '-' : '+'} 
                    {/* {isVisible ? 'Hide' : 'Show'} */}
                  </button>
                  <p>How can our business benefit from your IT services?</p>
                </div>
                {isVisible && (
                  <div>
                  {/* Your content goes here */}
                    <p>Over 25 Years of Expertise: Our seasoned team brings unparalleled experience to every project, ensuring excellence and reliability<br /> 
                        unparalleled experience to every project, ensuring excellence and reliability unparalleled experience to every projec
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="diva-9">
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
        {/* <div className="div-51">
          <div className="div-52">
            <div className="div-53">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&"
                className="img-11"
              />
              <div className="div-54">
                <div className="div-55">Quick Links</div>
                <div className="div-56">Home</div>
                <div className="div-57">About Us</div>
                <div className="div-58">Services</div>
                <div className="div-59">Blog</div>
                <div className="div-60">Contact Us</div>
              </div>
            </div>
            <div className="div-61">
              <div className="div-62">Company</div>
              <div className="div-63">Terms & Conditions</div>
              <div className="div-64">Privacy Policy</div>
            </div>
            <div className="div-65">
              <div className="div-66">Follow Us On</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c12524c05b2d7b873287193893b6fe636414e3eec024662c42694378013ecb71?apiKey=9d6521b3bd494d48816871a061465c45&"
                className="img-12"
              />
            </div>
            <div className="div-67">
              <div className="div-68">Newsletter</div>
              <div className="div-69">
                <div className="div-70">Email Address</div>
                <div className="div-71">Send</div>
              </div>
              <div className="div-72">
                Subscribe to our mailing list and get updates to your email
                inbox.
              </div>
            </div>
          </div>
          <div className="div-73">KIT Services © All Rights Reserved</div>
        </div> */}
      </div>
          </>
  );
}

export default Aboutus;

