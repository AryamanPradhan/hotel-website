import React from 'react';
import { Plane, Train, Car, PhoneCall } from 'lucide-react';

export default function HowToReach() {
  const options = [
    {
      icon: Plane,
      title: "By Air",
      detail: "Bagdogra Airport (IXB)",
      distance: "140 km from Pelling",
      description: "Fly into Bagdogra Airport in West Bengal. From there, you can hire a direct private taxi or rent a self-drive car to complete the 5-hour scenic drive to Upper Pelling."
    },
    {
      icon: Train,
      title: "By Train",
      detail: "New Jalpaiguri Station (NJP)",
      distance: "135 km from Pelling",
      description: "New Jalpaiguri serves as the nearest major rail hub. Taxis and shared vehicles are readily available outside the station to transport you directly to Pelling."
    },
    {
      icon: Car,
      title: "By Road",
      detail: "Via Siliguri / Gangtok",
      distance: "Well-Connected Highways",
      description: "Pelling is accessible by well-maintained highways via Siliguri or Gangtok. Enjoy winding mountain roads, lush tea gardens, and vistas of the Teesta River along the route."
    }
  ];

  return (
    <section id="reach" className="reach-section section-padding">
      <div className="reach-container">
        <div className="reach-header">
          <span className="section-subtitle">Travel Directions</span>
          <h2 className="section-title">How to Reach Us</h2>
          <p className="reach-intro">
            Nestled in the tranquil heights of Upper Pelling near the helipad, Hotel Red Cherry is accessible through several convenient scenic travel routes.
          </p>
        </div>

        <div className="reach-grid">
          {options.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <div key={idx} className="reach-card">
                <div className="reach-card-header">
                  <div className="reach-icon-circle">
                    <Icon size={22} />
                  </div>
                  <h3 className="reach-card-title">{opt.title}</h3>
                </div>
                <div className="reach-card-meta">
                  <span className="reach-meta-detail">{opt.detail}</span>
                  <span className="reach-meta-distance">{opt.distance}</span>
                </div>
                <p className="reach-card-desc">{opt.description}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Banner */}
        <div className="reach-contact-banner">
          <div className="banner-icon-wrapper animate-float">
            <PhoneCall size={32} className="banner-icon" />
          </div>
          <div className="banner-text-content">
            <h3 className="banner-title">Need Direct Travel Assistance?</h3>
            <p className="banner-desc">
              Whether you need help booking a private cab from Bagdogra/NJP, arranging local sightseeing guides, or completing a room booking, contact us directly.
            </p>
            <a href="tel:9800220107" className="banner-phone-link hover-line">
              +91 9800220107
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
