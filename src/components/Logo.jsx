import React from 'react';

const Logo = ({ light = false }) => {
    return (
        <div className={`logo-container ${light ? 'light' : ''}`}>
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
                <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.1" />
                {/* Globe Lines */}
                <path d="M50 2C50 2 85 25 85 50C85 75 50 98 50 98C50 98 15 75 15 50C15 25 50 2 50 2Z" stroke="currentColor" strokeWidth="3" opacity="0.6" />
                <path d="M15 50H85" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                <path d="M50 2V98" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

                {/* Graduation Cap */}
                <path d="M30 35L50 20L70 35L50 50L30 35Z" fill="var(--accent-color)" stroke="var(--primary-color)" strokeWidth="2" />
                <path d="M40 43V55C40 55 45 60 50 60C55 60 60 55 60 55V43" fill="var(--primary-color)" stroke="var(--primary-color)" strokeWidth="1" />
                <path d="M70 35V45" stroke="var(--primary-color)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="70" cy="48" r="3" fill="var(--primary-color)" />
            </svg>
            <div className="logo-text-wrapper">
                <div className="logo-main">
                    <span className="logo-primary">Edu</span>
                    <span className="logo-secondary">.com</span>
                </div>
                <div className="logo-sub">LEARNING PLATFORM</div>
            </div>
        </div>
    );
};

export default Logo;
