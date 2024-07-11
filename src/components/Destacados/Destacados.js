import React, { useState } from "react";
import destacadoImage01 from "../../images/destacado01.png";
import destacadoImage001 from "../../images/destacado001.png";
import destacadoImage02 from "../../images/destacado02.png";
import destacadoImage002 from "../../images/destacado002.png";
import destacadoImage03 from "../../images/destacado03.png";
import destacadoImage003 from "../../images/destacado003.png";
import destacadoImage04 from "../../images/destacado04.png";
import destacadoImage004 from "../../images/destacado004.png";
import "./Destacados.css";
import { NavLink } from "react-router-dom";

const DestacadoItem = ({
  image,
  id,
  nameProduct,
  description,
  price,
  openLightbox,
  onAddProduct,
}) => {
  return (
    <div className="ofert-1" data-id={id}>
      <img src={image} alt={nameProduct} onClick={openLightbox} />
      <div className="product-txt">
        <h3>{nameProduct}</h3>
        <p>{description}</p>
        <p className="precio">{price}</p>
        <button className="agregar-carrito btn-3" onClick={onAddProduct}>
          Agregar
        </button>
      </div>
    </div>
  );
};

const Destacados = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const openLightbox = (image) => {
    setLightboxOpen(true);
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * 1);
      setCountProducts(countProducts + 1);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * 1);
    setCountProducts(countProducts + 1);
    setAllProducts([...allProducts, { ...product, quantity: 1 }]);
  };

  return (
    <section className="oferts container" id="lista-1">
      <h2>Productos Destacados</h2>
      <p>En NetoSport tenemos variedad de productos</p>

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container">
            <img src={lightboxImage} alt={lightboxImage} />
            <button onClick={closeLightbox} className="close-button">
              Cerrar
            </button>
          </div>
        </div>
      )}

      <div className="oferts-content">
        <DestacadoItem
          id={1}
          image={destacadoImage01}
          nameProduct="BOTA NIKE PHANTOM GT2"
          description="Calidad premium"
          price="S/.400"
          openLightbox={() => openLightbox(destacadoImage001)}
          onAddProduct={() =>
            onAddProduct({
              nameProduct: "BOTA NIKE PHANTOM GT2",
              price: 400,
              id: 1,
            })
          }
        />

        <DestacadoItem
          id={2}
          image={destacadoImage02}
          nameProduct="GUANTES PREDATOR"
          description="Calidad premium"
          price="S/.200"
          openLightbox={() => openLightbox(destacadoImage002)}
          onAddProduct={() =>
            onAddProduct({
              nameProduct: "GUANTES PREDATOR",
              price: 200,
              id: 2,
            })
          }
        />

        <div className="logan-1">
          <h3>Camisetas</h3>
          <p>Productos</p>
          <NavLink to="/productos" className="btn-2">
            Informacion
          </NavLink>
        </div>
      </div>

      <div className="oferts-content">
        <div className="logan-2">
          <h3>Balones</h3>
          <p>Productos</p>
          <NavLink to="/productos" className="btn-2">
            Informacion
          </NavLink>
        </div>

        <DestacadoItem
          id={3}
          image={destacadoImage03}
          nameProduct="ESPINILLERAS MERCURIAL"
          description="Calidad premium"
          price="S/.100"
          openLightbox={() => openLightbox(destacadoImage003)}
          onAddProduct={() =>
            onAddProduct({
              nameProduct: "ESPINILLERAS MERCURIAL",
              price: 100,
              id: 3,
            })
          }
        />

        <DestacadoItem
          id={4}
          image={destacadoImage04}
          nameProduct="NIKE PHANTOM LUNA FG"
          description="Calidad premium"
          price="S/.400"
          openLightbox={() => openLightbox(destacadoImage004)}
          onAddProduct={() =>
            onAddProduct({
              nameProduct: "NIKE PHANTOM LUNA FG",
              price: 400,
              id: 4,
            })
          }
        />
      </div>
    </section>
  );
};

export default Destacados;
