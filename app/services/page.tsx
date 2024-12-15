import React from 'react';
import './Services.css'; // Optional CSS file for styling

const Services: React.FC = () => {
  return (
    <div className="services-container">
      <header className="services-header">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">Explore the wide range of services we offer to help your business grow.</p>
      </header>

      <section className="services-list">
        <h2 className="section-title">What We Offer</h2>
        <ul className="service-items">
          <li className="service-item">Web Development</li>
          <li className="service-item">Mobile App Development</li>
          <li className="service-item">Digital Marketing</li>
          <li className="service-item">Consulting</li>
          <li className="service-item">E-commerce Solutions</li>
        </ul>
      </section>

      <footer className="services-footer">
        <p className="footer-text">© 2024 Services | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Services;
