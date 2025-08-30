import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import './App.css';
import Dashboard from './components/Dashbord';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* Modern dashboard UI */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/full" element={<Dashboard adminType="full" />} />
          <Route path="/dashboard/limited" element={<Dashboard adminType="limited" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;