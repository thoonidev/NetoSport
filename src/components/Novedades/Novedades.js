import React, { useState } from "react";
import novedadImage01 from "../../images/novedad1.jpg";
import novedadImage02 from "../../images/novedad2.jpg";
import novedadImage03 from "../../images/novedad3.jpg";
import "./Novedades.css";

const Novedades = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleVideoClick = (url) => {
    setVideoUrl(url);
  };

  return (
    <section className="blog container">
      <h2>Ultimas Novedades</h2>
      <p>Te traemos las ultimas novedades del deporte rey.</p>

      <div className="blog-content">
        <div className="blog-1">
          <img src={novedadImage01} alt="novedad1" />
          <div className="blog-txt">
            <p>
              <strong>NIKE TIEMPO 10 PROTOTYPE </strong>
              Las Nike Tiempo 10 Prototype son zapatillas de edición limitada
              que fusionan tecnología de vanguardia con un diseño futurista.
              Presentan una parte superior de alta tecnología, suela de alto
              rendimiento y detalles elegantes, lo que las hace ideales tanto
              para el deporte como para el estilo. Estas zapatillas ofrecen un
              rendimiento excepcional.
            </p>
            <button
              className="btn-4"
              onClick={() =>
                handleVideoClick("https://www.youtube.com/embed/0-v0ntsTuEM")
              }
            >
              Presentación
            </button>
          </div>
        </div>

        <div className="blog-1">
          <img src={novedadImage02} alt="novedad2" />
          <div className="blog-txt">
            <p>
              <strong>LAS NUEVAS SKECHERS RAZOR </strong>
              Las zapatillas Skechers Razor son conocidas por su tecnología de
              amortiguación avanzada y su diseño aerodinámico. Ofrecen una
              combinación de estilo y funcionalidad, ideales para actividades
              deportivas y uso diario. Su construcción innovadora las convierte
              en una opción cómoda y versátil para cualquier ocasión en
              particular.
            </p>
            <button
              className="btn-4"
              onClick={() =>
                handleVideoClick("https://www.youtube.com/embed/xPRvfjZdsUQ")
              }
            >
              Presentación
            </button>
          </div>
        </div>

        <div className="blog-1">
          <img src={novedadImage03} alt="novedad3" />
          <div className="blog-txt">
            <p>
              <strong>3ERA CAMISETA FC BARCELONA </strong>
              Una equipación de edición limitada 2023, presenta colores y
              diseños innovadores que se apartan de los colores tradicionales
              del club. Esta camiseta se utiliza en ocasiones especiales o como
              una opción alternativa en competiciones específicas, y a menudo se
              convierte en una pieza de colección muy apreciada por los
              fanáticos del equipo.
            </p>
            <button
              className="btn-4"
              onClick={() =>
                handleVideoClick("https://www.youtube.com/embed/n5dkP1CJJNc")
              }
            >
              Presentación
            </button>
          </div>
        </div>
      </div>

      {videoUrl && (
        <div className="video-container">
          <iframe
            title="Las Ultimas Novedades"
            width="560"
            height="315"
            src={`${videoUrl}?autoplay=1&controls=0&loop=1&rel=0&showinfo=0&mute=1`}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Novedades;
