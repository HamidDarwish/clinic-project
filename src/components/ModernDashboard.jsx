import React, { useState } from 'react';
import Sidebar from './dashboard/Sidebar';
import TopBar from './dashboard/TopBar';
import Widgets from './dashboard/Widgets';
import Charts from './dashboard/Charts';
import DataTable from './dashboard/DataTable';
import ActivityPanel from './dashboard/ActivityPanel';
import './dashboard/ModernDashboard.css';

const user = {
  name: 'Admin',
  avatar: 'https://ui-avatars.com/api/?name=Admin',
};

function ModernDashboard() {
  const [activeNav, setActiveNav] = useState(0);
  // Placeholder for role-based customization, notifications, drag-and-drop, etc.
  return (
    <div className="modern-dashboard-layout">
      <Sidebar active={activeNav} onSelect={setActiveNav} />
      <div className="modern-dashboard-main">
        <TopBar user={user} />
        <main className="dashboard-content">
          <section className="dashboard-header">
            <h2>{['Dashboard','Tables','Queries','Visualizations','Backups','Users & Roles','Settings'][activeNav]}</h2>
            <div className="dashboard-actions">
              <button>Add Record</button>
              <button>Run Query</button>
            </div>
          </section>
          <Widgets />
          <Charts />
          <DataTable />
          <ActivityPanel />
        </main>
      </div>
    </div>
  );
}

export default ModernDashboard;
