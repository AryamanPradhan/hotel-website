import React, { useState } from 'react';
import { Sun, Trees, Compass, Coffee, Flame } from 'lucide-react';

export default function Experiences() {
  const [activeTab, setActiveTab] = useState(0);

  const timelineData = [
    {
      time: "05:30 AM",
      title: "Dawn on the Observatory Deck",
      description: "Wake up early and step onto our highest rooftop observatory deck. Watch the first rays of the sun slowly paint the snowy cap of Mount Kanchenjunga in gold, orange, and soft rose hues while the morning mist floats over the valleys below.",
      badge: "Peak Visibility",
      icon: Sun,
      color: "#D4AF37"
    },
    {
      time: "09:00 AM",
      title: "Forest Trails & Monastic Paths",
      description: "Embark on a guided hike through old pine groves and wild cherry trees. The trail takes you to the historic Sangacholing Monastery (built in the 17th century), walking along pathways dotted with traditional prayer flags and panoramic views.",
      badge: "Guided Walk",
      icon: Trees,
      color: "#1A3025"
    },
    {
      time: "01:00 PM",
      title: "Traditional Organic Lunch",
      description: "Savor a carefully curated traditional Sikkimese lunch in our glass dining room. Every dish features organic vegetables, herbs, and grains sourced directly from local farmers in Upper Pelling and Chumbong, paired with fresh chutneys.",
      badge: "Traditional Cuisine",
      icon: Compass,
      color: "#E8A7A1"
    },
    {
      time: "04:30 PM",
      title: "Temi Tea & Hearthside Reading",
      description: "Warm up with freshly brewed Temi tea (Sikkim's prized organic black tea) served alongside local snacks. Relax in our library lounge by the fireplace, browsing our collection of Himalayan travel diaries, maps, and botanical books.",
      badge: "Local Brews",
      icon: Coffee,
      color: "#C97E77"
    },
    {
      time: "07:30 PM",
      title: "Bonfire & Himalayan Stargazing",
      description: "Gather around our outdoor stone fire pit as the temperature drops. Under one of the clearest night skies in the Eastern Himalayas, enjoy a cozy bonfire, local storytelling, and stargazing with our house telescope.",
      badge: "Outdoor Hearth",
      icon: Flame,
      color: "#FF5E36"
    }
  ];

  const CurrentIcon = timelineData[activeTab].icon;

  return (
    <section id="experiences" className="experiences-section section-padding">
      <div className="experiences-container">
        <div className="experiences-header">
          <span className="section-subtitle">A Curated Journey</span>
          <h2 className="section-title">A Day in Upper Pelling</h2>
          <p className="experiences-intro">
            We believe a stay at Red Cherry should be a sensory journey. Discover the natural, cultural, and culinary rhythms that define life in these hills.
          </p>
        </div>

        {/* Timeline Tabs */}
        <div className="experiences-tabs">
          {timelineData.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <button
                key={idx}
                className={`experience-tab-btn ${activeTab === idx ? 'experience-tab-active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <IconComponent 
                  size={18} 
                  style={{ color: activeTab === idx ? 'var(--color-pink-dark)' : 'var(--color-gray)' }} 
                />
                <span className="tab-time">{item.time}</span>
              </button>
            );
          })}
        </div>

        {/* Timeline Content Card */}
        <div className="experience-card animate-scale-up">
          <div className="experience-card-info">
            <span className="card-time-badge" style={{ color: timelineData[activeTab].color }}>
              {timelineData[activeTab].time}
            </span>
            <h3 className="card-experience-title">
              {timelineData[activeTab].title}
            </h3>
            <p className="card-experience-desc">
              {timelineData[activeTab].description}
            </p>
            <div className="card-experience-meta">
              <span className="experience-meta-badge">
                {timelineData[activeTab].badge}
              </span>
            </div>
          </div>

          <div className="experience-card-visual">
            <div className="visual-graphic-container">
              <div 
                className="visual-glow-circle" 
                style={{ 
                  backgroundColor: timelineData[activeTab].color, 
                  opacity: 0.15 
                }}
              ></div>
              <CurrentIcon 
                size={80} 
                className="visual-large-icon animate-float"
                style={{ color: timelineData[activeTab].color }}
              />
              <div className="visual-blossom-accent">🌸</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
