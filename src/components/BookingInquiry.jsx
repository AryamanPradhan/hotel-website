import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Mail, Phone, ChevronRight, CheckCircle } from 'lucide-react';

export default function BookingInquiry({ isOpen, onClose, preselectedRoom }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'general',
    guests: '2',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedRoom) {
      setFormData((prev) => ({
        ...prev,
        roomType: preselectedRoom
      }));
    }
  }, [preselectedRoom, isOpen]);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) {
      newErrors.checkOut = 'Check-out date is required';
    } else if (formData.checkIn && newFormDataDate(formData.checkOut) <= newFormDataDate(formData.checkIn)) {
      newErrors.checkOut = 'Check-out must be after check-in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const newFormDataDate = (dateStr) => {
    return new Date(dateStr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
      }, 600);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      roomType: 'general',
      guests: '2',
      message: ''
    });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div 
        className="drawer-container animate-scale-up" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="drawer-header">
          <h2 className="drawer-title">
            {isSubmitted ? 'Request Confirmed' : 'Request Your Sanctuary'}
          </h2>
          <button onClick={onClose} className="drawer-close-btn" aria-label="Close Drawer">
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="drawer-body">
          {isSubmitted ? (
            <div className="success-panel">
              <CheckCircle className="success-icon" size={64} />
              <h3 className="success-title">Inquiry Sent Successfully</h3>
              <p className="success-desc">
                Thank you, <strong>{formData.fullName}</strong>. We have received your sanctuary inquiry for the <strong>{formData.roomType === 'general' ? 'Hotel Red Cherry' : formData.roomType}</strong>.
              </p>
              <p className="success-note">
                Our local hosts in Upper Pelling will review availability and contact you via email (<strong>{formData.email}</strong>) or phone within 24 hours.
              </p>
              <button onClick={handleReset} className="btn-primary success-reset-btn">
                Close Details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form">
              {/* Name */}
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div className="input-icon-wrapper">
                  <User size={16} className="input-field-icon" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                    placeholder="E.g., Tenzing Sherpa"
                  />
                </div>
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="input-icon-wrapper">
                  <Mail size={16} className="input-field-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    placeholder="E.g., contact@domain.com"
                  />
                </div>
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              {/* Phone */}
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <div className="input-icon-wrapper">
                  <Phone size={16} className="input-field-icon" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                    placeholder="E.g., +91 9800220107"
                  />
                </div>
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              {/* Dates */}
              <div className="form-row-grid">
                <div className="form-group">
                  <label className="form-label">Check-In</label>
                  <div className="input-icon-wrapper">
                    <Calendar size={16} className="input-field-icon" />
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className={`form-input ${errors.checkIn ? 'input-error' : ''}`}
                    />
                  </div>
                  {errors.checkIn && <span className="error-text">{errors.checkIn}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Check-Out</label>
                  <div className="input-icon-wrapper">
                    <Calendar size={16} className="input-field-icon" />
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className={`form-input ${errors.checkOut ? 'input-error' : ''}`}
                    />
                  </div>
                  {errors.checkOut && <span className="error-text">{errors.checkOut}</span>}
                </div>
              </div>

              {/* Room Type */}
              <div className="form-group">
                <label className="form-label">Room or Sanctuary Type</label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="general">General Building & Stay Inquiry</option>
                  <option value="Kanchenjunga Vista Suite">Kanchenjunga Vista Suite</option>
                  <option value="Cherry Blossom Deluxe">Cherry Blossom Deluxe</option>
                  <option value="Family Attic Sanctuary">Family Attic Sanctuary</option>
                </select>
              </div>

              {/* Guests */}
              <div className="form-group">
                <label className="form-label">Number of Guests</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="1">1 Traveler</option>
                  <option value="2">2 Travelers</option>
                  <option value="3">3 Travelers</option>
                  <option value="4">4 Travelers</option>
                  <option value="5+">5+ Travelers</option>
                </select>
              </div>

              {/* Custom Message */}
              <div className="form-group">
                <label className="form-label">Special Requests (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="4"
                  placeholder="Share details of your travel plans, dietary requirements, or sightseeing interests..."
                ></textarea>
              </div>

              <button type="submit" className="btn-accent form-submit-btn">
                <span>Submit Stay Request</span>
                <ChevronRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
