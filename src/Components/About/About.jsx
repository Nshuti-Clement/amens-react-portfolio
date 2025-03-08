import { FaReact, FaHtml5, FaCss3Alt, FaFigma, FaGitAlt, FaJira } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiNextdotjs, SiFramer } from 'react-icons/si';
import './About.css'

const About = () => {
  const tools = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiFramer />, name: "Framer" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaJira />, name: "Jira" },
    { icon: <FaGitAlt />, name: "Git" }
  ];

  return (
    <section className="about-section">
      <div className="projects-header">
        <h2>
          About Me
        </h2>
      </div>
      
      <div className="about-content">
        <div className="profile-image1">
          <img src="/src/assets/myProfile-removebg-.png" alt="Profile" />
        </div>
        
        <div>
          <div className="about-description">
            <p>A software developer passionate about solving real-world problems through innovative and user-centered technology solutions, I bring a unique blend of technical expertise and creative thinking to every project I undertake. My journey in technology is driven by a deep curiosity about how people interact with products and a commitment to crafting experiences that resonate with users.</p>
            
            <p>Whether it&apos;s designing seamless user interfaces or defining impactful product strategies, I focus on transforming complex challenges into intuitive, meaningful solutions. At the core of my work lies a dedication to placing the user at the heart of every decision.</p>
          </div>


          <div className="tools-section">
            <h3 className="tools-title">Tools & Technologies</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-item">
                  <span className="tool-icon">{tool.icon}</span>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      
    
      </section>
    );
  };
  
  export default About;

/*import { FaReact, FaHtml5, FaCss3Alt, FaFigma, FaGitAlt, FaJira } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiNextdotjs, SiFramer } from 'react-icons/si';
import './About.css'

const About = () => {
  const tools = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiFramer />, name: "Framer" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaJira />, name: "Jira" },
    { icon: <FaGitAlt />, name: "Git" }
  ];

  return (
    <div className="about-container">
      <h2 className="about-title">
        About Me<span className="about-title-dot">.</span>
      </h2>
      <div className="about-content">
        <div className="profile-image1">
          <img src="/src/assets/myProfile-removebg.png" alt="Profile" />
        </div>
        
        <div className="about-description">
          <p>As a passionate Product Manager and Frontend Developer, I bridge the gap between user needs and technical solutions. My journey in technology is driven by a deep curiosity about how users interact with products and how we can create experiences that truly resonate with them.</p>
          <p>I thrive on transforming complex problems into intuitive solutions, always keeping the user at the heart of every decision. Whether it is crafting user interfaces or defining product strategies, I bring both technical expertise and user-centered thinking to every project.</p>
        </div>
      </div>

      <div className="tools-section">
        <h3 className="tools-title">Tools & Technologies</h3>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-item">
              <span className="tool-icon">{tool.icon}</span>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;*/