import React, { useState } from "react";
import "./Vendidos.css";

const Vendidos = ({
  title,
  description,
  productList,
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openLightbox = (product) => {
    setSelectedProduct(product);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedProduct(null);
    setLightboxOpen(false);
  };

  return (
    <main className="product container" id="lista-2">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="product-content">
        {productList.map((product) => (
          <div className="ofert-1" key={product.id}>
            <img
              src={product.img}
              alt={product.nameProduct}
              onClick={() => openLightbox(product)}
            />
            <div className="product-txt">
              <h3>{product.nameProduct}</h3>
              <p>{product.description}</p>
              <p className="precio">S/.{product.price}</p>
              <button className="btn-3" onClick={() => onAddProduct(product)}>
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && selectedProduct && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container">
            <img
              src={selectedProduct.openligthbox || selectedProduct.img}
              alt={selectedProduct.name}
            />
            <button onClick={closeLightbox} className="close-button">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Vendidos;
