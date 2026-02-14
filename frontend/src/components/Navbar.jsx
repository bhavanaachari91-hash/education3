import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">edu.com</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#departments">Departments</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#admission" className="btn btn-primary btn-sm">Join Now</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
