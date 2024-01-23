import React from "react";
import './careers.css';
import careerImg from '../assets/careers.png';
import { useEffect } from "react";

function Careers(props) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="d-flex">
        <div className="col-12 d-flex" style={{marginTop:'7.5rem'}}>
            <div className="d-flex career-side-container flex-column">
                  <div className="align-items-center d-flex flex-column justify-content-center col-4">
                    <span className="text-white fw-bold fa-2x" style={{marginTop:'8rem'}}>Apply For Position</span>
                    <span className="align-items-center d-flex mt-3 mx-5 p-5 text-white">
                    “Join our dynamic team and be part of a workplace
                     where innovation thrives,diversity is celebrated
                     and every voice contributes to our collective success !”
                    </span>
                  </div>
                    <img
                    loading="lazy"
                    src={careerImg}
                    className="w-100 my-5"
                    />
            </div>
            <div className="d-flex career-container-form col-8">
                
            </div>
        </div>
    </div>
  )
}

export default Careers;