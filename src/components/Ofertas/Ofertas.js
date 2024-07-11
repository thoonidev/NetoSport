import React, { useRef, useEffect, useState, useMemo } from "react";
import bannerImage4 from "../../images/banner4.jpg";
import bannerImage3 from "../../images/banner3.jpg";
import bannerImage2 from "../../images/banner2.jpg";
import bannerImage1 from "../../images/banner1.jpg";
import "./Ofertas.css";
import { NavLink } from "react-router-dom";

const Ofertas = () => {
  const [textColor, setTextColor] = useState("black");

  function parpadear() {
    let r = Math.floor(Math.random() * 240);
    let g = Math.floor(Math.random() * 240);
    let b = Math.floor(Math.random() * 240);
    setTextColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      parpadear();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [currentBanner, setCurrentBanner] = useState(1);
  const bannerRef = useRef(null);

  const banners = useMemo(
    () => [bannerImage1, bannerImage2, bannerImage3, bannerImage4],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner % banners.length) + 1);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [banners.length]);

  useEffect(() => {
    if (bannerRef.current) {
      bannerRef.current.src = banners[currentBanner - 1];
    }
  }, [currentBanner, banners]);

  return (
    <section>
      <div className="sec__cover">
        <div className="cover container">
          <div className="cover-txt">
            <h1 style={{ color: textColor }}>Ofertas Especiales</h1>
            <p>Estrena los mejores productos</p>
            <NavLink to="/productos" className="btn-1">
              Informacion
            </NavLink>
          </div>
          <div className="cover-img">
            <img src={banners[0]} alt="bannersf" ref={bannerRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ofertas;
