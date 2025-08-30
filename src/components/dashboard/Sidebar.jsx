import React, { useState } from 'react';
import './Sidebar.css';

const navItems = [
  { label: 'Dashboard', icon: '📊' },
  { label: 'Tables', icon: '🗄️' },
  { label: 'Add Data', icon: '➕' },
  { label: 'Data', icon: '📋' },
  { label: 'Income', icon: '💰' },
  { label: 'Queries', icon: '🔎' },
  { label: 'Visualizations', icon: '📈' },
  { label: 'Backups', icon: '💾' },
  { label: 'Users & Roles', icon: '👥' },
  { label: 'Settings', icon: '⚙️' },
];

function Sidebar({ active, onSelect }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside className={`sidebar${collapsed ? ' collapsed' : ''}`}>
      <div className="sidebar-logo" onClick={() => setCollapsed(!collapsed)}>
        <span>🗂️</span>
        {!collapsed && <span className="logo-text">DB Admin</span>}
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item, idx) => (
          <div
            key={item.label}
            className={`sidebar-nav-item${active === idx ? ' active' : ''}`}
            onClick={() => onSelect(idx)}
            title={item.label}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {!collapsed && <span className="sidebar-label">{item.label}</span>}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
