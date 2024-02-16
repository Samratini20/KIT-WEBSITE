import React from "react";
import "./careers.css";
import careerImg from "../assets/careers.png";
import { useEffect, useState } from "react";
import { hover } from "@testing-library/user-event/dist/hover";
import heroImg from "../assets/Group 579.png";

function Careers() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    // window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [uploadedFileName, setuploadedFileName] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [foundJobs, setFoundJobs] = useState(false);

  const allJobs = [
    {
      role: "DevOps Engineer",
      responsibilities: [
        "Minimize production and engineering disruption",
        "Oversee and maintain Database and Web tiered infrastructure",
        "Manage and oversee AWS infrastructure",
        "Provide production support including bug triage, diagnosis, and resolution",
        "Define, analyze, improve, and implement technical standards",
        "Automate tasks with build scripts",
        "Collaborate with engineering and product squads",
      ],
      requiredSkills: [
        "Strong programming skills in Python, Perl, or JavaScript",
        "Experience with Vagrant, Packer, VirtualBox",
        "Distributed source control skills with Git",
        "Continuous learning and innovation mindset",
      ],
    },
    {
      role: "UI/UX Designer",
      responsibilities: [
        "Define UX/UI metrics and apply for future designs",
        "Evolve a user-centric design model",
        "Design and develop front-end and back-end modules",
        "Collaborate with stakeholders and development teams",
        "Establish front-end/UI layer coding standards",
      ],
      requiredSkills: [
        "Proficiency in visual design and prototyping tools",
        "Ability to write clean, simple, testable code",
        "Understanding of user-centered design principles",
        "Front-end and back-end development skills",
        "Strong collaboration and communication skills",
      ],
    },
    {
      role: "Sales and Marketing",
      responsibilities: [
        "Print, verify, and prepare tickets",
        "Operate office machines",
        "Maintain company phone roster",
        "Assist with tasks and office errands",
        "Research opportunities to improve workflow",
        "Attend events outside normal business hours",
      ],
      requiredSkills: [
        "Excellent communication and interpersonal skills",
        "Knowledge of event planning and coordination",
        "Marketing and advertising skills",
        "Ability to work outside normal business hours",
        "Understanding of NASCAR racing",
      ],
    },
    {
      role: "Scrum Master",
      responsibilities: [
        "Ensure team understanding of project goals and scope",
        "Help maintain the product backlog",
        "Facilitate Scrum events and coach the development team",
        "Encourage the organization to adopt Scrum methodology",
      ],
      requiredSkills: [
        "Strong facilitation and coaching skills",
        "Knowledge of Scrum framework and Agile principles",
        "Effective communication and collaboration skills",
        "Ability to influence and drive organizational change",
      ],
    },
    {
      role: "Human Resources Manager",
      responsibilities: [
        "Develop HR policies and coordinate HR activities",
        "Update job requirements and descriptions",
        "Conduct recruitment, testing, and interviewing programs",
        "Establish and conduct orientation and training programs",
        "Maintain pay structure and conduct pay surveys",
      ],
      requiredSkills: [
        "Strong understanding of employment law and HR regulations",
        "Experience in staff management and training programs",
        "Ability to resolve employee grievances and counsel supervisors",
      ],
    },
    {
      role: "Project Manager",
      responsibilities: [
        "Streamline processes for efficiency",
        "Manage contracting and travel arrangements",
        "Coordinate medical/legal submissions and reviews",
        "Prepare and attend project review meetings",
        "Maintain client communication and P&L on each project",
      ],
      requiredSkills: [
        "Strong project management and organizational skills",
        "Knowledge of the Banking or Asset Management industry",
        "Experience in global team collaboration",
        "Effective metrics reporting and analysis skills",
      ],
    },
  ];

  const attachFiles = (e) => {
    let fileElement = document.getElementById("file-input");
    if (fileElement) fileElement.click();
  };

  const handleFileSelection = (e) => {
    const files = e.target.files;
    setuploadedFileName(files[0].name);
  };
  function SubmitButton() {
    if (uploadedFileName && designation && email && name) {
      return (
        <button
          type="submit"
          className="btn d-flex fw-bold justify-content-center mb-4 mt-5 mx-auto px-4 py-2 rounded-5 send-message w-50"
        >
          Send
        </button>
      );
    } else {
      return (
        <button
          type="submit"
          className="btn d-flex fw-bold justify-content-center mb-4 mt-5 mx-auto px-4 py-2 rounded-5 send-message w-50"
          disabled
        >
          Send
        </button>
      );
    }
  }

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    const alphabeticRegex = /^[A-Za-z\s]*$/;
    if (alphabeticRegex.test(inputValue)) {
      setName(inputValue);
    }
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (inputValue && emailregex.test(inputValue)) {
      setEmail(inputValue);
      document.getElementById("errorMessage").innerText = "";
    } else {
      setEmail("");
      document.getElementById("errorMessage").innerText =
        "Please Enter a valid Email";
    }
  };

  const handleSearch = () => {
    const filtered = allJobs.filter((job) => {
      const skillsMatch = job.requiredSkills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
        job.role.toLowerCase().includes(searchTerm.toLowerCase()) || skillsMatch
      );
    });

    setFilteredJobs(filtered);
  };

  const openModal = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="d-flex container-fluid p-0 line-height-2">
      <div className="col w-100 px-2" style={{ marginTop: "8rem" }}>
        <div className="col">
          <img src={heroImg} alt="" className="w-100" />
        </div>
        <div className="col m-3 p-3">
          <span className="fs-4 fw-bold text-align my-2">Work with Us</span>
          <p className="my-3 fs-5">
            At KIT, we combine creativity, expertise, and strategic thinking to
            deliver exceptional web design solutions tailored to your business
            goals. Get in touch with us today to elevate your online presence
            and take your business to new heights. Provides the services you
            need to develop personalized software and ensure the program&#39;s
            viability through continuous testing, development and maintenance.
            Our team of skilled designers creates bespoke websites that reflect
            your brand identity and resonate with your target audience. We
            provide on-going support and maintenance to keep your site running
            smoothly and up-to-date with the latest industry standards. At KIT,
            we combine creativity, expertise, and strategic thinking to deliver.
          </p>
        </div>
        <div className="search-box">
          <div className="">
            <h1>Job Search</h1>
            <input
              type="text"
              placeholder="Search by role or skill"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div>
              {filteredJobs.length === 0 ? (
                <p>No matching jobs found.</p>
              ) : (
                
                <div className="d-flex gap-4 mx-4 px-3">
                  {setFoundJobs(true)}
                  {filteredJobs.map((job) => (
                    // <div key={job.role} className="card">
                    //   <div>
                    //     <h2>{job.role}</h2>
                    //     <p>Required Skills: {job.requiredSkills.slice(0, 3).join(', ')}</p>
                    //     <button onClick={() => openModal(job)}>View Details</button>
                    //   </div>
                    // </div>
                    
                    <div class="col-sm-4 mb-3 mb-sm-0">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">{job.role}</h5>
                          <p class="card-text">
                              Required Skills: {job.requiredSkills.slice(0, 3).join(', ')}
                          </p>
                          <button onClick={() => openModal(job)}>View Details</button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                </div>
              )}
            </div>

            {selectedJob && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                  <h2>{selectedJob.role}</h2>
                  <p>
                    Responsibilities: {selectedJob.responsibilities.join(", ")}
                  </p>
                  <p>
                    Required Skills: {selectedJob.requiredSkills.join(", ")}
                  </p>
                  <button>Apply</button>
                </div>
              </div>
            )}

          </div>
        </div>
        {foundJobs? "" : <div className="col job-profile-container m-5">
          <div class="row">
            <div class="col-sm-4 mb-3 mb-sm-0">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{allJobs[0].role}</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-3 mb-sm-0">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{allJobs[1].role}</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-3 mb-sm-0">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{allJobs[2].role}</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 my-3 mb-sm-0">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{allJobs[3].role}</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 my-3 mb-sm-0">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{allJobs[4].role}</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 my-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{allJobs[5].role}</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>}
        <div className="career-container align-items-center justify-content-center">
          <div className="justify-content-center mx-auto mt-5 text-white row text-align">
            <span className="fw-bold fa-2x">Apply For Position</span>
            <span className="fs-6 w-50 mt-3">
              “Join our dynamic team and be part of a workplace where innovation
              thrives,diversity is celebrated and every voice contributes to our
              collective success !”
            </span>
          </div>
          <div class="card justify-content-center mx-auto my-5 w-50">
            <div class="card-body px-5">
              <form
                action="https://formsubmit.co/careers@kitservices.in"
                method="POST"
                encType="multipart/form-data"
              >
                <div class="form-row">
                  <div class="form-group col-12 my-4">
                    <span for="Name" className="fs-5 fw-bold">
                      Name <span class="text-danger ml-2">*</span>
                    </span>
                    <input
                      type="text"
                      class="form-control p-0 pt-4 py-2 underlined-input"
                      name="name"
                      placeholder="Your Name"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                  <div class="form-group col-12 my-4">
                    <span for="emailID" className="fs-5 fw-bold">
                      Email <span class="text-danger ml-2">*</span>
                    </span>
                    <input
                      type="email"
                      class="form-control p-0 pt-4 py-2 underlined-input"
                      name="emailId"
                      placeholder="Your Email"
                      onChange={handleEmailChange}
                      required
                    />
                    <span
                      id="errorMessage"
                      className="mt-2 text-danger fw-bold"
                    ></span>
                  </div>
                  <div class="col-12 d-flex flex-column form-group my-4">
                    <span for="Designation" className="fs-5 fw-bold mb-2">
                      Designation <span class="text-danger ml-2">*</span>
                    </span>
                    <select
                      required
                      class="p-0 pt-4 py-2 underlined-input"
                      name="Designation"
                      onChange={(e) => setDesignation(e.target.value)}
                    >
                      <option hidden selected>
                        Your Designation
                      </option>
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
                    <span for="CV" className="fs-5 fw-bold">
                      CV / Resume <span class="text-danger ml-2">*</span>
                    </span>
                    <div class="drag-area p-3">
                      <div class="icon">
                        <i class="fa-solid fa-cloud-arrow-up"></i>
                      </div>
                      <span className="header text-decoration-underline">
                        <span class="resumeAttachment" onClick={attachFiles}>
                          Upload
                        </span>
                      </span>
                      <span className="fs-6 fw-bold my-1">
                        {uploadedFileName}{" "}
                        {uploadedFileName ? (
                          <i
                            onClick={() => {
                              setuploadedFileName("");
                            }}
                            style={{ cursor: "pointer" }}
                            class="fa-regular fa-circle-xmark mx-2 pdf-upload-icon"
                          ></i>
                        ) : (
                          ""
                        )}
                      </span>
                      <span className="header mt-2">One PDF file only</span>
                      <input
                        type="file"
                        name="attachments"
                        id="file-input"
                        accept=".pdf,application/pdf"
                        hidden
                        onChange={handleFileSelection}
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group col-12 my-4">
                    <span for="textArea" className="fs-5 fw-bold">
                      Message (Optional)
                    </span>
                    <textarea
                      rows={5}
                      cols={10}
                      class="form-control mt-4 bg-transparent"
                      name="contact-message"
                      placeholder="Type here .......!"
                    />
                  </div>
                </div>
                <SubmitButton />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
