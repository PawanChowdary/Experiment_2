import React from "react";
const Landing = () => {
  return (
    <div className="page landing">
      <section className="hero">
        <h1>Build Faster with Our Platform</h1>
        <p>All-in-one solution for developers and teams.</p>
        <button className="primary-btn">Get Started</button>
      </section>

      <section className="features">
        <div className="card">Fast Performance</div>
        <div className="card">Secure Access</div>
        <div className="card">Analytics</div>
      </section>
    </div>
  );
};

export default Landing;
