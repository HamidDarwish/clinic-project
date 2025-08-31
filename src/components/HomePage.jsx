import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">
          <h2>Healthcare Clinic</h2>
        </div>
        <nav className="nav-links">
          <button 
            onClick={() => scrollToSection('home')} 
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </button>
 
          <Link to="/login" className="nav-login-btn">Login</Link>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">❤️</span>
            Clinic Management System
          </div>
          <h1>
            Welcome to the Clinic
            <span className="accent-text"> Dashboard</span>
          </h1>
          <p>
            This platform is designed to help administrators manage patient records, appointments, and reports with ease.
          </p>
          <div className="hero-buttons">
            
            <Link to="/login" className="nav-login-btn">Access Admin Dashboard</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            {/* <div className="floating-element element-1">
              <div className="element-icon">🩺</div>
              <span>Expert Care</span>
            </div> */}
            {/* <div className="floating-element element-2">
              <div className="element-icon">💊</div>
              <span>Modern Treatment</span>
            </div> */}
            {/* <div className="floating-element element-3">
              <div className="element-icon">❤️</div>
              <span>Compassionate</span>
            </div> */}

            
          </div>
          <div className="floating-element element-1">
            <div className="element-icon">
              <p>Secure and reliable access to clinic data.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;