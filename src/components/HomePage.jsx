import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">
          <h2>Healtcare Clinic</h2>
        </div>
        <div className="nav-links">
          <Link to="/" className="active">Home</Link>
          <Link to="/login" className="nav-login-btn">Dashboard</Link>
        </div>
      </header>
      
      <div className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Modern Healthcare Solutions</span>
          <h1>Your Health Journey <span className="accent-text">Starts Here</span></h1>
          <p>Experience personalized care with cutting-edge medical technology and compassionate professionals</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-primary">Access Admin Dashboard</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <div className="floating-card card-1">
              <div className="card-icon">✓</div>
              <div className="card-text">Expert Doctors</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">♥</div>
              <div className="card-text">Patient-Centered Care</div>
            </div>
            <div className="main-image">Medical Team Image</div>
          </div>
        </div>
      </div>
      
      <footer className="home-footer">
        <div className="copyright">
          <p>&copy; 2025 Healthcare Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;