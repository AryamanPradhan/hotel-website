import React, { useState, useEffect } from 'react';
import { Flower, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'A Day Here', href: '#experiences' },
    { name: 'Sanctuaries', href: '#rooms' },
    { name: 'The Building', href: '#tour' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of the navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a 
          href="#" 
          className="navbar-logo"
          onClick={(e) => handleLinkClick(e, '#')}
        >
          <Flower className="logo-icon" />
          <span className="logo-text">
            <span className="logo-subtitle">Hotel</span>
            <span className="logo-title">Red Cherry</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="navbar-link hover-line"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Booking CTA Button (Desktop) */}
        <div className="navbar-actions">
          <button 
            onClick={onOpenBooking} 
            className="btn-primary"
          >
            Request Sanctuary
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="mobile-menu-link"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenBooking();
            }} 
            className="btn-primary mobile-booking-btn"
          >
            Request Sanctuary
          </button>
        </div>
        <div className="mobile-menu-footer">
          <span className="mobile-menu-location">Upper Pelling, Sikkim</span>
          <span className="mobile-menu-email">info@hotelgatecherry.com</span>
        </div>
      </div>
    </nav>
  );
}
