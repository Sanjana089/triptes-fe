import React from 'react';
import './TourCard.css';
import RatingStars from './RatingStars';

export default function TourCard({ title, subtitle, price, rating, image }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt="Tour Package" className="tour-image" />
      </div>
      <div className="card-content">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{subtitle}</h3>
        <div className="price-rating">
          <span className="price">Price per person<br/><h1>₹{price}</h1></span>
          <span className="rating"><RatingStars rating={rating}/> <br/> Rating: {rating}</span>
        </div>
      </div>
    </div>
  );
}
