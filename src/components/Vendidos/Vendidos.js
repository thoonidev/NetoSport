import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Vendidos.css";


const Vendidos = ({ title, description, productList }) => {
  
  const navigate = useNavigate();

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
    /*<main className="product container" id="lista-2">*/
      <main className="product " id="lista-2">
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
              <button className="btn-3" onClick={() => navigate(`/producto/${product.id}`)}>
                Ver detalles
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
