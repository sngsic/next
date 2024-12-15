import React from 'react';
import './Support.css'; // Optional CSS file for styling

const Support: React.FC = () => {
  return (
    <div className="support-container">
      <header className="support-header">
        <h1 className="support-title">Support</h1>
        <p className="support-subtitle">We are here to help! Reach out to our support team for any assistance you need.</p>
      </header>

      <section className="support-details">
        <h2 className="details-title">How Can We Help You?</h2>
        <ul className="support-options">
          <li className="support-option">Technical Support</li>
          <li className="support-option">Billing and Account Inquiries</li>
          <li className="support-option">Product Assistance</li>
          <li className="support-option">General Inquiries</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Contact Support</h2>
        <p className="section-description">If you need immediate assistance, please contact us via the form below:</p>
        <form className="support-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" id="name" name="name" className="form-input" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" id="email" name="email" className="form-input" placeholder="Enter your email address" required />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" className="form-input" placeholder="Enter your message" rows={4} required></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>

      <footer className="support-footer">
        <p className="footer-text">© 2024 Support | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Support;
