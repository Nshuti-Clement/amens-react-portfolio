  // Footer.jsx
  import './Footer.css'

  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Amen<span className="logo-dot">.</span></h3>
            <p>Frontend Developer & CS Student</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Amen Divine Ikamba. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer