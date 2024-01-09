import * as React from "react";
import './homePage.css';
import Carousel from 'framer-motion-carousel'
import { useNavigate } from "react-router-dom";
import sandeep from '../assets/sandeep.jpg'
import Header from "./header";


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
const data1=["1", "2", "3", "4"];
function HomePage(props) {
  const navigate = useNavigate();
  return (
    <>
    {/* <Header/> */}
      <div className="homediv">
        {/* <div className="div-2">
          <img
            loading="lazy"
            src={logo}
            //src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc78b94585d1d66f6e013b0a79c60104bd2d3f5caf27cd4a28777d9f50007507?apiKey=9d6521b3bd494d48816871a061465c45&"
            className="img"
            
          />
          <div className="div-3">
            <div className="div-4"><a href="/" className='home'>Home</a></div>
            <div className="div-5"><a href="/about" className='aboutUs'>About Us</a></div>
            <div className="div-6"><a href="/services" className='services'>Services</a></div>
            <div className="div-7"><a href="/blog" className='blog'>Blog</a></div>
            <div className="div-8"><a href="/contact" className='contactUs'>Contact Us</a></div>
          </div>
        </div> */}
        <div className="homediv-9">
          <div className="homediv-10">
            <div className="homecolumn">
              <div className="homediv-11">
                <div className="homediv-12">
                  <div className="homediv-13">
                    <div className="homediv-14">We Are </div>
                    <div className="container">
                    <div className="homediv-15" style={{color:"black"}}>Creators's </div>
                    <div className="homediv-15">Designer's </div>
                    <div className="homediv-15" style={{color:"black"}}>Developer's </div>
                  
                    </div>
                  </div>{" "}
                  <div className="homediv-16">
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
                  {/* <div className="homediv-18"> */}
                    <button className='homediv-18'color="inherit" onClick={()=> navigate('/services')}>Get Started</button>
                  {/* </div> */}
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
        </div>{" "}
        <div className="homediv-19">
          <div className="homediv-20">
            <div className="homediv-21">
              <div className="homecolumn-3">
                <div className="homediv-22">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a477e48fcf9e19dadb9dba6ddc5a9380df0687bc004df0abdd1b3a4aafeb4cfe?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a477e48fcf9e19dadb9dba6ddc5a9380df0687bc004df0abdd1b3a4aafeb4cfe?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a477e48fcf9e19dadb9dba6ddc5a9380df0687bc004df0abdd1b3a4aafeb4cfe?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a477e48fcf9e19dadb9dba6ddc5a9380df0687bc004df0abdd1b3a4aafeb4cfe?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a477e48fcf9e19dadb9dba6ddc5a9380df0687bc004df0abdd1b3a4aafeb4cfe?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a477e48fcf9e19dadb9dba6ddc5a9380df0687bc004df0abdd1b3a4aafeb4cfe?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a477e48fcf9e19dadb9dba6ddc5a9380df0687bc004df0abdd1b3a4aafeb4cfe?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a477e48fcf9e19dadb9dba6ddc5a9380df0687bc004df0abdd1b3a4aafeb4cfe?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="homeimg-4"
                  />{" "}
                  <div className="homediv-23" />
                </div>
              </div>{" "}
              <div className="homecolumn-4">
                <div className="homediv-24">
                  <div className="homediv-25">Why Choose Us?</div>{" "}
                  <div className="homediv-26">
                    Our team consists of highly skilled professionals with
                    extensive experience in the IT industry. We stay up-to-date
                    with the latest trends and technologies to provide you with
                    the best solutions.
                    <br />
                    <br />
                    We prioritize your satisfaction and work closely with you to
                    understand your specific needs, ensuring that our services
                    are tailored to your requirements.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="homediv-27">
          <div className="homediv-28">
            <div className="homecolumn-5">
              <div className="homediv-29">
                <div className="homediv-30">What Clients Says</div>{" "}
                <div className="homediv-31">
                <Carousel renderArrowLeft={()=>null} renderArrowRight={()=>null} renderDots={()=>null}>
      {data.map((item, i) => (
        <>
        <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
          {item.head}
        </span><br />
        <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400}}>
          {item.description}
        </span>
        </>
      ))}
    </Carousel>
                  {/* <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                    &quot;Design Rank Impress&quot;
                    <br />
                  </span>
                  <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400}}>
                    We prioritize your satisfaction and work closely with you to
                    understand your specific needs, ensuring that our services
                    are tailored to your requirements.
                  </span> */}
                </div>{" "}
                <div className="homediv-32">
                <Carousel renderArrowLeft={()=>null} renderArrowRight={()=>null} renderDots={()=>null}>
                {data.map((item, i) => (
                <>
                  <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 700}}>
                  {item.name}
                  </span><br/ >
                  <span style={{ fontFamily: 'Calibri, sans-serif',fontWeight: 400}}>
                  {item.designation}
                  </span>
                  </>
                  ))}
                  </Carousel>
                </div>
              </div>
            </div>{" "}
            <div className="homecolumn-6">
              <div className="homediv-33">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f936f8e8e1d6aaada9ea0b253bf21658e14469c0e18f00a592f1af95dcb2a925?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f936f8e8e1d6aaada9ea0b253bf21658e14469c0e18f00a592f1af95dcb2a925?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f936f8e8e1d6aaada9ea0b253bf21658e14469c0e18f00a592f1af95dcb2a925?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f936f8e8e1d6aaada9ea0b253bf21658e14469c0e18f00a592f1af95dcb2a925?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f936f8e8e1d6aaada9ea0b253bf21658e14469c0e18f00a592f1af95dcb2a925?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f936f8e8e1d6aaada9ea0b253bf21658e14469c0e18f00a592f1af95dcb2a925?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f936f8e8e1d6aaada9ea0b253bf21658e14469c0e18f00a592f1af95dcb2a925?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f936f8e8e1d6aaada9ea0b253bf21658e14469c0e18f00a592f1af95dcb2a925?apiKey=9d6521b3bd494d48816871a061465c45&"
                  className="homeimg-5"
                />{" "}
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8bc017eacd7f91797f6eacfde2a997f2634e64f5aa365e668aace01499e4686a?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc017eacd7f91797f6eacfde2a997f2634e64f5aa365e668aace01499e4686a?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc017eacd7f91797f6eacfde2a997f2634e64f5aa365e668aace01499e4686a?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc017eacd7f91797f6eacfde2a997f2634e64f5aa365e668aace01499e4686a?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc017eacd7f91797f6eacfde2a997f2634e64f5aa365e668aace01499e4686a?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc017eacd7f91797f6eacfde2a997f2634e64f5aa365e668aace01499e4686a?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc017eacd7f91797f6eacfde2a997f2634e64f5aa365e668aace01499e4686a?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc017eacd7f91797f6eacfde2a997f2634e64f5aa365e668aace01499e4686a?apiKey=9d6521b3bd494d48816871a061465c45&"
                  className="homeimg-6"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="homediv-34">
          <div className="homediv-35">
            <div className="homecolumn-7">
            {/* <img
            loading="lazy"
            src={sandeep}
            className="homeimg-7"
          /> */}
              {/* <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aadc1d509830739e95020b77184df8da17737721df103e1e3040007b920e2f7d?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aadc1d509830739e95020b77184df8da17737721df103e1e3040007b920e2f7d?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aadc1d509830739e95020b77184df8da17737721df103e1e3040007b920e2f7d?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aadc1d509830739e95020b77184df8da17737721df103e1e3040007b920e2f7d?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aadc1d509830739e95020b77184df8da17737721df103e1e3040007b920e2f7d?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aadc1d509830739e95020b77184df8da17737721df103e1e3040007b920e2f7d?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aadc1d509830739e95020b77184df8da17737721df103e1e3040007b920e2f7d?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aadc1d509830739e95020b77184df8da17737721df103e1e3040007b920e2f7d?apiKey=9d6521b3bd494d48816871a061465c45&"
                className="img-7"
                /> */}
            </div>{" "}
            <div className="homecolumn-8">
              <div className="homediv-36">
                <div className="homediv-37">Sandeep, CEO</div>{" "}
                <div className="homediv-38">
                  Our team consists of highly skilled professionals with
                  extensive experience in the IT industry. We stay up-to-date
                  with the latest trends and technologies to provide you with
                  the best solutions.
                  <br />
                  <br />
                  We prioritize your satisfaction and work closely with you to
                  understand your specific needs, ensuring that our services are
                  tailored to your requirements.
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        
      </div>
      </>
  );
}

export default HomePage;
  


