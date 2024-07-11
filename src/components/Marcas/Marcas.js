import React, { useState } from "react";
import "./Marcas.css";
import marcaImage1 from "../../images/adidas.jpg";
import marcaImage01 from "../../images/mizuno.png";
import marcaImage2 from "../../images/joma.png";
import marcaImage02 from "../../images/newbalance.png";
import marcaImage3 from "../../images/nike.jpg";
import marcaImage03 from "../../images/reebok.jpg";
import marcaImage4 from "../../images/skechers.jpg";
import marcaImage04 from "../../images/diadora.png";
import marcaImage5 from "../../images/puma.jpg";
import marcaImage05 from "../../images/underarmour.jpg";
import marcaImage6 from "../../images/umbro.png";

const Marcas = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseOver = (image) => {
    setHoveredImage(image);
  };

  const handleMouseOut = () => {
    setHoveredImage(null);
  };

  return (
    <div className="marcas-container">
      <h2 className="marcas-title">Mejores Marcas</h2>
      <div className="marcas-logos">
        <img
          src={hoveredImage === marcaImage1 ? marcaImage01 : marcaImage1}
          alt="marca1"
          onMouseOver={() => handleMouseOver(marcaImage1)}
          onMouseOut={handleMouseOut}
        />
        <img
          src={hoveredImage === marcaImage2 ? marcaImage02 : marcaImage2}
          alt="marca2"
          onMouseOver={() => handleMouseOver(marcaImage2)}
          onMouseOut={handleMouseOut}
        />
        <img
          src={hoveredImage === marcaImage3 ? marcaImage03 : marcaImage3}
          alt="marca3"
          onMouseOver={() => handleMouseOver(marcaImage3)}
          onMouseOut={handleMouseOut}
        />
        <img
          src={hoveredImage === marcaImage4 ? marcaImage04 : marcaImage4}
          alt="marca4"
          onMouseOver={() => handleMouseOver(marcaImage4)}
          onMouseOut={handleMouseOut}
        />
        <img
          src={hoveredImage === marcaImage5 ? marcaImage05 : marcaImage5}
          alt="marca5"
          onMouseOver={() => handleMouseOver(marcaImage5)}
          onMouseOut={handleMouseOut}
        />
        <img
          src={hoveredImage === marcaImage6 ? marcaImage4 : marcaImage6}
          alt="marca6"
          onMouseOver={() => handleMouseOver(marcaImage6)}
          onMouseOut={handleMouseOut}
        />
      </div>
    </div>
  );
};

export default Marcas;
