import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";
import logonsImage from "../../images/logons.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";

const Menu = () => {
  const { countProducts } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container__menu">
        <div className="logo">
          <NavLink to="/inicio">
            <img src={logonsImage} alt="logons" />
          </NavLink>
        </div>

        <div className="container-icon">
          <div
            className="container-cart-icon"
            onClick={() => navigate("/carrito")}
          >
            <FontAwesomeIcon icon={faBasketShopping} size="2x" />
            <div className="count-products">
              <span>{countProducts}</span>
            </div>
          </div>
        </div>

        <div className="menu">
          <FontAwesomeIcon
            icon={faBars}
            id="btn_menu"
            onClick={() => setMenuOpen(true)}
          />

          {menuOpen && (
            <div id="back_menu" onClick={() => setMenuOpen(false)}></div>
          )}

          <nav
            id="nav"
            style={{ right: menuOpen ? "0px" : "-250px" }}
          >
            <img src={logonsImage} alt="logons" />
            <ul>
              <li>
                <NavLink to="/inicio" className="selec_ted" onClick={() => setMenuOpen(false)}>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/nosotros" className="selec_ted" onClick={() => setMenuOpen(false)}>
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink to="/productos" className="selec_ted" onClick={() => setMenuOpen(false)}>
                  Productos
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacto" className="selec_ted" onClick={() => setMenuOpen(false)}>
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Menu;
