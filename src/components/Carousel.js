import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesContainerRef = useRef(null);
  const carouselRef = useRef(null);

  const images = ["./2.png", "./3.jpg"]; // Array of image URLs

  useEffect(() => {
    carouselRef.current.style.height =
      window.innerWidth > 900 ? "360px" : "200px";
    // Auto-advance the carousel every 5 seconds
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleResize = () => {
    if (carouselRef.current && slidesContainerRef.current) {
      const currentSlideHeight =
        slidesContainerRef.current.children[activeIndex].clientHeight;
      carouselRef.current.style.height = `${currentSlideHeight}px`;
    }
  };

  useLayoutEffect(() => {
    // Update the height when the component mounts
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="slides-container" ref={slidesContainerRef}>
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
            className={index === activeIndex ? "dot active" : "dot"}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
