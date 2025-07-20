import React, { useState } from 'react';
import './RequestForm.css';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert('✅ Request sent successfully!');
      } else {
        alert(`❌ Failed to send request: ${result.message || 'Try again.'}`);
      }
    } catch (error) {
      console.error(error);
      alert('❌ Failed to send request, try again.');
    }
  };

  return (
    <div className="request-form-container">
      <div className="request-form-box">
        <h2>Get in Touch</h2>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>
          Fill out the form below and we'll get back to you soon.
        </p>
        <div className="form-group">
          <label>Full Name *</label>
          <input type="text" name="name" placeholder="Enter your full name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone Number *</label>
          <input type="text" name="phone" placeholder="Enter your phone number" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Location *</label>
          <input type="text" name="location" placeholder="City, State" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Service Category *</label>
          <select name="category" defaultValue="" onChange={handleChange}>
            <option value="" disabled hidden>Select a category</option>
            <option>Photography</option>
            <option>Videography</option>
            <option>Wall Art & Murals</option>
            <option>Tailoring & Boutique</option>
            <option>Mehndi Art</option>
            <option>Makeup & Hair</option>
            <option>Tattoo Art</option>
            <option>Nail Art</option>
            <option>Baking & Home Bakers</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-buttons">
          <button className="cancel-btn">Cancel</button>
          <button className="send-btn" onClick={handleSubmit}>Send Request</button>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
