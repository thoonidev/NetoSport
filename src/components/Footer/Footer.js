import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="link">
        <h3>ENLACES</h3>
        <ul>
          <li>
            <NavLink to="/inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/nosotros">Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/productos">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </div>

      <div className="link">
        <h3>INFORMACION</h3>
        <ul>
          <li>
            <a href="https://www.whatsapp.com" target="blank_">
              ✆(+51)935624766
            </a>
          </li>
          <li>
            <a href="https://www.googlemaps.com" target="blank_">
              ☛Calle Los Vinces 1852
            </a>
          </li>
          <li>
            <a href="https://www.gmail.com" target="blank_">
              ✉consultas@netosport.com
            </a>
          </li>
          <li>
            <NavLink to="/inicio">© 2023 NETO SPORT</NavLink>
          </li>
        </ul>
      </div>

      <div className="link">
        <h3>REDES SOCIALES</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com" target="blank_">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="blank_">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.whatsapp.com" target="blank_">
              ✆WhastApp
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="blank_">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
