import React, { useState } from 'react';
import './AdmissionForm.css';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: 'Computer Science',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const response = await fetch('http://localhost:5000/api/admission', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setStatus('Application Sent Successfully!');
                setFormData({ name: '', email: '', phone: '', department: 'Computer Science', message: '' });
            } else {
                setStatus('Error sending application. Please try again.');
            }
        } catch (err) {
            setStatus('Server Error. Please try again later.');
        }
    };

    return (
        <section id="admission" className="admission">
            <div className="container admission-container">
                <div className="admission-info animate-fade">
                    <h2>Apply for Admission</h2>
                    <p>Begin your journey towards a global career. Fill out the form and our admissions team will contact you within 24 hours.</p>
                    <div className="contact-details">
                        <div className="detail-item">
                            <span>📍</span> 123 Education Lane, Knowledge City
                        </div>
                        <div className="detail-item">
                            <span>📞</span> +1 234 567 890
                        </div>
                        <div className="detail-item">
                            <span>✉️</span> admissions@edu.org
                        </div>
                    </div>
                </div>

                <div className="admission-form-wrapper glass animate-slide">
                    <form onSubmit={handleSubmit} className="admission-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+1 234..." />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Intended Department</label>
                            <select name="department" value={formData.department} onChange={handleChange}>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Electrical">Electrical Engineering</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Mechanical">Mechanical Engineering</option>
                                <option value="Civil">Civil Engineering</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Message / Statement of Purpose</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us why you want to join..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit Application</button>
                        {status && <p className="status-msg">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AdmissionForm;
