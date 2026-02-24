import React from 'react';
import './Navbar.css';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <Logo />
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
