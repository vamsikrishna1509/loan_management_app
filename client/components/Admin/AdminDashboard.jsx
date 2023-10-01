import React from 'react';
import AdminUsersList from './AdminUsersList'; 

function AdminDashboard() {
  const users = [
    { _id: '1', email: 'admin@example.com' },
    { _id: '2', email: 'user1@example.com' },
    { _id: '3', email: 'user2@example.com' },
  ];

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <AdminUsersList users={users} /> 
    </div>
  );
}

export default AdminDashboard;
