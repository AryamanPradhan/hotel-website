import React from 'react';
import { Eye, Coffee, Mountain, Flame, Compass } from 'lucide-react';

export default function Rooms({ onOpenBooking }) {
  const roomsData = [
    {
      id: "kanchenjunga-suite",
      name: "Kanchenjunga Vista Suite",
      description: "Our signature suite features floor-to-ceiling glass doors opening onto a private stone balcony. Designed with local Himalayan cedar and custom stone accents.",
      price: "₹7,500",
      image: "/assets/luxury_room.png",
      amenities: [
        { icon: Mountain, text: "Direct Kanchenjunga View" },
        { icon: Flame, text: "In-Room Fireplace" },
        { icon: Coffee, text: "Private Balcony" }
      ]
    },
    {
      id: "cherry-deluxe",
      name: "Cherry Blossom Deluxe",
      description: "Overlooking the property's wild cherry groves, this room offers a cozy organic refuge with slate-accented walls, soft pastel linens, and custom local art.",
      price: "₹5,500",
      image: "/assets/hero_kanchenjunga.png",
      amenities: [
        { icon: Eye, text: "Garden & Orchard View" },
        { icon: Coffee, text: "Organic Tea Station" },
        { icon: Compass, text: "Spacious Bath" }
      ]
    },
    {
      id: "family-attic",
      name: "Family Attic Sanctuary",
      description: "A gorgeous wood-paneled attic suite with high sloped ceilings and glass skylights for stargazing. Perfect for families seeking a cozy alpine experience.",
      price: "₹9,000",
      image: "/assets/fireplace_lounge.png",
      amenities: [
        { icon: Mountain, text: "Skylight Stargazing" },
        { icon: Flame, text: "Separate Living Nook" },
        { icon: Eye, text: "Spacious Attic Layout" }
      ]
    }
  ];

  return (
    <section id="rooms" className="rooms-section section-padding">
      <div className="rooms-container">
        <div className="rooms-header">
          <span className="section-subtitle">Sanctuaries of Rest</span>
          <h2 className="section-title">Rooms & Suites</h2>
          <p className="rooms-intro">
            Each room at Hotel Red Cherry is built with organic wood finishes, cozy insulation, and layouts that prioritize privacy, comfort, and the spectacular mountain vistas.
          </p>
        </div>

        <div className="rooms-grid">
          {roomsData.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-image-wrapper">
                <img src={room.image} alt={room.name} className="room-card-image" />
                <span className="room-price-badge">{room.price}<span className="price-unit">/ night</span></span>
              </div>
              
              <div className="room-card-body">
                <h3 className="room-card-title">{room.name}</h3>
                <p className="room-card-desc">{room.description}</p>
                
                {/* Amenity list */}
                <div className="room-amenities">
                  {room.amenities.map((amenity, idx) => {
                    const Icon = amenity.icon;
                    return (
                      <div key={idx} className="room-amenity-item">
                        <Icon size={14} className="amenity-icon" />
                        <span className="amenity-text">{amenity.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="room-card-footer">
                  <button 
                    onClick={() => onOpenBooking(room.name)}
                    className="btn-primary room-inquire-btn"
                  >
                    Inquire Sanctuary
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
