import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import {
  Breadcrumbs,
  EmptyState,
  PageIntro,
  QuantityControl,
  money,
} from "../components/Shop/Shop";
import "./Carrito.css";

export default function Carrito() {
  const {
    allProducts,
    total,
    countProducts,
    onUpdateQuantity,
    onDeleteProduct,
    onCleanCart,
  } = useCart();
  const message = `Hola, quisiera consultar disponibilidad y condiciones para esta selección:\n\n${allProducts.map((product) => `${product.quantity} × ${product.nameProduct} — ${money(product.price * product.quantity)}`).join("\n")}\n\nTotal: ${money(total)}.\nPor favor confirmar los modelos, las tallas y la disponibilidad.`;
  return (
    <main id="contenido" className="ns-inner-page ns-cart-page">
      <Breadcrumbs current="Carrito" />
      <PageIntro
        eyebrow="A UN PASO DE LA CANCHA"
        title={
          <>
            Tu próximo <em>equipo.</em>
          </>
        }
        text="Revisa tu selección y prepárate para salir a jugar."
      />
      {allProducts.length ? (
        <div className="ns-cart-layout">
          <section className="ns-cart-items" aria-label="Artículos del carrito">
            <div className="ns-cart-list-heading">
              <h2>
                Tu selección <span>({countProducts})</span>
              </h2>
              <button className="ns-subtle-button" onClick={onCleanCart}>
                Vaciar carrito
              </button>
            </div>
            {allProducts.map((product) => (
              <article key={product.id} className="ns-cart-item">
                <Link
                  className="ns-cart-item-photo"
                  to={`/producto/${product.id}`}
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src={product.thumbnail}
                    alt={product.nameProduct}
                    width="150"
                    height="180"
                    style={{ objectPosition: product.position }}
                  />
                </Link>
                <div className="ns-cart-item-info">
                  <p>{product.category}</p>
                  <h3>
                    <Link to={`/producto/${product.id}`}>
                      {product.nameProduct}
                    </Link>
                  </h3>
                  <span>{money(product.price)} / unidad</span>
                  <QuantityControl
                    label={`Cantidad de ${product.nameProduct}`}
                    value={product.quantity}
                    onChange={(value) => onUpdateQuantity(product.id, value)}
                  />
                </div>
                <div className="ns-cart-item-end">
                  <button
                    className="ns-remove-item"
                    aria-label={`Eliminar ${product.nameProduct}`}
                    onClick={() => onDeleteProduct(product)}
                  >
                    ✕
                  </button>
                  <strong>{money(product.price * product.quantity)}</strong>
                </div>
              </article>
            ))}
            <Link className="ns-back-link" to="/productos">
              ← Seguir explorando
            </Link>
          </section>
          <aside className="ns-order-summary">
            <p className="ns-kicker">LISTO PARA EL SIGUIENTE PASO</p>
            <h2>Resumen de tu selección</h2>
            <dl>
              <div>
                <dt>Artículos</dt>
                <dd>{countProducts}</dd>
              </div>
              <div>
                <dt>Subtotal</dt>
                <dd>{money(total)}</dd>
              </div>
              <div>
                <dt>Entrega</dt>
                <dd>A coordinar</dd>
              </div>
            </dl>
            <div className="ns-order-total">
              <span>Total</span>
              <strong>{money(total)}</strong>
            </div>
            <a
              className="ns-button"
              href={`https://wa.me/51935624766?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noreferrer"
            >
              Consultar por WhatsApp ↗
            </a>
            <p className="ns-summary-note">
              Se abrirá WhatsApp con tu selección. Podrás revisar el mensaje
              antes de enviarlo. La consulta no realiza ningún pago.
            </p>
          </aside>
        </div>
      ) : (
        <EmptyState
          title="Tu equipo está por empezar."
          text="Todavía no tienes productos en el carrito. Explora la selección y encuentra lo que te mueve."
        >
          <Link className="ns-button" to="/productos">
            Explorar productos ↗
          </Link>
        </EmptyState>
      )}
    </main>
  );
}
