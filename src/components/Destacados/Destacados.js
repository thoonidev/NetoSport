import { useState } from "react";
import destacadoImage01 from "../../images/destacado01.png";
import destacadoImage001 from "../../images/destacado001.png";
import destacadoImage02 from "../../images/destacado02.png";
import destacadoImage002 from "../../images/destacado002.png";
import destacadoImage03 from "../../images/destacado03.png";
import destacadoImage003 from "../../images/destacado003.png";
import destacadoImage04 from "../../images/destacado04.png";
import destacadoImage004 from "../../images/destacado004.png";
import "./Destacados.css";
import { NavLink, useNavigate } from "react-router-dom";

const DestacadoItem = ({
  image,
  id,
  nameProduct,
  description,
  price,
  openLightbox,
  onViewDetails,
}) => {
  return (
    <div className="ofert-1" data-id={id}>
      <img src={image} alt={nameProduct} onClick={openLightbox} />
      <div className="product-txt">
        <h3>{nameProduct}</h3>
        <p>{description}</p>
        <p className="precio">{price}</p>
        <button className="agregar-carrito btn-3" onClick={onViewDetails}>
          Ver detalles
        </button>
      </div>
    </div>
  );
};

const Destacados = () => {
  
  const navigate = useNavigate();
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

  return (
    /*<section className="oferts container" id="lista-1">*/
    <section className="oferts " id="lista-1">
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
          onViewDetails={() => navigate(`/producto/1`)}
        />

        <DestacadoItem
          id={2}
          image={destacadoImage02}
          nameProduct="GUANTES PREDATOR"
          description="Calidad premium"
          price="S/.200"
          openLightbox={() => openLightbox(destacadoImage002)}
          onViewDetails={() => navigate(`/producto/2`)}
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
          onViewDetails={() => navigate(`/producto/3`)}
        />

        <DestacadoItem
          id={4}
          image={destacadoImage04}
          nameProduct="NIKE PHANTOM LUNA FG"
          description="Calidad premium"
          price="S/.400"
          openLightbox={() => openLightbox(destacadoImage004)}
          onViewDetails={() => navigate(`/producto/4`)}
        />
      </div>
    </section>
  );
};

export default Destacados;
