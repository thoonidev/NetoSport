import { Link } from "react-router-dom";
import "./Shop.css";

export const money = (value) =>
  new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(value);

export function Breadcrumbs({ current, catalog = false }) {
  return (
    <nav className="ns-breadcrumbs" aria-label="Ruta de navegación">
      <Link to="/inicio">Inicio</Link>
      <span aria-hidden="true">/</span>
      {catalog && (
        <>
          <Link to="/productos">Productos</Link>
          <span aria-hidden="true">/</span>
        </>
      )}
      <span aria-current="page">{current}</span>
    </nav>
  );
}

export function PageIntro({ eyebrow, title, text, children }) {
  return (
    <header className="ns-page-intro">
      <div>
        <p className="ns-kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="ns-page-description">{text}</p>
      </div>
      {children}
    </header>
  );
}

export function ProductCard({ product }) {
  return (
    <article className="ns-shop-card">
      <Link
        className="ns-shop-card-photo"
        to={`/producto/${product.id}`}
        aria-label={`Ver ${product.nameProduct}`}
      >
        <img
          src={product.thumbnail}
          alt={product.nameProduct}
          width="520"
          height="650"
          loading="lazy"
          decoding="async"
          style={{ objectPosition: product.position }}
        />
        <span className="ns-shop-card-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
      <p>{product.category}</p>
      <h3>
        <Link to={`/producto/${product.id}`}>{product.nameProduct}</Link>
      </h3>
      <div className="ns-shop-card-bottom">
        <strong>{money(product.price)}</strong>
        <Link to={`/producto/${product.id}`}>Ver producto →</Link>
      </div>
    </article>
  );
}

export function QuantityControl({
  value,
  onChange,
  label = "Cantidad",
  max = 99,
}) {
  return (
    <div className="ns-quantity" role="group" aria-label={label}>
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        aria-label={`Reducir ${label.toLowerCase()}`}
      >
        −
      </button>
      <span aria-live="polite" aria-atomic="true">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label={`Aumentar ${label.toLowerCase()}`}
      >
        +
      </button>
    </div>
  );
}

export function EmptyState({ title, text, children }) {
  return (
    <section className="ns-empty-state">
      <span className="ns-empty-symbol" aria-hidden="true">
        ↗
      </span>
      <h2>{title}</h2>
      <p>{text}</p>
      {children}
    </section>
  );
}
