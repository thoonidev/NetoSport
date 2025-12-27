import { useEffect, useState, useMemo } from "react";
import bannerImage4 from "../../images/banner4.jpg";
import bannerImage3 from "../../images/banner3.jpg";
import bannerImage2 from "../../images/banner2.jpg";
import bannerImage1 from "../../images/banner1.jpg";
import "./Ofertas.css";
import { NavLink } from "react-router-dom";

const Ofertas = () => {
  const [textColor, setTextColor] = useState("black");
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = useMemo(
    () => [bannerImage1, bannerImage2, bannerImage3, bannerImage4],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTextColor(
        `rgb(${Math.random() * 240}, ${Math.random() * 240}, ${Math.random() * 240})`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [banners.length]);

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
            <img src={banners[currentBanner]} alt="bannersf" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ofertas;
