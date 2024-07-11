import React, { useState } from "react";
import "./Galeria.css";
import galleryImage1 from "../../images/galeria1.jpg";
import galleryImage01 from "../../images/galeria01.jpg";
import galleryImage2 from "../../images/galeria2.jpg";
import galleryImage02 from "../../images/galeria02.jpg";
import galleryImage3 from "../../images/galeria3.jpg";
import galleryImage03 from "../../images/galeria03.jpg";
import galleryImage4 from "../../images/galeria4.jpg";
import galleryImage04 from "../../images/galeria04.jpg";
import galleryImage5 from "../../images/galeria5.jpg";
import galleryImage05 from "../../images/galeria05.jpg";

const Galeria = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseOver = (image) => {
    setHoveredImage(image);
  };

  const handleMouseOut = () => {
    setHoveredImage(null);
  };

  return (
    <section className="gallery container">
      <img
        src={hoveredImage === galleryImage1 ? galleryImage01 : galleryImage1}
        alt="galleryimg1"
        className="gallery-img-1"
        onMouseOver={() => handleMouseOver(galleryImage1)}
        onMouseOut={handleMouseOut}
      />
      <img
        src={hoveredImage === galleryImage2 ? galleryImage02 : galleryImage2}
        alt="galleryimg2"
        className="gallery-img-2"
        onMouseOver={() => handleMouseOver(galleryImage2)}
        onMouseOut={handleMouseOut}
      />
      <img
        src={hoveredImage === galleryImage3 ? galleryImage03 : galleryImage3}
        alt="galleryimg3"
        className="gallery-img-3"
        onMouseOver={() => handleMouseOver(galleryImage3)}
        onMouseOut={handleMouseOut}
      />
      <img
        src={hoveredImage === galleryImage4 ? galleryImage04 : galleryImage4}
        alt="galleryimg4"
        className="gallery-img-4"
        onMouseOver={() => handleMouseOver(galleryImage4)}
        onMouseOut={handleMouseOut}
      />
      <img
        src={hoveredImage === galleryImage5 ? galleryImage05 : galleryImage5}
        alt="galleryimg5"
        className="gallery-img-5"
        onMouseOver={() => handleMouseOver(galleryImage5)}
        onMouseOut={handleMouseOut}
      />
    </section>
  );
};

export default Galeria;
