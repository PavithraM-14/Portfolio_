import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: '🤱 MaaCare',
      description: 'MaaCare is an AI-powered maternal healthcare platform that provides WhatsApp-based support, postpartum depression (PPD) risk detection, and real-time alerts for ASHA workers through a monitoring dashboard.',
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js','Twilio WhatsApp API'],
      status: 'In Progress'
    },
    {
      title: 'IdeaHub',
      description: 'A collaborative platform for sharing, discussing, and refining ideas among students',
      tech: ['React', 'Node.js', 'MongoDB'],
      status: 'In Progress'
    },
     {
      title: '🚀 PrepVerse ',
      description: 'PrepVerse is an AI-powered placement preparation platform that helps students improve coding, resumes, interviews, and study planning through personalized learning tools.',
      tech: ['React 18', 'TypeScript', 'Vite', 'Supabase', 'Google Gemini API'],
      status: 'Completed'
    },
    {
      title: 'Textify',
      description: 'Textify is a modern web application that provides powerful text processing tools like translation, password generation, text analytics, QR codes, and more in one clean interface.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Web APIs'],
      status: 'Completed'
    },
    {
      title: 'Healthcare Chatbot',
      description: 'Interactive chatbot for healthcare assistance and information',
      tech: ['Python', 'Flask', 'NLP'],
      status: 'Completed'
    },
    {
      title: 'Air Pollution Analysis Tool',
      description: 'Python program to visualize and predict pollution levels using real-time data',
      tech: ['Python', 'Data Analysis', 'Visualization'],
      status: 'Completed'
    },
    {
      title: 'Elderly Reminder System',
      description: 'Smart reminder system designed to help elderly users manage medications, appointments, and daily tasks with notifications',
      tech: ['Java', 'HTML/CSS', 'JavaScript'],
      status: 'Completed'
    },
    {
      title: 'Digital Recipe Book',
      description: 'Digital platform for storing and sharing recipes',
      tech: ['JavaScript', 'React', 'CSS'],
      status: 'Completed'
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern portfolio website to showcase projects and skills',
      tech: ['React', 'CSS3', 'JavaScript'],
      status: 'Completed'
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-status">{project.status}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;