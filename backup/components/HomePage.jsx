import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Application</h1>
        <p>Your one-stop solution for everything you need</p>
      </header>
      
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Feature 1</h3>
            <p>Description of feature 1 goes here.</p>
          </div>
          <div className="feature-card">
            <h3>Feature 2</h3>
            <p>Description of feature 2 goes here.</p>
          </div>
          <div className="feature-card">
            <h3>Feature 3</h3>
            <p>Description of feature 3 goes here.</p>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <h2>Ready to get started?</h2>
        <p>Join thousands of satisfied users today!</p>
        <div className="cta-buttons">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
        </div>
      </section>
      
      <footer className="home-footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;