import React from 'react';

export default function Narrative() {
  return (
    <section id="story" className="narrative-section section-padding">
      <div className="narrative-container">
        {/* Story Text */}
        <div className="narrative-content">
          <span className="section-subtitle">The Design Philosophy</span>
          <h2 className="section-title">A Sanctuary Crafted for the Mountain Soul</h2>
          <p className="narrative-paragraph">
            Hotel Red Cherry is not just a place to rest—it is an architectural tribute to the rugged serenity of Sikkim. Constructed using locally sourced black mountain stone and hand-planed timber, the entire building is designed to breathe in harmony with the pine forests and peaks that envelop it.
          </p>
          <p className="narrative-paragraph">
            Every corridor, window, and terrace has been positioned to capture the ever-changing canvas of Mount Kanchenjunga. When autumn arrives in November, the property transforms as the wild Himalayan cherry trees burst into pink blooms, greeting you right at our entry gate and trailing into the valleys below.
          </p>
          
          {/* Stats Grid */}
          <div className="narrative-stats">
            <div className="stat-card">
              <span className="stat-value">7,200 ft</span>
              <span className="stat-label">Altitude of Tranquility</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-value">100%</span>
              <span className="stat-label">Sourced Locally</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-value">Nov</span>
              <span className="stat-label">Blossom Bloom Season</span>
            </div>
          </div>
        </div>

        {/* Story Images Collage */}
        <div className="narrative-images">
          <div className="image-wrapper-main">
            <img 
              src="/assets/fireplace_lounge.png" 
              alt="Cozy fireplace lounge with glass windows" 
              className="narrative-image-main"
            />
          </div>
          <div className="image-wrapper-sub animate-float">
            <img 
              src="/assets/local_dining.png" 
              alt="Local organic tea and breakfast table" 
              className="narrative-image-sub"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
