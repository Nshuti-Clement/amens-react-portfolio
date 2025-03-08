// Experience.jsx (new component)
/*import './Skills.css'
const Skills = () => {
  const experiences = [
    {
      year: "Current",
      role: "Product Manager",
      company: "Hack for LA",
      description: "Led product strategy and development for user-facing applications",
      achievements: ["40% increase in user engagement", "Launched 3 major features"]
    },
    {
      year: "Fall 2024",
      role: "Frontend Developer",
      company: "3D Girls Inc.",
      description: "Developed responsive web applications focusing on user experience",
      achievements: ["Rebuilt core application interface", "Reduced load time by 50%"]
    },
    {
      year: "Summer 2024",
      role: "Open Source Software Engineering Intern",
      company: "CodeDay",
      description: "Led product strategy and development for user-facing applications",
      achievements: ["40% increase in user engagement", "Launched 3 major features"]
    },
    {
      year: "Spring 2024",
      role: "Youth Co-creator",
      company: "Company Name",
      description: "Led product strategy and development for user-facing applications",
      achievements: ["40% increase in user engagement", "Launched 3 major features"]
    },
  ];

  return (
    <section className="experience-section">
      <div className="projects-header">
        <h2>
          My experience
          <span className="accent-dot"></span>
        </h2>
      </div>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-year">{exp.year}</div>
              <h3 className="timeline-role">{exp.role}</h3>
              <div className="timeline-company">{exp.company}</div>
              <p className="timeline-description">{exp.description}</p>
              <ul className="timeline-achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};*/

//export default Skills

//import React from 'react';
import './Skills.css';

const experiences = [
  {
    year: 'Spring 2025',
    role: 'Product Manager',
    company: 'Hack for LA',
    description: 'Led product development and strategy of the website.',
  },
  {
    year: 'Summer 2024',
    role: 'Frontend Developer',
    company: '3D Girls Inc.',
    description: 'Developed user interfaces for web applications.',
  },
  // Add more experiences as needed
  {
    year: "Summer 2024",
    role: "Open Source Software Engineering Intern",
    company: "CodeDay",
    description: "Contributed to open-source project, Robyn, a python web framework",
  },
  {
    year: "Spring 2024",
    role: "Youth Co-creator",
    company: "Headstream Innovation",
    description: "Led product strategy and development for user-facing applications",
  },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2>
          My Experience
        </h2>
      </div>
      
      <div className="skills-timeline">
        {experiences.map((exp, index) => (
          <div className="skills-timeline-item" key={index}>
            <div className="skills-timeline-year">{exp.year}</div>
            <div className="skills-timeline-content">
              <h3 className="skills-timeline-role">{exp.role}</h3>
              <div className="skills-timeline-company">{exp.company}</div>
              <p className="skills-timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;