import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faGift, faHeadset } from "@fortawesome/free-solid-svg-icons";
import "./Servicios.css";

const Servicios = () => {
  return (
    <section className="container container-features">
      <div className="card-feature">
        <FontAwesomeIcon icon={faWallet} size="3x" />
        <div className="feature-content">
          <span>Contrareembolso</span>
          <p>100% garantía</p>
        </div>
      </div>

      <div className="card-feature">
        <FontAwesomeIcon icon={faGift} size="3x" />
        <div className="feature-content">
          <span>Tarjeta regalo especial</span>
          <p>Ofrece bonos con regalo</p>
        </div>
      </div>

      <div className="card-feature">
        <FontAwesomeIcon icon={faHeadset} size="3x" />
        <div className="feature-content">
          <span>Servicio al cliente 24/7</span>
          <p>LLámenos al 123-456-7890</p>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
