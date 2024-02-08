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
        "Portfolio showcasing a range of design projects and the ability to articulate design decisions.",
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

  const [filteredJobs, setFilteredJobs] = useState(allJobs);

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
      <div className="col w-100 px-2" style={{ marginTop: "5rem" }}>
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
        <div className="col job-search-container">
            <div className="col">
              <span className="fw-bold d-flex justify-content-center fs-4 my-4"> Why Work With Us</span>
                <div className="row">
                      <div class="col-sm-4 mb-3 mb-sm-0 text-align">
                        <div class="bg-transparent border-0 card">
                          <div class="align-items-center card-body d-flex flex-column">
                              <h5 class="card-title">
                                <i class="fa-lightbulb fa-regular fs-3 text-info-emphasis"></i>
                              </h5>
                              <p class="card-text">
                                <span className="fw-bolder text-info-emphasis">Join a Culture of Innovation and Collaboration</span><br/>
                                <span>
                                we foster a culture where every team member is empowered to contribute their ideas and drive impactful solutions.
                                </span>
                              </p>
                            </div>
                        </div>
                      </div>
                      <div class="col-sm-4 mb-3 mb-sm-0 text-align">
                        <div class="bg-transparent border-0 card">
                          <div class="align-items-center card-body d-flex flex-column">
                              <h5 class="card-title">
                                <i class="fa-solid fa-arrow-up-right-dots fs-3 text-info-emphasis"></i>
                              </h5>
                              <p class="card-text">
                                <span className="fw-bolder text-info-emphasis">Opportunities for Growth and Development</span><br/>
                                <span>
                                 we invest in your professional development to help you reach your full potential by  providing ample opportunities for learning and advancement.
                                </span>
                              </p>
                           </div>
                        </div>
                      </div>
                            
                      <div class="col-sm-4 mb-3 mb-sm-0 text-align">
                        <div class="bg-transparent border-0 card">
                          <div class="align-items-center card-body d-flex flex-column">
                              <h5 class="card-title">
                                <i class="fa-solid fa-scale-balanced fs-3 text-info-emphasis"></i>
                              </h5>
                              <p class="card-text">
                                <span className="fw-bolder text-info-emphasis">Work-Life Balance</span><br/>
                                <span>
                                we offer flexible working arrangements, remote work options, and generous vacation policies to ensure the need to thrive both professionally and personally.                                </span>
                              </p>
                            </div>
                        </div>
                      </div>
                    
                      <div class="col-sm-4 mb-3 mb-sm-0 text-align">
                        <div class="bg-transparent border-0 card">
                          <div class="align-items-center card-body d-flex flex-column">
                              <h5 class="card-title">
                                <i class="fa-solid fa-hands-holding-circle fs-3 text-info-emphasis"></i>
                              </h5>
                              <p class="card-text">
                                <span className="fw-bolder text-info-emphasis">Diversity and Inclusion</span><br/>
                                <span>
                                 we are committed for creating an inclusive work environment where everyone feels valued, respected, and empowered to bring their authentic selves to work.
                                </span>
                              </p>
                            </div>
                        </div>
                      </div>
                      <div class="col-sm-4 mb-3 mb-sm-0 text-align">
                        <div class="bg-transparent border-0 card">
                          <div class="align-items-center card-body d-flex flex-column">
                              <h5 class="card-title">
                                <i class="fa-solid fa-trophy fs-3 text-info-emphasis"></i>
                              </h5>
                              <p class="card-text">
                                <span className="fw-bolder text-info-emphasis">Competitive Compensation and Benefits</span><br/>
                                <span>
                                We value our employees and believe in rewarding them for their hard work and dedication. In addition to competitive salaries, we offer a comprehensive benefits package, including health insurance.                                </span>
                              </p>
                            </div>
                        </div>
                      </div>
                      <div class="col-sm-4 mb-3 mb-sm-0 text-align">
                        <div class="bg-transparent border-0 card">
                          <div class="align-items-center card-body d-flex flex-column">
                              <h5 class="card-title">
                                <i class="fa-solid fa-people-group fs-3 text-info-emphasis"></i>
                              </h5>
                              <p class="card-text">
                                <span className="fw-bolder text-info-emphasis">Join Our Team</span><br/>
                                <span>
                                Ready to take your career to the next level? Join us at KIT and be part of a dynamic team that is shaping the future of technology. Explore our current job openings and start your journey with us today!
                                </span>
                              </p>
                            </div>
                        </div>
                      </div>                 
                </div>
            </div>
         </div>
         <div className="col job-profile-container m-5">
              <div className="align-items-baseline d-flex justify-content-center text-align">
                  <div class="align-items-baseline d-flex input-group-text mx-4 search-box py-0 px-4 rounded-5">
                      <input
                      type="text"
                      placeholder="Search for jobs by skill or keyword"
                      value={searchTerm}
                      className="bg-transparent border-0 form-control"
                      onChange={searchInput}
                    />   
                    <i class="fa-magnifying-glass fa-solid text-info-emphasis"></i>   
                  </div>
                  {searchTerm ? ( <button onClick={handleSearch} className="btn rounded-5 py-2 send-message fw-bold px-4 mb-4">Search</button>): ( <button onClick={handleSearch} className="btn rounded-5 py-2 send-message fw-bold px-4 mb-4" disabled>Search</button>)}
              </div>
              <p className="d-flex justify-content-center fw-bold fs-5" id="nosearchresults"></p>
                <div id="jobs" className="d-flex row mx-4 px-3">
                  {filteredJobs.map((job) => (
                    <div class="col-sm-4 my-4 mb-sm-0">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title mb-3">{job.role}</h5>
                          <p class="card-text">
                            <div className="d-flex justify-content-around mb-3">
                              <span><i class="fa-solid fa-suitcase px-1"></i>0-10 Yrs</span>
                              <div class="vr text-info"></div>
                              <span><i class="fa-solid fa-indian-rupee-sign px-1"></i>Not disclosed</span>
                              <div class="vr text-info"></div>
                              <span><i class="fa-solid fa-location-dot px-1"></i>Banglore</span>
                            </div>
                            <div>
                              <span className="d-flex"><i class="fa-solid fa-head-side-virus"></i>
                              <ul>
                                {job.requiredSkills.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                              </span>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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

