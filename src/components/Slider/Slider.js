import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images]);

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="slider">
      <div className="slider-image-container">
        <img src={images[currentImage]} alt="sliderimage" className="image" />
        <button onClick={prevImage} className="prev-button">
          ←
        </button>
        <button onClick={nextImage} className="next-button">
          →
        </button>
      </div>
    </div>
  );
};

export default Slider;
