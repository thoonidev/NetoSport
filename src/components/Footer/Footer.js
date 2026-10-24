import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="ns-footer">
      <div className="ns-footer-inner">
        <div className="ns-footer-brand">
          <Link to="/inicio">
            NETO<span>SPORT</span>
          </Link>
          <p>
            El juego empieza contigo.
            <br />
            Nosotros ponemos el equipo.
          </p>
          <span className="ns-footer-label">FÚTBOL · PASIÓN · ACTITUD</span>
        </div>
        <div>
          <h2>EXPLORA</h2>
          <Link to="/inicio">Inicio</Link>
          <Link to="/productos">Todos los productos</Link>
          <Link to="/nosotros">Sobre NetoSport</Link>
        </div>
        <div>
          <h2>HABLEMOS</h2>
          <a href="https://wa.me/51935624766" target="_blank" rel="noreferrer">
            WhatsApp ↗
          </a>
          <a href="tel:+51935624766">+51 935 624 766</a>
          <a href="mailto:consultas@netosport.com">consultas@netosport.com</a>
          <Link to="/contacto">Formulario de contacto</Link>
        </div>
        <div>
          <h2>ENCUÉNTRANOS</h2>
          <p>Calle Los Vinces 1852</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Calle+Los+Vinces+1852"
            target="_blank"
            rel="noreferrer"
          >
            Ver ubicación ↗
          </a>
        </div>
      </div>
      <div className="ns-footer-bottom">
        <span>
          © {new Date().getFullYear()} NetoSport. Todos los derechos reservados.
        </span>
        <span>HECHO PARA SALIR A JUGAR.</span>
      </div>
    </footer>
  );
}
