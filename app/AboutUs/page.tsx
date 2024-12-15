import React from 'react';
import './AboutUs.css'; // Import CSS file for styling

const AboutUs = () => {
    return (
        <div className="aboutus-container">
            <header className="aboutus-header">
                <h1 className="aboutus-title">About Us</h1>
                <p className="aboutus-description">
                    We are a passionate team dedicated to delivering innovative solutions and making a difference in the world.
                </p>
            </header>

            <section className="aboutus-section">
                <h2 className="aboutus-sectionTitle">Our Mission</h2>
                <p className="aboutus-sectionContent">
                    Our mission is to provide high-quality services that empower businesses to thrive in a rapidly evolving digital landscape.
                </p>
            </section>

            <section className="aboutus-section">
                <h2 className="aboutus-sectionTitle">Our Vision</h2>
                <p className="aboutus-sectionContent">
                    We envision a future where technology enables businesses to operate more efficiently, creatively, and sustainably.
                </p>
            </section>

            <footer className="aboutus-footer">
                <p className="footer-text">© 2024 About Us | All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default AboutUs;
