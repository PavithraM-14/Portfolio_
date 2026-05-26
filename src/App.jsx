import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
        <footer className="footer">
          <div className="container">
            <p>© 2025 Pavithra M.</p>
            <p>Computer Science Student | Easwari Engineering College</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;