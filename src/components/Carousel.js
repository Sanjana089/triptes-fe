import React, { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = ["./kedarnath.jpg", "./dwarka.jpg"]; // Array of image URLs

  useEffect(() => {
    // Auto-advance the carousel every 4 seconds
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <div className="slides-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={index === activeIndex ? "slide active" : "slide"}
        />
      ))}
    </div>
    <div className="dots-container">
    {images.map((_, index) => (
      <span
        key={index}
        className={index === activeIndex ? 'dot active' : 'dot'}
        onClick={() => handleDotClick(index)}
      ></span>
    ))}
  </div>
  </div>
  );
};

export default Carousel;
