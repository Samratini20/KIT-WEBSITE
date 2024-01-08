import * as React from "react";
import './homePage.css';
import Carousel from 'framer-motion-carousel'
import { useNavigate } from "react-router-dom";
import sandeep from '../assets/sandeep.jpg'


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
            <img
            loading="lazy"
            src={sandeep}
            className="homeimg-7"
          />
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
      {/* <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          padding-top: 12px;
          flex-direction: column;
        }
        .div-2 {
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1259px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .img {
          aspect-ratio: 0.88;
          object-fit: contain;
          object-position: center;
          width: 58px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-3 {
          align-self: center;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin: auto 0;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-4 {
          color: #14b1ff;
          align-self: start;
          white-space: nowrap;
          font: 700 18px Calibri, sans-serif;
        }
        @media (max-width: 991px) {
          .div-4 {
            white-space: initial;
          }
        }
        .div-5 {
          color: var(--Text, #292929);
          align-self: start;
          font: 400 18px Calibri, sans-serif;
        }
        .div-6 {
          color: var(--Text, #292929);
          align-self: start;
          font: 400 18px Calibri, sans-serif;
        }
        .div-7 {
          color: var(--Text, #292929);
          align-self: stretch;
          font: 400 18px Calibri, sans-serif;
        }
        .div-8 {
          color: var(--Text, #292929);
          align-self: start;
          white-space: nowrap;
          font: 400 18px Calibri, sans-serif;
        }
        @media (max-width: 991px) {
          .div-8 {
            white-space: initial;
          }
        }
        .div-9 {
          align-self: stretch;
          width: 100%;
          padding-top: 50px;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
            padding-right: 20px;
          }
        }
        .div-10 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-10 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 54%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-11 {
          display: flex;
          margin-top: 153px;
          flex-grow: 1;
          flex-direction: column;
          align-items: end;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-12 {
          display: flex;
          margin-right: 53px;
          width: 446px;
          max-width: 100%;
          flex-direction: column;
          align-items: start;
        }
        @media (max-width: 991px) {
          .div-12 {
            margin-right: 10px;
          }
        }
        .div-13 {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .div-14 {
          color: var(--Text, #292929);
          white-space: nowrap;
          margin: auto 0;
          font: 700 19px/20px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            white-space: initial;
          }
        }
        .div-15 {
          color: var(--Section-1, #005e8d);
          align-self: stretch;
          white-space: nowrap;
          font: 700 30px/20px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-15 {
            white-space: initial;
          }
        }
        .div-16 {
          color: var(--Text, #292929);
          letter-spacing: 0.36px;
          align-self: stretch;
          margin-top: 33px;
          font: 400 12px/25px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-16 {
            max-width: 100%;
          }
        }
        .div-17 {
          disply: flex;
          flex-direction: column;
          fill: var(--Section-1, #005e8d);
          overflow: hidden;
          align-self: stretch;
          position: relative;
          display: flex;
          min-height: 369px;
          margin-top: 33px;
          width: 100%;
          align-items: center;
          padding: 12px 60px 50px;
        }
        @media (max-width: 991px) {
          .div-17 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .img-2 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
          
        }
      
        .div-18 {
          position: relative;
          color: var(--Background, #fff);
          letter-spacing: 0.36px;
          white-space: nowrap;
          border-radius: 19px;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: var(--Section-1, #005e8d);
          margin-bottom: 209px;
          justify-content: center;
          padding: 13px 54px 13px 22px;
          font: 700 12px/25px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-18 {
            white-space: initial;
            margin-bottom: 40px;
            padding: 0 20px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 46%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .img-3 {
          aspect-ratio: 1.19;
          object-fit: contain;
          object-position: center;
          width: 100%;
          justify-content: flex-end;
          align-items: flex-start;
          overflow: hidden;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .img-3 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-19 {
          background-color: #fff;
          align-self: stretch;
          display: flex;
          margin-top: 19px;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 43px 60px;
        }
        @media (max-width: 991px) {
          .div-19 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-20 {
          margin-top: 22px;
          width: 100%;
          max-width: 1181px;
        }
        @media (max-width: 991px) {
          .div-20 {
            max-width: 100%;
          }
        }
        .div-21 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-21 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 57%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-22 {
          disply: flex;
          flex-direction: column;
          fill: url(<path-to-image>), lightgray 50% / cover no-repeat;
          overflow: hidden;
          position: relative;
          display: flex;
          min-height: 335px;
          flex-grow: 1;
          align-items: end;
          padding: 50px 0 13px 60px;
        }
        @media (max-width: 991px) {
          .div-22 {
            max-width: 100%;
            margin-top: 40px;
            padding-left: 20px;
          }
        }
        .img-4 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-23 {
          position: relative;
          border-radius: 50%;
          display: flex;
          margin-top: 254px;
          width: 17px;
          height: 18px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-23 {
            margin-top: 40px;
          }
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 43%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-24 {
          display: flex;
          margin-top: 27px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-24 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-25 {
          color: var(--Text, #292929);
          letter-spacing: 0.9px;
          white-space: nowrap;
          font: 700 30px/25px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-25 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .div-26 {
          color: var(--Text, #292929);
          letter-spacing: 0.36px;
          margin-top: 49px;
          font: 400 12px/30px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-26 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-27 {
          background-color: var(--Section-3, #f5f5f5);
          align-self: stretch;
          margin-top: 63px;
          width: 100%;
          padding-left: 80px;
        }
        @media (max-width: 991px) {
          .div-27 {
            max-width: 100%;
            padding-left: 20px;
            margin-top: 40px;
          }
        }
        .div-28 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-28 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 44%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .div-29 {
          display: flex;
          flex-direction: column;
          align-items: start;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-29 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-30 {
          color: var(--Text, #292929);
          letter-spacing: 0.9px;
          align-self: stretch;
          white-space: nowrap;
          font: 700 30px/25px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-30 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .div-31 {
          color: var(--Text, #292929);
          letter-spacing: 0.36px;
          border: 0.5px solid rgba(41, 41, 41, 0.04);
          box-shadow: 4px 4px 20px 2px rgba(0, 0, 0, 0.1);
          align-self: stretch;
          margin-top: 62px;
          justify-content: center;
          padding: 22px 24px;
          font: 400 12px/30px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-31 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-32 {
          color: var(--Text, #292929);
          letter-spacing: 0.36px;
          margin: 19px 0 0 50px;
          font: 400 12px/30px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-32 {
            margin-left: 10px;
          }
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 56%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-6 {
            width: 100%;
          }
        }
        .div-33 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          display: flex;
          min-height: 442px;
          flex-grow: 1;
          align-items: start;
          padding: 14px 60px 50px 25px;
        }
        @media (max-width: 991px) {
          .div-33 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .img-5 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .img-6 {
          aspect-ratio: 1.05;
          object-fit: contain;
          object-position: center;
          width: 379px;
          fill: #b1b2c2;
          filter: blur(5px);
          overflow: hidden;
          margin-bottom: 18px;
          max-width: 100%;
        }
        .div-34 {
          align-self: center;
          margin-top: 138px;
          width: 100%;
          max-width: 1136px;
        }
        @media (max-width: 991px) {
          .div-34 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-35 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-35 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-7 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 55%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-7 {
            width: 100%;
          }
        }
        .img-7 {
          aspect-ratio: 1.33;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-7 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .column-8 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 45%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-8 {
            width: 100%;
          }
        }
        .div-36 {
          display: flex;
          flex-direction: column;
          margin: auto 0;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-36 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-37 {
          color: var(--Text, #292929);
          letter-spacing: 0.9px;
          white-space: nowrap;
          font: 700 30px/25px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-37 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .div-38 {
          color: var(--Text, #292929);
          letter-spacing: 0.36px;
          margin-top: 50px;
          font: 400 12px/30px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-38 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-39 {
          background-color: var(--Text, #292929);
          align-self: stretch;
          display: flex;
          margin-top: 127px;
          width: 100%;
          flex-direction: column;
          padding: 41px 80px;
        }
        @media (max-width: 991px) {
          .div-39 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-40 {
          display: flex;
          margin-right: 37px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-40 {
            max-width: 100%;
            margin-right: 10px;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-41 {
          align-self: stretch;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }
        .img-8 {
          aspect-ratio: 2.26;
          object-fit: contain;
          object-position: center;
          width: 100%;
          border-radius: 58.5px;
          overflow: hidden;
        }
        .div-42 {
          align-self: end;
          display: flex;
          margin-top: 54px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-42 {
            margin-top: 40px;
          }
        }
        .div-43 {
          color: var(--Background, #fff);
          letter-spacing: 0.48px;
          white-space: nowrap;
          font: 700 16px/22px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-43 {
            white-space: initial;
          }
        }
        .div-44 {
          color: var(--Background, #fff);
          letter-spacing: 0.28px;
          margin-top: 38px;
          white-space: nowrap;
          font: 700 14px/20px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-44 {
            white-space: initial;
          }
        }
        .div-45 {
          color: var(--Background, #fff);
          letter-spacing: 0.28px;
          margin-top: 29px;
          white-space: nowrap;
          font: 700 14px/20px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-45 {
            white-space: initial;
          }
        }
        .div-46 {
          color: var(--Background, #fff);
          letter-spacing: 0.28px;
          margin-top: 30px;
          white-space: nowrap;
          font: 700 14px/20px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-46 {
            white-space: initial;
          }
        }
        .div-47 {
          color: var(--Background, #fff);
          letter-spacing: 0.28px;
          margin-top: 29px;
          white-space: nowrap;
          font: 700 14px/20px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-47 {
            white-space: initial;
          }
        }
        .div-48 {
          color: var(--Background, #fff);
          letter-spacing: 0.28px;
          margin-top: 28px;
          white-space: nowrap;
          font: 700 14px/20px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-48 {
            white-space: initial;
          }
        }
        .div-49 {
          align-self: center;
          display: flex;
          flex-basis: 0%;
          flex-direction: column;
          margin: auto 0;
        }
        .div-50 {
          color: var(--Background, #fff);
          letter-spacing: 0.48px;
          white-space: nowrap;
          font: 700 16px/22px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-50 {
            white-space: initial;
          }
        }
        .div-51 {
          color: var(--Background, #fff);
          letter-spacing: 0.28px;
          margin-top: 37px;
          white-space: nowrap;
          font: 600 14px/20px Nunito, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-51 {
            white-space: initial;
          }
        }
        .div-52 {
          color: var(--Background, #fff);
          letter-spacing: 0.28px;
          margin-top: 29px;
          white-space: nowrap;
          font: 600 14px/20px Nunito, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-52 {
            white-space: initial;
          }
        }
        .div-53 {
          align-self: center;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          margin: auto 0;
        }
        .div-54 {
          color: var(--Background, #fff);
          letter-spacing: 0.48px;
          white-space: nowrap;
          font: 700 16px/22px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-54 {
            white-space: initial;
          }
        }
        .img-9 {
          aspect-ratio: 8.33;
          object-fit: contain;
          object-position: center;
          width: 200px;
          overflow: hidden;
          align-self: center;
          margin-top: 38px;
        }
        .div-55 {
          align-self: center;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          margin: auto 0;
        }
        .div-56 {
          color: #fff;
          letter-spacing: 0.48px;
          white-space: nowrap;
          font: 700 16px/30px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-56 {
            white-space: initial;
          }
        }
        .div-57 {
          border-radius: 19.5px;
          box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.1),
            -1px -2px 2px 0px rgba(0, 0, 0, 0.09),
            -3px -4px 3px 0px rgba(0, 0, 0, 0.05),
            -5px -6px 3px 0px rgba(0, 0, 0, 0.01),
            -7px -10px 3px 0px rgba(0, 0, 0, 0),
            4px 4px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          display: flex;
          margin-top: 29px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 4px 80px 4px 20px;
        }
        @media (max-width: 991px) {
          .div-57 {
            padding-right: 20px;
          }
        }
        .div-58 {
          color: var(--Text, #292929);
          flex-grow: 1;
          white-space: nowrap;
          margin: auto 0;
          font: 400 12px Calibri, sans-serif;
        }
        @media (max-width: 991px) {
          .div-58 {
            white-space: initial;
          }
        }
        .div-59 {
          justify-content: center;
          color: #fff;
          text-align: center;
          letter-spacing: 0.36px;
          white-space: nowrap;
          border-radius: 19px;
          background-color: var(--Section4, #00476b);
          align-self: stretch;
          aspect-ratio: 2.75;
          padding: 8px 21px;
          font: 700 12px/25px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-59 {
            white-space: initial;
            padding-left: 20px;
          }
        }
        .div-60 {
          color: #fff;
          letter-spacing: 0.36px;
          margin-top: 24px;
          white-space: nowrap;
          font: 400 12px/30px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-60 {
            white-space: initial;
          }
        }
        .div-61 {
          color: var(--Background, #fff);
          letter-spacing: 0.24px;
          align-self: center;
          margin-top: 98px;
          white-space: nowrap;
          font: 400 12px Arial, sans-serif;
        }
        @media (max-width: 991px) {
          .div-61 {
            margin-top: 40px;
            white-space: initial;
          }
        }
      `}</style>{" "} */}
  


