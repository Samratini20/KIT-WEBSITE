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

  const allJobs = [
    {
      role: "DevOps Engineer",
      requiredSkills: [
        "integration and deployment (CI/CD) pipelines using Jenkins, GitLab CI/CD",
        "Cloud computing platforms such as AWS, Azure, or GCP.",
        "Containerization and orchestration technologies such as Docker, Kubernetes, or Docker Swarm.",
        "Configuration management and infrastructure as code (IaC) tools such as Terraform, Ansible, or Puppet.",
      ],
    },
    {
      role: "UI/UX Designer",
      requiredSkills: [
        "Experience in UI/UX design for web and mobile applications",
        "Proficiency in design tools such as Adobe XD, Sketch, Figma, or similar.l",
        "Strong understanding of user-centered design principles and methodologies.",
        "Portfolio showcasing a range of design projects and the ability to articulate design decisions by creating wireframes, mockups and prototypes.",
      ],
    },
    {
      role: "Sales and Marketing",
      requiredSkills: [
        "Strong understanding of sales and marketing principles, strategies, and tactics.",
        "Excellent communication, negotiation, and presentation skills.",
        "Proven track record of achieving sales targets and driving revenue growth.",
        "Experience with CRM software (e.g., Salesforce) and marketing automation tools (e.g., HubSpot) preferred."
      ],
    },
    {
      role: "Scrum Master",
      requiredSkills: [
        "Experience with Agile tools such as Jira, Trello, or Asana.",
        "Excellent facilitation, communication and conflict resolution skills.",
        "Strong understanding of Agile principles, values, and methodologies.",
        "Ability to work effectively in a fast-paced, dynamic startup environment.",
      ],
    },
    {
      role: "Human Resources Manager",
        requiredSkills: [
        "Knowledge of HR principles, practices and employment laws.",
        "Excellent interpersonal and leadership skills.",
        "Handling confidential information with discretion and integrity.",
        "Experience in HR management roles and HR certification"
      ],
    },
    {
      role: "Project Manager",
      requiredSkills: [
        "Project management methodologies and tools (e.g.Microsoft Project, Jira).",
        "Excellent leadership, communication, and interpersonal skills.",
        "Manage multiple projects and deliver results on time.",
        "Working with cross-functional teams in a fast-paced, dynamic environment."
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

    if(!filtered.length){
      document.getElementById('nosearchresults').innerText = 'No matches found.';
    }
    setFilteredJobs(filtered);    
  };

  const searchInput = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setSearchTerm(e.target.value);
    if(!e.target.value){
    setFilteredJobs(allJobs);
    document.getElementById('nosearchresults').innerText = '';
    }
}

  return (
    <div className="d-flex container-fluid p-0 line-height-2">
      <div className="col w-100 px-2" style={{ marginTop: "8rem" }}>
        <div className="col">
          <img src={heroImg} alt="" className="w-100" />
        </div>
        <div className="col m-3 p-3">
          <span className="fs-4 fw-bold text-align my-2">Work with Us</span>
          <p className="my-1 fs-5">
          As we continue to expand, we are on the lookout for talented individuals who share our 
          vision and are eager to contribute their skills and expertise to our dynamic team.
          Whether you're a seasoned professional seeking new challenges or embarking on the 
          beginning of your career journey, we offer opportunities for growth and advancement. 
          Join us and be part of a collaborative environment where your talents are valued and nurtured.
          </p>
          <p className="my-3 fs-5">
          Our comprehensive range of services includes the development of personalized software solutions, 
          meticulously crafted through continuous testing, development, and maintenance. Our team of skilled 
          designers specializes in creating bespoke websites that not only reflect your brand identity but 
          also resonate with your target audience. With our ongoing support and maintenance, your website 
          remains seamlessly functional and aligned with the latest industry standards.
          Are you ready to take your career to new heights? Work with us and unleash your potential!
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
                          <button >View Details</button>
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
                  <span className="close" >
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
        <div className="col job-profile-container m-5">
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
        </div>
        <div className="career-container align-items-center justify-content-center">
          <div className="justify-content-center mx-auto mt-5 text-white row text-align">
            <span className="fw-bold fa-2x">Apply For Position</span>
            <span className="fs-6 w-50 mt-3">
              “Join our dynamic team and be part of a workplace where innovation
              thrives,diversity is celebrated and every voice contributes to our
              collective success !”
            </span>
          </div>
          <div class="card justify-content-center my-5">
            <div class="card-body">
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

