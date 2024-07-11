import React from "react";
import "./Promocion.css";
import { NavLink } from "react-router-dom";

const Promocion = ({ imagenURL, titulo, texto, mostrarBoton = true }) => {
  return (
    <section className="promotion">
      <div className="promotion-content container">
        <div className="promotion-txt">
          <h2>{titulo}</h2>
          <p>{texto}</p>
          {mostrarBoton && (
            <NavLink to="/nosotros" className="btn-1">
              Informacion
            </NavLink>
          )}
        </div>

        <div className="promotion-img">
          <img src={imagenURL} alt="imagen" />
        </div>
      </div>
    </section>
  );
};

export default Promocion;
