import React, { useState } from 'react';
import Widgets from './Widgets';
import Charts from './Charts';
import DataTable from './DataTable';
import ActivityPanel from './ActivityPanel';
import './DashboardContent.css';

function DashboardContent() {
  return (
    <main className="dashboard-content">
      <section className="dashboard-header">
        <h2>Database Dashboard</h2>
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
  );
}

export default DashboardContent;
