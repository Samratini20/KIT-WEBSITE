import React, { useState , useEffect} from 'react';
import './blog.css'
import { useNavigate } from "react-router-dom";
import KITBanner from '../assets/KIT-Banner.JPG';
import RecentPost from '../assets/office-reception.JPG';
import CEOCabin from '../assets/CEO-Cabin.JPG';
import God from '../assets/God-Pooja.JPG';
import teamPicture from '../assets/TeamPicture.JPG';
import cakeCutting from '../assets/CEO-Work.JPG';
import rangoli from '../assets/Rangoli.JPG';
import fam from '../assets/CEO-family.jpg';
import team from '../assets/Team-Opening.JPG';
import cake from '../assets/Cake.JPG'

function Blog(props) {
  const date = new Date();
  var dateInfo = date.toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric',hour12:true,hour:'numeric',minute:'numeric'});
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bdiv">
        <div className="bdiv-9">
          <div className="bdiv-10">
            <div className="bcolumn">
              <div className="bdiv-11">
                <div id="blogCarousel" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src={KITBanner} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item active" data-bs-interval="2000">
                      <img src={teamPicture} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src={CEOCabin} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#blogCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#blogCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="bdiv-12">
                  <i class="fa-regular fa-clock time_clock"></i>
                  <div className="bdiv-13">
                  {dateInfo} - Latest News


                  </div>
                </div>
                <div className="bdiv-14">
                  Overview
                </div>
                <div className= "bdiv-15 w-100 mx-4">
                  At KIT, we are dedicated to providing top-notch IT services tailored to 
                  meet your unique business needs. With a team of experienced professionals, 
                  we offer a wide range of technology solutions, from network and infrastructure 
                  management to cybersecurity and cloud computing. Our mission is to empower your 
                  organization with the latest in digital innovation, ensuring seamless operations, 
                  enhanced productivity, and robust data security. Partner with us to unlock 
                  the full potential of technology for your business.
                </div>{" "}
                <button className='blogdiv-button' color="inherit" onClick={() => navigate('/blog')}>Read More</button>
              </div>
            </div>{" "}
            <div className="bcolumn-2">
              <div className="bdiv-17">
                <div className="bdiv-21 mx-2 px-4">
                  <div className="bdiv-22 fw-bold fs-5">Recent Post</div>{" "}
                  <hr />
                  <div className="d-flex w-100 flex-column">
                    <img
                      loading="lazy"
                      srcSet={RecentPost}
                      className="d-flex w-100"
                    />
                    <div className="mx-4 my-3">
                      <div className="bdiv-26 fw-bold mb-2">
                        Glimse of Office Inaguaration Day
                        Team Picture
                        CEO with the employees
                      </div>{" "}
                      <div className="bdiv-27">
                        Updated: 6 January 2023 15:35 IST
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="bdiv-34">
          <div className="bdiv-35">
            <div className="d-flex justify-content-around mainFlex">
              {/* <div class="d-flex w-100 flex-column divChng flexAlign"> */}
              <div className='flexAlign'>
                <img loading="lazy" srcset={God} className='first'/>
                {/* <div class="mx-4 my-3 fw-bold w-75"> */}
                <div className='align'>
                  {/* <div class="bdiv-39 fw-bold"> */}
                  Satya Narayan Pooja conducted
                  in office structuring process
                  by our CEO Sandeep Banavasi and his parents
                {/* </div> */}
                </div>
              </div>{" "}
              <div className='flexAlign'>
                <img loading="lazy" srcset={cakeCutting} className='first'/>
                <div className='align'>
                  CEO in his office Cabin on
                  discussion with Clients
                  meetings and Team members
                </div>{" "}
              </div>{" "}
              {/* <div class="d-flex w-100 flex-column"> */}
                <div className='flexAlign'>
                  <img loading="lazy" srcSet={rangoli} className='first' />
                  <div className="bdiv-46">
                    <div className='align'>
                      The art of decoration drawn on the floor. <br />
                      Intended to welcome Lakshmi,
                      the goddess <br /> of wealth and good luck.
                    </div>{" "}
                    {/* <div className="bdiv-48">
                      Updated: 7 December 2023 15:35 IST
                    </div> */}
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>{" "}
          <div className="bdiv-49">
            <div className="d-flex justify-content-around mainFlex">
              <div className="bcolumn-6">
                {/* <div class="d-flex w-75 flex-column"> */}
                <div className='flexAlign'>
                  {/* <img loading="lazy" srcSet={fam} class="d-flex rounded-4" style={{ width: '18rem', height: '11rem' , marginLeft: '1rem'}} />{" "} */}
                  <img loading="lazy" srcSet={fam} className='first' />{" "}
                  {/* <div className="bdiv-52"> */}
                    <div className='align'>
                      CEO Entering the office with family.
                    </div>{" "}
                    {/* <div className="bdiv-54">
                      Updated: 7 December 2023 15:35 IST
                    </div> */}
                  {/* </div> */}
                </div>
              </div>{" "}
              <div className="bcolumn-7">
                <div className='flexAlign'>
                  <img loading="lazy" srcSet={team} className='first' />{" "}
                  <div className="bdiv-56">
                    <div className='align'>
                      CEO at office with team members.
                    </div>{" "}
                    {/* <div className="bdiv-58">
                      Updated: 7 December 2023 15:35 IST
                    </div> */}
                  </div>
                </div>
              </div>{" "}
              <div className="bcolumn-8">
                <div className='flexAlign'>
                  <img loading="lazy" srcSet={cake} className='first'/>{" "}
                  <div className="bdiv-60">
                    <div className='align'>
                      Cake Cutting ceremony on the day of inauguration.
                    </div>{" "}
                    {/* <div className="bdiv-62">
                      Updated: 7 December 2023 15:35 IST
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </>
  );

}
export default Blog;
{/* <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
        }
        .bdiv-2 {
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
          .bdiv-2 {
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
        .bdiv-3 {
          align-self: center;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .bdiv-3 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .bdiv-4 {
          color: var(--Text, #292929);
          align-self: start;
          white-space: nowrap;
          font: 400 18px Calibri, sans-serif;
        }
        @media (max-width: 991px) {
          .bdiv-4 {
            white-space: initial;
          }
        }
        .bdiv-5 {
          color: var(--Text, #292929);
          align-self: start;
          font: 400 18px Calibri, sans-serif;
        }
        .bdiv-6 {
          color: var(--Text, #292929);
          align-self: start;
          font: 400 18px Calibri, sans-serif;
        }
        .bdiv-7 {
          color: #14b1ff;
          align-self: stretch;
          font: 700 18px Calibri, sans-serif;
        }
        .bdiv-8 {
          color: var(--Text, #292929);
          align-self: start;
          white-space: nowrap;
          font: 400 18px Calibri, sans-serif;
        }
        @media (max-width: 991px) {
          .bdiv-8 {
            white-space: initial;
          }
        }
        .bdiv-9 {
          align-self: center;
          margin-top: 49px;
          width: 100%;
          max-width: 1261px;
        }
        @media (max-width: 991px) {
          .bdiv-9 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .bdiv-10 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .bdiv-10 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 75%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .bdiv-11 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          align-items: start;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .bdiv-11 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .img-2 {
          aspect-ratio: 2.06;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: stretch;
        }
        @media (max-width: 991px) {
          .img-2 {
            max-width: 100%;
          }
        }
        .bdiv-12 {
          border-radius: 5px 25px 25px 5px;
          background-color: #e7f7ff;
          display: flex;
          margin-top: 15px;
          gap: 12px;
          padding: 18px 0;
        }
        @media (max-width: 991px) {
          .bdiv-12 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          max-width: 100%;
        }
        .bdiv-13 {
          color: var(--Section-1, #005e8d);
          letter-spacing: 0.72px;
          align-self: center;
          margin: auto 0;
          font: 700 18px/60px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .bdiv-13 {
            max-width: 100%;
          }
        }
        .bdiv-14 {
          color: var(--Text, #292929);
          letter-spacing: 1.2px;
          align-self: stretch;
          margin-top: 26px;
          font: 700 30px/60px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .bdiv-14 {
            max-width: 100%;
          }
        }
        .bdiv-15 {
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          color: var(--Text, #292929);
          text-overflow: ellipsis;
          letter-spacing: 0.72px;
          align-self: stretch;
          margin-top: 40px;
          font: 400 18px/35px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .bdiv-15 {
            max-width: 100%;
          }
        }
        .bdiv-16 {
          color: var(--Background, #fff);
          letter-spacing: 0.36px;
          white-space: nowrap;
          border-radius: 19px;
          box
        }

        `}</style>{" "} */}

