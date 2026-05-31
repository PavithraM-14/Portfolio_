import React from 'react';
import { ChevronDown } from 'lucide-react';
import profileImage from '../assets/Photo.png';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting">Hello.</h1>
            <div className="hero-name-wrapper">
              <div className="hero-accent-line"></div>
              <h2 className="hero-name">I'm Pavithra</h2>
            </div>
            <h1 className="hero-title">Computer Science Student</h1>
            <p className="hero-description">
              Passionate about learning cutting-edge technologies and creating innovative solutions 
              to solve real-world problems.
            </p>
            
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                View Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                Contact Me
              </button>
            </div>

            <div className="hero-tech-stack">
              <div className="tech-stack-container">
                <div className="tech-stack-scroll">
                  <span>C++</span>
                  <span>Python</span>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>JavaScript</span>
                  <span>Java</span>
                  <span>C</span>
                  <span>VS code</span>
                  <span>MySQL</span>
                  <span>Bootstrap</span>
                  <span>Tailwind CSS</span>
                  <span>HTML/CSS</span>
                  <span>Git</span>
                  <span>C++</span>
                  <span>Python</span>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="hero-image-circle">
              <img src={profileImage} alt="Pavithra M" className="profile-image" />
            </div>
            <div className="hero-bracket hero-bracket-left">&lt;</div>
            <div className="hero-bracket hero-bracket-right">&gt;</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <ChevronDown size={32} className="bounce" />
      </div>
    </section>
  );
};

export default Hero;