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

function Dashboard() {
  const [activeNav, setActiveNav] = useState(0);
  // Get adminType from props or default to 'full'
  const adminType = typeof window !== 'undefined' && window.location.pathname.includes('limited') ? 'limited' : 'full';
  // Sidebar nav items order:
  // ['Dashboard','Tables','Add Data','Data','Income','Queries','Visualizations','Backups','Users & Roles','Settings']
  const navTitles = ['Dashboard','Tables','Add Data','Data','Income','Queries','Visualizations','Backups','Users & Roles','Settings'];

  // State for patients and income
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    contact: '',
    email: '',
    address: '',
    fee: ''
  });

  // Add patient handler
  const handleAddPatient = () => {
    if (
      newPatient.firstName &&
      newPatient.lastName &&
      newPatient.dob &&
      newPatient.gender &&
      newPatient.contact &&
      newPatient.email &&
      newPatient.address &&
      newPatient.fee
    ) {
      setPatients([...patients, { ...newPatient, id: Date.now() }]);
      setNewPatient({ firstName: '', lastName: '', dob: '', gender: '', contact: '', email: '', address: '', fee: '' });
    }
  };

  return (
    <div className="modern-dashboard-layout">
      <Sidebar active={activeNav} onSelect={setActiveNav} />
      <div className="modern-dashboard-main">
        <TopBar user={user} />
        <main className="dashboard-content">
          <section className="dashboard-header">
            <h2>{navTitles[activeNav]}</h2>
            <div className="dashboard-actions">
              {/* Show Add Record only for Add Data */}
              {activeNav === 2 && <button>Add Record</button>}
              {/* Show Run Query only for Queries */}
              {activeNav === 4 && <button>Run Query</button>}
            </div>
          </section>
          {/* Render content based on activeNav */}
          {activeNav === 0 && (
            <>
              <div style={{marginBottom: '1rem', background: '#f5f5f5', padding: '1rem', borderRadius: '8px'}}>
                <b>Dashboard:</b> Overview of key metrics, widgets, and charts for your clinic.
              </div>
              <Widgets />
              <Charts />
            </>
          )}
          {/* Add Data section */}
          {activeNav === 2 && (
            <div>
              <div style={{marginBottom: '1rem', background: '#f5f5f5', padding: '1rem', borderRadius: '8px'}}>
                <b>Add Data:</b> Add new patient records with all required details and fee.
              </div>
              <h3>Add New Patient</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <input type="text" placeholder="First Name" value={newPatient.firstName} onChange={e => setNewPatient({ ...newPatient, firstName: e.target.value })} />
                <input type="text" placeholder="Last Name" value={newPatient.lastName} onChange={e => setNewPatient({ ...newPatient, lastName: e.target.value })} />
                <input type="date" placeholder="Date of Birth" value={newPatient.dob} onChange={e => setNewPatient({ ...newPatient, dob: e.target.value })} />
                <input type="text" placeholder="Gender" value={newPatient.gender} onChange={e => setNewPatient({ ...newPatient, gender: e.target.value })} />
                <input type="text" placeholder="Contact Number" value={newPatient.contact} onChange={e => setNewPatient({ ...newPatient, contact: e.target.value })} />
                <input type="email" placeholder="Email" value={newPatient.email} onChange={e => setNewPatient({ ...newPatient, email: e.target.value })} />
                <input type="text" placeholder="Address" value={newPatient.address} onChange={e => setNewPatient({ ...newPatient, address: e.target.value })} />
                <input type="number" placeholder="Fee" value={newPatient.fee} onChange={e => setNewPatient({ ...newPatient, fee: e.target.value })} />
                <button onClick={handleAddPatient}>Add Patient</button>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map(p => (
                    <tr key={p.id}>
                      <td>{p.firstName}</td>
                      <td>{p.lastName}</td>
                      <td>{p.dob}</td>
                      <td>{p.gender}</td>
                      <td>{p.contact}</td>
                      <td>{p.email}</td>
                      <td>{p.address}</td>
                      <td>{p.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* Data section */}
          {activeNav === 3 && (
            <div>
              <div style={{marginBottom: '1rem', background: '#f5f5f5', padding: '1rem', borderRadius: '8px'}}>
                <b>Data:</b> View all records in the system. You can search, filter, and export data.
              </div>
              <h3>View Data</h3>
              {/* Show DataTable for viewing all data */}
              <DataTable adminType={adminType} />
            </div>
          )}

          {/* Income section */}
          {activeNav === 4 && (
            <div>
              <div style={{marginBottom: '1rem', background: '#f5f5f5', padding: '1rem', borderRadius: '8px'}}>
                <b>Income:</b> Calculates and displays the total income from all patient fees.
              </div>
              <h3>Income</h3>
              <p>Total Income: <b>{patients.reduce((sum, p) => sum + (parseFloat(p.fee) || 0), 0).toFixed(2)}</b></p>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th>Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((p, idx) => (
                    <tr key={idx}>
                      <td>{p.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* Default DataTable for other sections */}
          {[1,4,5,6,7].includes(activeNav) && <DataTable adminType={adminType} />}
          <ActivityPanel />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;