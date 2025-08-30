import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(null);

  // Example credentials
  const credentials = {
    admin: { password: 'admin123', type: 'full' },
    ali: { password: 'ali123', type: 'limited' },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (credentials[username] && credentials[username].password === password) {
      // Redirect to dashboard based on admin type
      setRedirect(`/dashboard/${credentials[username].type}`);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      {redirect && window.location.replace(redirect)}
      <header className="navbar">
        <div className="logo">
          <h2>Healthcare Clinic</h2>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login" className="active">Dashboard</Link>
        </div>
      </header>
      
      <div className="login-content">
        <div className="login-wrapper">
          <div className="login-side-image">
            <div className="login-quote">
              <div className="quote-icon">❞</div>
              <h2>Admin Dashboard Access</h2>
              <p>Manage clinic data, patient records, and appointments through our secure admin Dashboard.</p>
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Update patient database</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Manage appointment schedules</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Generate healthcare reports</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="login-card">
            <div className="login-header">
              <h1>Admin Login</h1>
              <p>Sign in to access the clinic dashboard</p>
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <div className="input-with-icon user-icon">
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-with-icon password-icon">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group remember-forgot">
                <div className="remember-me">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
              </div>
              
              <button type="submit" className="login-button">Access Dashboard</button>
            </form>
            
            {/* <div className="login-footer">
              <p className="help-text">For technical support, please contact the IT department</p>
            </div> */}
          </div>
        </div>
      </div>
      
      {/* <footer className="login-page-footer">
        <div className="copyright">
          <p>&copy; 2025 Healtcare Clinic. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default LoginPage;