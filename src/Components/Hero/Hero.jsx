import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const roles = ["Frontend Developer","Product Designer","Product Manager"];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (charIndex < roles[index].length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + roles[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100); // Typing speed
        return () => clearTimeout(typingTimeout);
      } else {
        setTimeout(() => setIsTyping(false), 2000); // Pause after full word
      }
    } else {
      setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTyping(true);
      }, 1000); // Pause before switching role
    }
  }, [charIndex, isTyping, index]);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-image-container">
          <img
            src="/src/assets/myProfile-removebg-.png"
            alt="Profile"
            className="profile-image"
          />
        </div>

        {/* Heading */}
        <h1 className="hero-heading">
          <span className="gradient-text">I&apos;m Amen Divine,</span>{' '}
          <span className="white-text">
            {displayedText} {displayedText && "based in California."}
          </span>
        </h1>
        <p className="hero-description">
          Passionate about solving real-world problems through innovative and user-centered technology solutions.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#contact" className="primary-button">
            Connect with me
          </a>
          <a href="/path/to/resume.pdf" className="secondary-button" target="_blank" rel="noopener noreferrer">
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
