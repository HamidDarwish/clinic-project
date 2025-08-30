import React, { useState } from 'react';
import './DataTable.css';

const today = new Date().toISOString().slice(0, 10);
const initialRows = [
  { id: 1, name: 'Patient A', status: 'Active', date: today },
  { id: 2, name: 'Patient B', status: 'Inactive', date: today },
  { id: 3, name: 'Patient C', status: 'Active', date: '2025-08-29' },
];

function DataTable({ adminType }) {
  const [search, setSearch] = useState('');
  const [rows, setRows] = useState(initialRows);
  const [editId, setEditId] = useState(null);
  const [editRow, setEditRow] = useState({ name: '', status: '' });
  const [newRow, setNewRow] = useState({ name: '', status: '' });

  // Only show today's data for limited admin
  const visibleRows = adminType === 'full'
    ? rows
    : rows.filter(r => r.date === today);

  const filteredRows = visibleRows.filter(r => r.name.toLowerCase().includes(search.toLowerCase()));

  // Add new row
  const handleAdd = () => {
    if (newRow.name && newRow.status) {
      const nextId = rows.length > 0 ? Math.max(...rows.map(r => r.id)) + 1 : 1;
      setRows([...rows, { id: nextId, name: newRow.name, status: newRow.status, date: today }]);
      setNewRow({ name: '', status: '' });
    }
  };

  // Edit row
  const handleEditStart = (row) => {
    setEditId(row.id);
    setEditRow({ name: row.name, status: row.status });
  };
  const handleEditSave = (id) => {
    setRows(rows.map(r => r.id === id ? { ...r, ...editRow } : r));
    setEditId(null);
    setEditRow({ name: '', status: '' });
  };
  const handleDelete = (id) => {
    setRows(rows.filter(r => r.id !== id));
  };

  return (
    <section className="datatable-section">
      <div className="datatable-header">
        <input
          type="text"
          placeholder="Search table..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button>Export CSV</button>
        <button>Export Excel</button>
        <button>Export JSON</button>
      </div>
      {/* Add new row for both admin types */}
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Name"
          value={newRow.name}
          onChange={e => setNewRow({ ...newRow, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={newRow.status}
          onChange={e => setNewRow({ ...newRow, status: e.target.value })}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <table className="datatable-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                {editId === row.id ? (
                  <input
                    type="text"
                    value={editRow.name}
                    onChange={e => setEditRow({ ...editRow, name: e.target.value })}
                  />
                ) : (
                  row.name
                )}
              </td>
              <td>
                {editId === row.id ? (
                  <input
                    type="text"
                    value={editRow.status}
                    onChange={e => setEditRow({ ...editRow, status: e.target.value })}
                  />
                ) : (
                  row.status
                )}
              </td>
              <td>{row.date}</td>
              <td>
                {editId === row.id ? (
                  <>
                    <button onClick={() => handleEditSave(row.id)}>Save</button>
                    <button onClick={() => setEditId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditStart(row)}
                      disabled={adminType !== 'full' && row.date !== today}
                    >Edit</button>
                    <button
                      onClick={() => handleDelete(row.id)}
                      disabled={adminType !== 'full' && row.date !== today}
                    >Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default DataTable;
