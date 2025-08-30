import React from 'react';
import './ActivityPanel.css';

const logs = [
  { type: 'query', message: 'SELECT * FROM users', time: '10:01' },
  { type: 'backup', message: 'Backup completed', time: '09:45' },
  { type: 'alert', message: 'High server load', time: '09:30' },
];

function ActivityPanel() {
  return (
    <section className="activity-panel">
      <h3>Recent Activity</h3>
      <ul>
        {logs.map((log, idx) => (
          <li key={idx} className={`log-${log.type}`}>
            <span className="log-time">[{log.time}]</span> {log.message}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ActivityPanel;
