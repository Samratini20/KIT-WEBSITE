import React, { useState } from 'react';

const CareersSecond = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

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
        "Collaborate with engineering and product squads"
      ],
      requiredSkills: [
        "Strong programming skills in Python, Perl, or JavaScript",
        "Experience with Vagrant, Packer, VirtualBox",
        "Distributed source control skills with Git",
        "Continuous learning and innovation mindset"
      ]
    },
    {
      role: "UI/UX Designer",
      responsibilities: [
        "Define UX/UI metrics and apply for future designs",
        "Evolve a user-centric design model",
        "Design and develop front-end and back-end modules",
        "Collaborate with stakeholders and development teams",
        "Establish front-end/UI layer coding standards"
      ],
      requiredSkills: [
        "Proficiency in visual design and prototyping tools",
        "Ability to write clean, simple, testable code",
        "Understanding of user-centered design principles",
        "Front-end and back-end development skills",
        "Strong collaboration and communication skills"
      ]
    },
    {
      role: "Sales and Marketing",
      responsibilities: [
        "Print, verify, and prepare tickets",
        "Operate office machines",
        "Maintain company phone roster",
        "Assist with tasks and office errands",
        "Research opportunities to improve workflow",
        "Attend events outside normal business hours"
      ],
      requiredSkills: [
        "Excellent communication and interpersonal skills",
        "Knowledge of event planning and coordination",
        "Marketing and advertising skills",
        "Ability to work outside normal business hours",
        "Understanding of NASCAR racing"
      ]
    },
    {
      role: "Scrum Master",
      responsibilities: [
        "Ensure team understanding of project goals and scope",
        "Help maintain the product backlog",
        "Facilitate Scrum events and coach the development team",
        "Encourage the organization to adopt Scrum methodology"
      ],
      requiredSkills: [
        "Strong facilitation and coaching skills",
        "Knowledge of Scrum framework and Agile principles",
        "Effective communication and collaboration skills",
        "Ability to influence and drive organizational change"
      ]
    },
    {
      role: "Human Resources Manager",
      responsibilities: [
        "Develop HR policies and coordinate HR activities",
        "Update job requirements and descriptions",
        "Conduct recruitment, testing, and interviewing programs",
        "Establish and conduct orientation and training programs",
        "Maintain pay structure and conduct pay surveys"
      ],
      requiredSkills: [
        "Strong understanding of employment law and HR regulations",
        "Experience in staff management and training programs",
        "Ability to resolve employee grievances and counsel supervisors"
      ]
    },
    {
      role: "Project Manager",
      responsibilities: [
        "Streamline processes for efficiency",
        "Manage contracting and travel arrangements",
        "Coordinate medical/legal submissions and reviews",
        "Prepare and attend project review meetings",
        "Maintain client communication and P&L on each project"
      ],
      requiredSkills: [
        "Strong project management and organizational skills",
        "Knowledge of the Banking or Asset Management industry",
        "Experience in global team collaboration",
        "Effective metrics reporting and analysis skills"
      ]
    },
  ];

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
    <div className=''>
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
          <div>
            {filteredJobs.map((job) => (
              <li key={job.role}>
                <div>
                  <h2>{job.role}</h2>
                  <p>Required Skills: {job.requiredSkills.slice(0, 3).join(', ')}</p>
                  <button onClick={() => openModal(job)}>View Details</button>
                </div>
              </li>
            ))}
          </div>
        )}
      </div>

      {selectedJob && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedJob.role}</h2>
            <p>Responsibilities: {selectedJob.responsibilities.join(', ')}</p>
            <p>Required Skills: {selectedJob.requiredSkills.join(', ')}</p>
            <button>Apply</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersSecond;


