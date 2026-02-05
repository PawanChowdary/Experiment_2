import React from 'react'
const Dashboard = () => {
  return (
    <div className="page dashboard">
      <h1>Dashboard</h1>

      <div className="stats">
        <div className="stat-card">
          <h2>Users</h2>
          <p>1,245</p>
        </div>

        <div className="stat-card">
          <h2>Revenue</h2>
          <p>Rs 32,450</p>
        </div>

        <div className="stat-card">
          <h2>Active Sessions</h2>
          <p>87</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
