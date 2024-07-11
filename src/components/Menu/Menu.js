import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBasketShopping,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";
import logonsImage from "../../images/logons.png";
import { NavLink } from "react-router-dom";

const Menu = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const updatedProducts = allProducts.filter(
      (item) => item.id !== product.id
    );

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(updatedProducts);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  useEffect(() => {
    const nav = document.getElementById("nav");
    const back_menu = document.getElementById("back_menu");
    const btn_menu = document.getElementById("btn_menu");

    if (btn_menu && nav && back_menu) {
      btn_menu.addEventListener("click", mostrarMenu);
      back_menu.addEventListener("click", ocultarMenu);
    }

    function mostrarMenu() {
      nav.style.right = "0px";
      back_menu.style.display = "block";
    }

    function ocultarMenu() {
      nav.style.right = "-250px";
      back_menu.style.display = "none";
    }
  }, []);

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
            onClick={() => setActive(!active)}
          >
            <FontAwesomeIcon icon={faBasketShopping} size="2x" />
            <div className="count-products">
              <span id="contador-productos">{countProducts}</span>
            </div>
          </div>

          <div
            className={`container-cart-products ${active ? "" : "hidden-cart"}`}
          >
            {allProducts.length ? (
              <>
                <div className="row-product">
                  {allProducts.map((product) => (
                    <div className="cart-product" key={product.id}>
                      <div className="info-cart-product">
                        <span className="cantidad-producto-carrito">
                          {product.quantity}
                        </span>
                        <p className="titulo-producto-carrito">
                          {product.nameProduct}
                        </p>
                        <span className="precio-producto-carrito">
                          S/.{product.price}
                        </span>
                      </div>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="icon-close"
                        onClick={() => onDeleteProduct(product)}
                      />
                    </div>
                  ))}
                </div>

                <div className="cart-total">
                  <h3>TOTAL:</h3>
                  <span className="total-pagar">S/.{total}</span>
                </div>

                <button className="btn-clear-all" onClick={onCleanCart}>
                  Vaciar Carrito
                </button>
              </>
            ) : (
              <p className="cart-empty">El carrito está vacío</p>
            )}
          </div>
        </div>

        <div className="menu">
          <FontAwesomeIcon icon={faBars} id="btn_menu" />
          <div id="back_menu"></div>
          <nav id="nav">
            <img src={logonsImage} alt="logons" />
            <ul>
              <li>
                <NavLink to="/inicio" className="selec_ted btn-0">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/nosotros" className="selec_ted btn-0">
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink to="/productos" className="selec_ted btn-0">
                  Productos
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacto" className="selec_ted btn-0">
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
