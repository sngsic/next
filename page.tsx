import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import './DB.css';

const DB = () => {
    return (
        <div className="container">
            <header className="db-header">
                <div className="db-headerContent">
                    <h1 className="db-title">DashBoard</h1>
                    <nav className="db-nav">
                        <a href="/home" className="db-link">Home</a>
                        <a href="/AboutUs" className="db-link">About Us</a>
                        <a href="/services" className="db-link">Services</a>
                        <a href="/contact" className="db-link">Contact</a>
                        <a href="/support" className="db-link">Support</a>
                        <a href="/Careers" className="db-link">Careers</a>
                    </nav>
                </div>
            </header>

            <section className="db-section">
                <h2 className="db-sectionTitle">About Website</h2>
                <p className="db-sectionContent">
                    Welcome to AI Insights<br />
                    At AI Insights, we explore the cutting-edge world of Artificial Intelligence and how it&apos;s transforming industries, enhancing human potential, and reshaping the future. Our platform provides you with valuable insights, resources, and updates on AI technology, from machine learning to deep learning, natural language processing, robotics, and beyond.<br />

                    Whether you&apos;re a curious beginner or an AI expert, we offer comprehensive articles, tutorials, case studies, and news to keep you informed about the latest developments in AI. Discover how businesses are utilizing AI to optimize operations, improve customer experiences, and drive innovation. Learn about the ethical considerations and challenges surrounding AI and how it is changing the way we interact with technology every day.<br />

                    Explore our interactive tools, visualizations, and AI-powered features to experience firsthand the power of artificial intelligence.<br />

                    Join us on this exciting journey as we uncover the potential of AI to transform the world and empower the future.
                </p>

                <div className="db-figure">
                    <Image 
                        src="https://img.freepik.com/premium-photo/artificial-intelligence-metaverse-background-banner-showing-ai-technology-generative-ai_620624-6973.jpg" 
                        alt="DB Diagram" 
                        width={800} 
                        height={400} 
                        className="db-image"
                    />
                    <figcaption className="db-figureCaption">Humanoid Robot</figcaption>
                </div>

                <div className="db-figure">
                    <Image 
                        src="https://files.oaiusercontent.com/file-SdguJ4QbMLRt3f9nubq2fc?se=2024-12-14T08%3A01%3A30Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd914ddd2-2528-4cb1-8090-ff212b319bf5.webp&sig=5GkmqepDDIoWQuo0c826x1xjvfpsdmeg5tXa70YD2Po%3D" 
                        alt="DB Icon" 
                        width={800} 
                        height={400} 
                        className="db-image"
                    />
                    <figcaption className="db-figureCaption">CITY OF Artificial Intelligence</figcaption>
                </div>
            </section>

            <footer className="db-footer">
                <p className="db-footerText">&copy; 2024 DB. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default DB;
