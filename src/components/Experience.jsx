import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-content">
          <div className="experience-card">
            <div className="experience-icon">🤖</div>
            <h3>AI Web Development Intern</h3>
            <p className="company">InAmigos Foundation</p>
            <p className="year current-status">Current</p>
          </div>

          <div className="experience-card">
            <div className="experience-icon">🔬</div>
            <h3>Research Intern - Full Stack Developer</h3>
            <p className="company">SRM Group</p>
            <p className="year current-status">Current</p>
          </div>

          <div className="experience-card">
            <div className="experience-icon">🌱</div>
            <h3>1M1B Intern - AI for Sustainability</h3>
            <p className="company">1M1B (One Million for One Billion)</p>
            <p className="year current-status">Current</p>
          </div>

          <div className="experience-card">
            <div className="experience-icon">
              <div className="company-logo-placeholder">
                <span>CI</span>
              </div>
            </div>
            <h3>Frontend Developer Intern</h3>
            <p className="company">CodexIntern</p>
            <p className="year current-status">Nov 2025</p>
          </div>

          <div className="experience-card">
            <div className="experience-icon">🚀</div>
            <h3>Director of Innovation</h3>
            <p className="company">Odyssey Space Club</p>
            <p className="year current-status">Current</p>
          </div>

          <div className="experience-card">
            <div className="experience-icon">❤️</div>
            <h3>Active Member</h3>
            <p className="company">Youth Red Cross [2024-2025], Campus Life - Current</p>
            <p className="year current-status">Current</p>
          </div>
          
          
        </div>

        <div className="hackathons">
          <h3>Hackathon Participations</h3>
          <div className="hackathon-badges">
            <span className="badge">AI Agent Hackathon</span>
            <span className="badge">TN-Impact (TANCAM/TIDCO)</span>
            <span className="badge">InnovestHack 2025</span>
            <span className="badge">CodeStorm 2025</span>
            <span className="badge">Hackathon'25 - St Joseph College</span>
            <span className="badge">Codein Clash 2025 (National Level)</span>
            <span className="badge">Ignite [Ctrl+Fix]</span>
            <span className="badge">Anzen CTF event</span>
            <span className="badge">Web Development Hackathon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;