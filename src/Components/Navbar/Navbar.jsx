import { useState } from 'react';
import './Navbar.css';
import navUnderline from './assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleConnectClick = () => {
    setMenu("contact");
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-logo">
          Amen
          <span className="nav-logo-dot"></span>
        </div>
        
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={() => setMenu("home")}>
              Home
              {/* {menu === "home" && <img src='/assets/nav_underline.svg' alt='underline' />} */}
              {menu === "home" && <img src={navUnderline} alt='underline' />}
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenu("about")}>
              About Me
              {menu === "about" && <img src='/src/assets/nav_underline.svg' alt='underline' />}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenu("skills")}>
              Skills
              {menu === "skills" && <img src='/src/assets/nav_underline.svg' alt='underline' />}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenu("projects")}>
              Portfolio
              {menu === "projects" && <img src='/src/assets/nav_underline.svg' alt='underline' />}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenu("contact")}>
              Contact
              {menu === "contact" && <img src='/src/assets/nav_underline.svg' alt='underline' />}
            </a>
          </li>
        </ul>

        <button className="nav-connect-btn" onClick={handleConnectClick}>
          Connect With Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;