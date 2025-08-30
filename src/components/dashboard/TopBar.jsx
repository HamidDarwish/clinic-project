import React from 'react';
import './TopBar.css';

function TopBar({ user }) {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="topbar-actions">
        <span className="topbar-bell" title="Notifications">🔔</span>
        <div className="topbar-profile">
          <img src={user.avatar} alt="avatar" className="profile-avatar" />
          <span className="profile-name">{user.name}</span>
          <div className="profile-dropdown">
            <button>Settings</button>
            <button>Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
