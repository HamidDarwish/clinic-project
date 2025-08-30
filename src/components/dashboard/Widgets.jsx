import React from 'react';
import './Widgets.css';

const widgetData = [
  { label: 'Total Records', value: 1200 },
  { label: 'Active Users', value: 87 },
  { label: 'Server Load', value: '32%' },
  { label: 'Backups', value: 5 },
];

function Widgets() {
  return (
    <section className="widgets-grid">
      {widgetData.map((w, idx) => (
        <div className="widget-card" key={w.label}>
          <div className="widget-label">{w.label}</div>
          <div className="widget-value">{w.value}</div>
        </div>
      ))}
    </section>
  );
}

export default Widgets;
