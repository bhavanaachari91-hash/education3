import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Departments from './components/Departments';
import Courses from './components/Courses';
import AdmissionForm from './components/AdmissionForm';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Departments />
            <Courses />
            <AdmissionForm />
            <Footer />
        </div>
    );
}

export default App;
