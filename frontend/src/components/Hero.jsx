import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content animate-fade">
                    <span className="badge">Excellence in Education</span>
                    <h1>Shaping Tomorrow's <br /><span>Global Leaders</span></h1>
                    <p>
                        Experience world-class higher education with 100+ expert faculty across
                        cutting-edge departments. Join the community of elite scholars.
                    </p>
                    <div className="hero-btns">
                        <a href="#courses" className="btn btn-primary">Our Courses</a>
                        <a href="#about" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Learn More</a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <h3>100+</h3>
                            <p>Expert Faculty</p>
                        </div>
                        <div className="stat-item">
                            <h3>5+</h3>
                            <p>Specialized Depts</p>
                        </div>
                        <div className="stat-item">
                            <h3>1000+</h3>
                            <p>Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
