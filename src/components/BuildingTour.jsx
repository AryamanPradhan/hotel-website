import React from 'react';
import { Telescope, Flame, Soup, Flower } from 'lucide-react';

export default function BuildingTour() {
  const tourSpaces = [
    {
      icon: Telescope,
      title: "Rooftop Observatory Deck",
      description: "Equipped with custom loungers, warm blankets, and a professional telescope, our rooftop observatory offers the highest, unobstructed stargazing and peak-viewing experience in Upper Pelling."
    },
    {
      icon: Flame,
      title: "The Fireside Hearth & Library",
      description: "Our wood-paneled lobby lounge features a massive local slate fireplace and a curated library of regional history, maps, and literature. Perfect for cozy evenings and hot tea."
    },
    {
      icon: Soup,
      title: "The Glass Dining Pavilion",
      description: "A bright, fully glass-enclosed pavilion serving organic, farm-to-table meals. Dine surrounded by views of rolling hills, tall pines, and the snow-capped mountain range."
    },
    {
      icon: Flower,
      title: "The Red Cherry Gardens",
      description: "Our entrance is flanked by mature Himalayan cherry trees. In autumn, the paths are covered in pink petals, creating a magical entrance corridor that connects our guests to nature."
    }
  ];

  return (
    <section id="tour" className="tour-section section-padding">
      <div className="tour-container">
        <div className="tour-header">
          <span className="section-subtitle">Space & Form</span>
          <h2 className="section-title">The Building Experience</h2>
          <p className="tour-intro">
            Designed for connection and reflection, our communal spaces are built with slate, cedar, and expansive glass to blend the boundary between the interior warmth and alpine beauty.
          </p>
        </div>

        <div className="tour-grid">
          {tourSpaces.map((space, idx) => {
            const Icon = space.icon;
            return (
              <div key={idx} className="tour-card">
                <div className="tour-card-icon-wrapper">
                  <Icon size={24} className="tour-icon" />
                </div>
                <div className="tour-card-info">
                  <h3 className="tour-card-title">{space.title}</h3>
                  <p className="tour-card-desc">{space.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
