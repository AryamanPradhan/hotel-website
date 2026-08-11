import React from 'react';
import { Compass, Landmark, Waves, ShieldAlert, Sparkles } from 'lucide-react';

export default function LocalAttractions() {
  const sights = [
    {
      num: "01",
      icon: Compass,
      title: "Pemayangtse Monastery",
      description: "Established in the 17th century, this ancient Buddhist monastery is a short, scenic drive from the hotel. Famous for its intricate paintings, historic sculptures, and the wooden model of Sangtok Palri."
    },
    {
      num: "02",
      icon: Landmark,
      title: "Rabdentse Ruins",
      description: "Step back into Sikkim's royal history. Located just minutes away, the palace ruins offer an immersive historical walk with panoramic views overlooking the deep forest valley."
    },
    {
      num: "03",
      icon: Waves,
      title: "Kanchenjunga Waterfalls",
      description: "A spectacular, powerful glacier waterfall fed by the snows of Mt. Kanchenjunga. Situated along a beautiful drive from Pelling, it is a refreshing sight nestled in lush greenery."
    },
    {
      num: "04",
      icon: ShieldAlert,
      title: "Singshore Bridge",
      description: "One of the highest suspension bridges in Asia, connecting two steep green ridges. Perfect for adventurers seeking adrenaline-filled walks and spectacular views of the gorge."
    },
    {
      num: "05",
      icon: Sparkles,
      title: "Khecheopalri Lake",
      description: "A highly sacred, leaf-free wish-fulfilling lake enveloped by dense, mystical forests. Visitors can experience its tranquil spiritual aura and observe local mountain birdlife."
    }
  ];

  return (
    <section id="attractions" className="attractions-section section-padding">
      <div className="attractions-container">
        <div className="attractions-header">
          <span className="section-subtitle">Explore Pelling</span>
          <h2 className="section-title">Top Sights Nearby</h2>
          <p className="attractions-intro">
            Staying at Hotel Red Cherry places you at the heart of West Sikkim's historic ruins, ancient monasteries, and breathtaking natural wonders.
          </p>
        </div>

        <div className="attractions-grid">
          {sights.map((sight) => {
            const Icon = sight.icon;
            return (
              <div key={sight.num} className="attraction-card">
                <div className="attraction-card-header">
                  <span className="attraction-number">{sight.num}</span>
                  <div className="attraction-icon-wrapper">
                    <Icon size={18} className="attraction-icon" />
                  </div>
                </div>
                <h3 className="attraction-title">{sight.title}</h3>
                <p className="attraction-desc">{sight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
