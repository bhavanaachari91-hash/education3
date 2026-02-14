import React from 'react';
import './Departments.css';

const departments = [
    { name: 'Computer Science', icon: '💻', desc: 'Cutting-edge AI, Software Engineering, and Cyber Security.' },
    { name: 'Electrical Engineering', icon: '⚡', desc: 'Power systems, microelectronics, and control networks.' },
    { name: 'Electronics', icon: '📟', desc: 'Semiconductors, Telecommunications, and Embedded systems.' },
    { name: 'Mechanical Engineering', icon: '⚙️', desc: 'Robotics, Thermodynamics, and Advanced Manufacturing.' },
    { name: 'Civil Engineering', icon: '🏗️', desc: 'Sustainable Infrastructure, Urban Planning, and Structural design.' }
];

const Departments = () => {
    return (
        <section id="departments" className="departments">
            <div className="container">
                <div className="section-title">
                    <h2>Academic Departments</h2>
                    <div className="underline"></div>
                    <p>Over 100+ students per department thriving under expert guidance.</p>
                </div>
                <div className="dept-grid">
                    {departments.map((dept, index) => (
                        <div key={index} className="dept-card glass">
                            <div className="dept-icon">{dept.icon}</div>
                            <h3>{dept.name}</h3>
                            <p>{dept.desc}</p>
                            <a href="#" className="dept-link">Explore Dept →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Departments;
