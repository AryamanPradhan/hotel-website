import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Experiences from './components/Experiences';
import Rooms from './components/Rooms';
import BuildingTour from './components/BuildingTour';
import BookingInquiry from './components/BookingInquiry';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedRoom, setPreselectedRoom] = useState('general');

  const handleOpenBooking = (roomName = 'general') => {
    setPreselectedRoom(roomName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking('general')} />

      {/* Hero Landing */}
      <Hero onOpenBooking={() => handleOpenBooking('general')} />

      {/* Main Sections */}
      <main>
        {/* Story Section */}
        <Narrative />

        {/* Experience Timeline */}
        <Experiences />

        {/* Room Grid */}
        <Rooms onOpenBooking={handleOpenBooking} />

        {/* Building & Spaces */}
        <BuildingTour />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          {/* Logo and Intro */}
          <div className="footer-col">
            <div className="footer-logo">
              <span className="footer-logo-sub">Hotel</span>
              <span className="footer-logo-title">Red Cherry</span>
            </div>
            <p className="footer-description">
              An experience-led sanctuary nestled in the cherry orchards of Upper Pelling. Built upon alpine traditions, crafted for the conscious traveler.
            </p>
          </div>

          {/* Site Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Explore</h4>
            <div className="footer-links">
              <a href="#story" className="footer-link hover-line">Our Story</a>
              <a href="#experiences" className="footer-link hover-line">A Day Here</a>
              <a href="#rooms" className="footer-link hover-line">Sanctuaries</a>
              <a href="#tour" className="footer-link hover-line">The Building</a>
            </div>
          </div>

          {/* Contacts */}
          <div className="footer-col">
            <h4 className="footer-col-title">Reach Us</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>Upper Pelling, Sikkim, Chumbong Road (Near Helipad area)</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <span>+91 98765 43210</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <span>info@hotelgatecherry.com</span>
              </div>
            </div>
          </div>

          {/* Social Connect */}
          <div className="footer-col">
            <h4 className="footer-col-title">Connect</h4>
            <p className="footer-connect-text">Follow our seasonal blooms and winter peaks.</p>
            <div className="footer-social-row">
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Hotel Red Cherry. All rights reserved.</span>
          <span>Crafted with Alpine Heart in Sikkim</span>
        </div>
      </footer>

      {/* Floating Booking Drawer */}
      <BookingInquiry 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        preselectedRoom={preselectedRoom} 
      />
    </div>
  );
}
