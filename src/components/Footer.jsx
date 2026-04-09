import React from 'react';
import './Footer.css';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-about">
                        <Logo light={true} />
                        <p>Empowering the next generation of engineers and leaders with global standards and local values.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#departments">Departments</a></li>
                            <li><a href="#courses">Courses</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <span>𝕏</span> <span>𝑓</span> <span>📷</span> <span>🔗</span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 edu.org. All rights reserved.</p>
                    <p>Privacy Policy | Terms of Service</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
