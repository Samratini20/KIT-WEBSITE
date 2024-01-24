import React from "react";
import './careers.css';
import careerImg from '../assets/careers.png';
import { useEffect } from "react";

function Careers(props) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
     
      const attachFiles = (e)=> {
        let fileElement = document.getElementById('file-input');
        if(fileElement) fileElement.click();
      }

      const handleDrop = (e)=>{
        e.preventDefault();
        document.getElementsByClassName('drag-area')[0].classList.remove('highlight');
        const files = e.dataTransfer.files;
      }

      const handleDragOver = (e)=>{
          e.preventDefault();
          document.getElementsByClassName('drag-area')[0].classList.add('highlight');
      }

      const handleDragLeave = (e)=>{
          e.preventDefault();
          document.getElementsByClassName('drag-area')[0].classList.remove('highlight');
      }

      const handleFileSelection = (e)=> {
        const files = e.target.files;
      }

    return (
    <div className="d-flex">
        <div className="col-12 d-flex" style={{marginTop:'7.5rem'}}>
            <div className="d-flex career-side-container flex-column">
                    <div className="align-items-center d-flex flex-column justify-content-center">
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
                    <div class="card justify-content-center my-5 w-75 m-auto">
                      <div class="card-body px-5">
                            <form action="https://formsubmit.co/info@kitservices.in" method="POST" encType="multipart/form-data">
                                  <div class="form-row">
                                    <div class="form-group col-12 my-4">
                                      <span for="Name" className="fs-6 fw-bold">Name <span class="text-danger ml-2">*</span></span>
                                      <input type="text" class="form-control p-0 pt-4 py-2 underlined-input" name="name" placeholder="Your Name" required/>
                                    </div>
                                    <div class="form-group col-12 my-4">
                                      <span for="emailID" className="fs-6 fw-bold">Email <span class="text-danger ml-2">*</span></span>
                                      <input type="email" class="form-control p-0 pt-4 py-2 underlined-input" name="emailId" placeholder="Your Email" required/>
                                    </div>
                                    <div class="col-12 d-flex flex-column form-group my-4">
                                      <span for="Designation" className="fs-6 fw-bold mb-2">Designation <span class="text-danger ml-2">*</span></span>
                                      <select class="p-0 pt-4 py-2 underlined-input" name="Designation" required>
                                        <option hidden selected>Your Designation</option>
                                        <option>Developer</option>
                                        <option>HR department</option>
                                        <option>Scrum Master</option>
                                        <option>Test Engineer</option>
                                        <option>Project Manager</option>
                                        <option>Sales & Marketing</option>
                                        <option>UI/UX</option>
                                        <option>Devops</option>                                        
                                      </select>
                                    </div>
                                    <div class="form-group col-12 my-4">
                                      <span for="CV" className="fs-6 fw-bold">CV / Resume <span class="text-danger ml-2">*</span></span>
                                      <div class="drag-area p-3" onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
                                        <div class="icon">
                                          <i class="fa-solid fa-cloud-arrow-up"></i>
                                        </div>
                                        <span className="header-drag">Drag or Drop to Upload</span>
                                        <span className="header text-decoration-underline">or <span class="resumeAttachment" onClick={attachFiles}>browse</span></span>
                                        <span className="header mt-2">PDF files only</span>
                                        <input type="file" name="attachments" id="file-input" accept=".pdf,application/pdf" hidden onChange={handleFileSelection}/>
                                      </div>
                                    </div>
                                    <div class="form-group col-12 my-4">
                                      <span for="textArea" className="fs-6 fw-bold">Message (Optional) <span class="text-danger ml-2">*</span></span>
                                      <textarea rows={5} cols={10} class="form-control mt-4 bg-transparent" name="contact-message" placeholder="Type here .......!" required/>
                                    </div>
                                  </div>
                                  <button type="submit" className="btn d-flex fw-bold justify-content-center mb-4 mt-5 mx-auto px-4 py-2 rounded-5 send-message w-50">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Careers;