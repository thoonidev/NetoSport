import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useCart } from "../../CartContext";
import logo from "../../images/optimized/logons.webp";
import "./Menu.css";

export default function Menu() {
  const { countProducts } = useCart();
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="ns-header">
      <a className="ns-skip" href="#contenido">
        Saltar al contenido
      </a>
      <div className="ns-announcement">
        PASIÓN POR EL JUEGO. ACTITUD EN CADA PASO.
      </div>
      <div className="ns-nav-inner">
        <NavLink
          to="/inicio"
          className="ns-brand"
          aria-label="NetoSport, inicio"
        >
          <img src={logo} alt="" width="46" height="46" />
          <span>
            NETO<span>SPORT</span>
            <small>EQUÍPATE. SUPÉRATE.</small>
          </span>
        </NavLink>
        <nav
          id="ns-navigation"
          aria-label="Navegación principal"
          className={open ? "ns-navigation is-open" : "ns-navigation"}
        >
          <NavLink
            to="/inicio"
            className={({ isActive }) =>
              isActive || location.pathname === "/" ? "active" : ""
            }
          >
            Inicio
          </NavLink>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
        <div className="ns-nav-actions">
          <NavLink
            className="ns-cart"
            to="/carrito"
            aria-label={`Carrito, ${countProducts} productos`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M5 7h14l1 14H4L5 7Z" />
              <path d="M8 8V6a4 4 0 0 1 8 0v2" />
            </svg>
            <span>{countProducts}</span>
          </NavLink>
          <button
            ref={toggle}
            className="ns-menu-toggle"
            aria-expanded={open}
            aria-controls="ns-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? "Cerrar ✕" : "Menú ☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
