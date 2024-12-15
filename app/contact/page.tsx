'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          We&apos;re here to help! Get in touch with us for any inquiries.
        </p>
      </header>

      <section className="contact-form-section">
        <h2 className="form-title">Send Us a Message</h2>

        {status === 'success' && (
          <p className="success-message">
            Thank you for your message! We&apos;ll get back to you shortly.
          </p>
        )}
        {status === 'error' && (
          <p className="error-message">Oops, something went wrong. Please try again later.</p>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              placeholder="Enter your message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>

      <footer className="contact-footer">
        <p className="footer-text">© 2024 Contact Us | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Contact;
