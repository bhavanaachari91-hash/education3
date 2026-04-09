import React, { useState } from 'react';
import './Courses.css';
import businessMgmtImg from '../assets/images/business-mgmt.jpg';
import intRelationsImg from '../assets/images/int-relations.png';
import aiDataScienceImg from '../assets/images/ai-data-science.jpg';
import executiveMbaImg from '../assets/images/executive-mba.jpg';
import btechHonorsImg from '../assets/images/btech-honors.png';

const Courses = () => {
    const [activeTab, setActiveTab] = useState('international');

    const courses = {
        international: [
            { title: 'Global Business Mgmt', duration: '2 Years', location: 'UK / USA / Online', image: businessMgmtImg },
            { title: 'International Relations', duration: '3 Years', location: 'Europe / Asia', image: intRelationsImg },
            { title: 'Advanced AI & Data Science', duration: '1.5 Years', location: 'Global Partnership', image: aiDataScienceImg }
        ],
        domestic: [
            { title: 'B.Tech Honors', duration: '4 Years', location: 'Main Campus', image: btechHonorsImg },
            { title: 'Master of Architecture', duration: '2 Years', location: 'Research Wing', image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
            { title: 'Executive MBA', duration: '1 Year', location: 'City Campus', image: executiveMbaImg }
        ]
    };

    return (
        <section id="courses" className="courses bg-white">
            <div className="container">
                <div className="section-title">
                    <h2>Our Courses</h2>
                    <div className="underline"></div>
                    <p>Tailored programs for global and local aspirations.</p>
                </div>

                <div className="tabs">
                    <button
                        className={`tab-btn ${activeTab === 'international' ? 'active' : ''}`}
                        onClick={() => setActiveTab('international')}
                    >
                        International Programs
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'domestic' ? 'active' : ''}`}
                        onClick={() => setActiveTab('domestic')}
                    >
                        Domestic Programs
                    </button>
                </div>

                <div className="course-grid">
                    {courses[activeTab].map((course, index) => (
                        <div key={index} className="course-card animate-fade">
                            <div className="course-image">
                                <img src={course.image} alt={course.title} />
                            </div>
                            <div className="course-info">
                                <h3>{course.title}</h3>
                                <div className="details">
                                    <span>⏱ {course.duration}</span>
                                    <span>📍 {course.location}</span>
                                </div>
                                <button className="btn btn-outline btn-sm">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
