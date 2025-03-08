import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mutual Fund Calculator",
      description: "Invest better with data-driven insights.",
      image: "/src/assets/project C.png",
      category: "Mutual Fund Calculator"
    },
    {
      id: 2,
      title: "VitalPath",
      description: "Streamlining healthcare communication and collaboration.",
      image: "/src/assets/project A.png",
      category: "Healthcare App"
    },
    {
      id: 3,
      title: "My Personal Website",
      description: "Showcasing my journey and projects in tech.",
      image: "/src/assets/project B.png",
      category: "HERO SECTION"
    }
  ];

  return (
    <section className="projects" id="portfolio">
      <div className="projects-header">
        <h2>
          My latest work
          <span className="accent-dot"></span>
        </h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-overlay">
              <div className="project-category">{project.category}</div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;