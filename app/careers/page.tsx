import Link from 'next/link';
import './Careers.css'; // Assuming you have your CSS file for styling

const Careers = () => {
    return (
        <div className="careers-container">
            <header className="careers-header">
                <h1 className="careers-title">Careers</h1>
                <p className="careers-subtitle">Join our amazing team and make a difference.</p>
            </header>

            <section className="job-listings">
                <h2 className="section-title">Available Positions</h2>
                
                {/* Example Job Listing */}
                <div className="job-listing">
                    <h3 className="job-title">Frontend Developer</h3>
                    <p className="job-description">We&apos;re looking for a skilled Frontend Developer to join our team...</p>
                    <Link href="/apply" className="apply-btn">
                        Apply Now
                    </Link>
                </div>

                <div className="job-listing">
                    <h3 className="job-title">Backend Developer</h3>
                    <p className="job-description">A Backend Developer to help build robust and scalable services...</p>
                    <Link href="/apply" className="apply-btn">
                        Apply Now
                    </Link>
                </div>

                {/* Add more job listings as necessary */}
            </section>

            <footer className="careers-footer">
                <p className="footer-text">© 2024 Careers | All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Careers;
