import React from 'react';

export default function RatingStars({ rating }) {
  const starPercentage = (rating / 5) * 100;
  const starStyle = {
    width: `${starPercentage}%`
  };

  return (
    <div className="rating-stars">
      <div className="stars-outer">
        <div className="stars-inner" style={starStyle}></div>
      </div>
      <div className="stars"></div>
    </div>
  );
}
