import React from 'react'
const Admin = () => {
  return (
    <div className="page admin">
      <h1>Admin Panel</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Pavan</td>
            <td>Admin</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Rohith</td>
            <td>User</td>
            <td>Blocked</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
