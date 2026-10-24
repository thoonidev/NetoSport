import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import { data } from "../components/Productos/data";
import {
  Breadcrumbs,
  EmptyState,
  ProductCard,
  QuantityControl,
  money,
} from "../components/Shop/Shop";
import "./DetalleProducto.css";

function ProductDetail({ product }) {
  const { allProducts, onAddProduct } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const photoDialog = useRef(null);
  const alreadyInCart =
    allProducts.find((item) => item.id === product.id)?.quantity || 0;
  const remaining = Math.max(1, 99 - alreadyInCart);
  const selectedQuantity = Math.min(quantity, remaining);
  const related = data.filter((item) => item.id !== product.id).slice(0, 3);
  function addToCart() {
    onAddProduct(product, selectedQuantity);
    setAdded(true);
  }

  return (
    <main id="contenido" className="ns-inner-page ns-detail-page">
      <Breadcrumbs current={product.nameProduct} catalog />
      <div className="ns-detail-layout">
        <div className="ns-detail-visual">
          <button
            className="ns-detail-photo"
            onClick={() => photoDialog.current.showModal()}
            aria-label={`Ampliar fotografía de ${product.nameProduct}`}
          >
            <img
              src={product.img}
              loading="eager"
              fetchPriority="high"
              alt={product.nameProduct}
              width="1000"
              height="1200"
              decoding="async"
              style={{ objectPosition: product.position }}
            />
            <span>AMPLIAR FOTOGRAFÍA ↗</span>
          </button>
        </div>
        <section className="ns-detail-info">
          <p className="ns-kicker">{product.category}</p>
          <h1>{product.nameProduct}</h1>
          <p className="ns-detail-price">{money(product.price)}</p>
          <p className="ns-detail-description">
            {product.id === 6
              ? "El partido empieza con un balón. Encuentra el equipo que acompaña cada pase y cada encuentro."
              : product.category.includes("Camisetas")
                ? "Lleva tu pasión puesta. Una selección inspirada en quienes viven el fútbol dentro y fuera de la cancha."
                : "Prepárate para tu siguiente paso. Una selección para vivir el deporte con tu propio estilo."}
          </p>
          <div className="ns-detail-purchase">
            <p className="ns-quantity-label">Cantidad</p>
            <div className="ns-detail-actions">
              <QuantityControl
                value={selectedQuantity}
                max={remaining}
                onChange={(value) => {
                  setQuantity(value);
                  setAdded(false);
                }}
              />
              <button
                className="ns-button"
                onClick={addToCart}
                disabled={alreadyInCart >= 99}
              >
                Agregar al carrito <span aria-hidden="true">+</span>
              </button>
            </div>
            <div className="ns-cart-feedback" role="status" aria-live="polite">
              {alreadyInCart >= 99 ? (
                "Has alcanzado el máximo de 99 unidades de este artículo."
              ) : added ? (
                <span>
                  ✓ Agregado a tu equipo.{" "}
                  <Link to="/carrito">Ver carrito →</Link>
                </span>
              ) : (
                "Arma tu selección y consulta las opciones disponibles."
              )}
            </div>
          </div>
          <div className="ns-detail-specs">
            <details open>
              <summary>Sobre este artículo</summary>
              <dl>
                <div>
                  <dt>Categoría</dt>
                  <dd>{product.category}</dd>
                </div>
                <div>
                  <dt>Disponibilidad y tallas</dt>
                  <dd>Consultar con la tienda</dd>
                </div>
              </dl>
            </details>
            <details>
              <summary>Entrega y atención</summary>
              <p>
                Consulta con nosotros las opciones de entrega, cambios y
                condiciones antes de confirmar tu pedido.
              </p>
              <Link to="/contacto">Hablar con NetoSport ↗</Link>
            </details>
          </div>
          <a
            className="ns-detail-help"
            href={`https://wa.me/51935624766?text=${encodeURIComponent(`Hola, quiero consultar por ${product.nameProduct}.`)}`}
            target="_blank"
            rel="noreferrer"
          >
            ¿Tienes una pregunta sobre este artículo? <span>Escríbenos ↗</span>
          </a>
        </section>
      </div>
      <section className="ns-related">
        <div className="ns-inner-section-heading">
          <div>
            <p className="ns-kicker">SIGUE EXPLORANDO</p>
            <h2>Completa tu equipo.</h2>
          </div>
          <Link to="/productos">Ver todo ↗</Link>
        </div>
        <div className="ns-shop-grid ns-related-grid">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      <dialog
        className="ns-photo-dialog"
        ref={photoDialog}
        aria-label={`Fotografía ampliada de ${product.nameProduct}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) photoDialog.current.close();
        }}
      >
        <form method="dialog">
          <button aria-label="Cerrar fotografía">Cerrar ✕</button>
        </form>
        <img
          src={product.img}
          alt={product.nameProduct}
          loading="lazy"
          decoding="async"
        />
      </dialog>
    </main>
  );
}
export default function DetalleProducto() {
  const { id } = useParams();
  const product = data.find((item) => String(item.id) === id);
  if (!product)
    return (
      <main id="contenido" className="ns-inner-page">
        <Breadcrumbs current="Producto no encontrado" catalog />
        <EmptyState
          title="Este artículo no está en la selección."
          text="Explora el catálogo para encontrar tu próximo equipo."
        >
          <Link className="ns-button" to="/productos">
            Ver productos ↗
          </Link>
        </EmptyState>
      </main>
    );
  return <ProductDetail key={product.id} product={product} />;
}
