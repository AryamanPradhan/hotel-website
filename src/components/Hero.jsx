import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const handleScrollToStory = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#story');
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      
      <div className="hero-content animate-fade-in-up">
        <span className="hero-subtitle">Upper Pelling, Sikkim</span>
        <h1 className="hero-title">
          Where Mountains Touch the Sky & Blossoms Paint the Earth
        </h1>
        <p className="hero-description">
          Perched on the serene ridges of Upper Pelling, Hotel Red Cherry offers an experience-first refuge constructed with local stone, wood accents, and direct, uninterrupted vistas of Mount Kanchenjunga.
        </p>
        <div className="hero-buttons">
          <button 
            onClick={onOpenBooking} 
            className="btn-accent"
          >
            Plan Your Sanctuary
          </button>
          <a 
            href="#story" 
            onClick={handleScrollToStory}
            className="btn-secondary btn-hero-outline"
          >
            Explore Our Story
          </a>
        </div>
      </div>

      <a 
        href="#story" 
        onClick={handleScrollToStory}
        className="hero-scroll-indicator animate-float"
        aria-label="Scroll Down"
      >
        <span className="scroll-text">Discover More</span>
        <ChevronDown size={20} className="scroll-icon" />
      </a>
    </section>
  );
}
