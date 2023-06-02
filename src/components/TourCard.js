import React from 'react';
import './TourCard.css';

export default function TourCard({ title, subtitle, price, rating, image }) {
  return (
    <div className="tour-card">
      <div className="image-container">
        <img src={image} alt="Tour Package" className="tour-image" />
      </div>
      <div className="card-content">
        <h1 className="tour-card-title">{title}</h1>
        <h3 className="tour-card-subtitle">{subtitle}</h3>
        <div className="price-rating">
          <span className="price">Price per person<br/><h1>₹{price}</h1></span>
        </div>
      </div>
    </div>
  );
}
