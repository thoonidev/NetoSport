import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { data } from "../components/Productos/data";
import hero from "../images/collection/hero-night.webp";
import heroMobile from "../images/collection/hero-night-mobile.webp";
import boots from "../images/collection/boots-lime-small.webp";
import shirts from "../images/collection/jersey-white-small.webp";
import balls from "../images/collection/ball-blue-small.webp";
import matchday from "../images/collection/matchday-small.webp";
import training from "../images/collection/training-small.webp";
import jersey from "../images/collection/jersey-black-small.webp";
import "./Inicio.css";

const featured = data.slice(0, 4);
const best = data.slice(4);
const currency = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
});
function ProductSection({ label, title, products }) {
  return (
    <section className="ns-home-section ns-reveal">
      <div className="ns-section-heading">
        <div>
          <p className="ns-eyebrow">{label}</p>
          <h2>{title}</h2>
        </div>
        <Link className="ns-text-link" to="/productos">
          Ver catálogo <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="ns-product-grid">
        {products.map((p) => (
          <article className="ns-product-card" key={p.id}>
            <Link
              to={`/producto/${p.id}`}
              className="ns-product-image"
              aria-label={`Ver ${p.nameProduct}`}
            >
              <img
                src={p.thumbnail}
                style={{ objectPosition: p.position }}
                width="400"
                height="400"
                loading="lazy"
                decoding="async"
                alt={p.nameProduct}
              />
              <span className="ns-card-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <div className="ns-product-info">
              <p>{p.category}</p>
              <h3>
                <Link to={`/producto/${p.id}`}>{p.nameProduct}</Link>
              </h3>
              <div>
                <strong>{currency.format(p.price)}</strong>
                <Link
                  to={`/producto/${p.id}`}
                  aria-label={`Ver detalles de ${p.nameProduct}`}
                >
                  Ver producto →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default function Inicio() {
  const home = useRef(null);
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.06 },
    );
    home.current.querySelectorAll(".ns-reveal").forEach((el) => {
      el.classList.add("ns-reveal-ready");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <main id="contenido" className="ns-home" ref={home}>
      <section className="ns-hero">
        <div className="ns-hero-copy">
          <p className="ns-eyebrow">
            <span /> TU PASIÓN. TU EQUIPO.
          </p>
          <h1>
            EL JUEGO
            <br />
            ES <em>TUYO.</em>
          </h1>
          <p className="ns-hero-description">
            Actitud desde el primer paso. Encuentra el equipo que te acompaña
            dentro y fuera de la cancha.
          </p>
          <div className="ns-hero-actions">
            <Link className="ns-button" to="/productos">
              Explorar productos <span aria-hidden="true">↗</span>
            </Link>
            <a className="ns-text-link" href="#destacados">
              Ver destacados ↓
            </a>
          </div>
          <div className="ns-hero-caption">
            <span>01 / FÚTBOL</span>
            <span>PREPÁRATE PARA DARLO TODO</span>
          </div>
        </div>
        <div className="ns-hero-visual">
          <div className="ns-hero-media">
            <picture>
              <source media="(max-width: 700px)" srcSet={heroMobile} />
              <img
                src={hero}
                width="1200"
                height="1400"
                fetchPriority="high"
                alt="Jugador controlando un balón en una cancha iluminada de noche"
                loading="eager"
              />
            </picture>
          </div>
          <div className="ns-hero-photo-shade" aria-hidden="true" />
          <span className="ns-hero-word" aria-hidden="true">
            GAME
            <br />
            ON.
          </span>
          <div className="ns-hero-product">
            <div>
              <span>EL FÚTBOL NO SE DETIENE</span>
              <strong>Tu próximo partido empieza aquí.</strong>
            </div>
            <Link to="/productos" aria-label="Explorar equipamiento de fútbol">
              ↗
            </Link>
          </div>
          <span className="ns-vertical-text" aria-hidden="true">
            NETOSPORT / AFTER DARK
          </span>
        </div>
      </section>
      <div className="ns-manifesto">
        <span>FÚTBOL ES PASIÓN</span>
        <span aria-hidden="true">✳</span>
        <span>EQUÍPATE SIN LÍMITES</span>
        <span aria-hidden="true">✳</span>
        <span>SAL A JUGAR</span>
      </div>
      <section className="ns-home-section ns-reveal">
        <div className="ns-section-heading">
          <div>
            <p className="ns-eyebrow">ENCUENTRA TU EQUIPO</p>
            <h2>Tu cancha. Tu estilo.</h2>
          </div>
          <p>Todo empieza con lo que te mueve.</p>
        </div>
        <div className="ns-category-grid">
          {[
            {
              title: "Zapatillas",
              image: boots,
              text: "Marca tu siguiente paso.",
            },
            {
              title: "Camisetas",
              image: shirts,
              text: "Lleva tu pasión puesta.",
            },
            { title: "Balones", image: balls, text: "Que empiece el juego." },
          ].map((c, i) => (
            <Link
              to={`/productos?categoria=${encodeURIComponent(c.title)}`}
              className="ns-category"
              key={c.title}
            >
              <img
                src={c.image}
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
                alt=""
              />
              <span className="ns-category-number">0{i + 1}</span>
              <div>
                <p>{c.text}</p>
                <h3>
                  {c.title} <span aria-hidden="true">↗</span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div id="destacados">
        <ProductSection
          label="SELECCIÓN NETOSPORT"
          title="Hechos para destacar."
          products={featured}
        />
      </div>
      <section className="ns-campaign ns-reveal">
        <div>
          <p className="ns-eyebrow">NO TE QUEDES EN LA GRADA</p>
          <h2>
            Más pasión.
            <br />
            <em>Más juego.</em>
          </h2>
          <p>
            Botas, camisetas y accesorios para vivir cada partido a tu manera.
          </p>
          <Link className="ns-button ns-button-dark" to="/productos">
            Encuentra tu equipo <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="ns-campaign-art" aria-hidden="true">
          <span>
            GAME
            <br />
            ON.
          </span>
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="85" />
            <path d="m100 65 34 25-13 40H79L66 90Zm0 0V15M66 90 20 75m59 55-29 40m71-40 29 40m-16-80 46-15" />
          </svg>
        </div>
      </section>
      <ProductSection
        label="LOS FAVORITOS DE LA CANCHA"
        title="Siempre en el equipo."
        products={best}
      />
      <section className="ns-home-section ns-reveal">
        <div className="ns-section-heading">
          <div>
            <p className="ns-eyebrow">DENTRO DEL JUEGO</p>
            <h2>La cancha es tuya.</h2>
          </div>
          <span className="ns-editorial-label">PASIÓN / EQUIPO / ACTITUD</span>
        </div>
        <div className="ns-news-grid">
          {[
            {
              img: matchday,
              title: "Del primer toque al último minuto.",
              text: "Encuentra tu equipo para vivir el partido.",
              to: "/productos",
              label: "EXPLORAR EQUIPO",
            },
            {
              img: training,
              title: "Tu siguiente nivel empieza hoy.",
              text: "Cada entrenamiento es una nueva oportunidad.",
              to: "/productos",
              label: "VER LA SELECCIÓN",
            },
            {
              img: jersey,
              title: "El deporte se lleva puesto.",
              text: "Conoce la pasión que mueve a NetoSport.",
              to: "/nosotros",
              label: "CONÓCENOS",
            },
          ].map((n) => (
            <article className="ns-news-card" key={n.title}>
              <Link to={n.to} aria-label={n.title}>
                <img
                  src={n.img}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  alt={n.title}
                />
                <span>{n.label} ↗</span>
              </Link>
              <h3>{n.title}</h3>
              <p>{n.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="ns-help ns-reveal">
        <div>
          <p className="ns-eyebrow">CERCA DE TU PRÓXIMO PARTIDO</p>
          <h2>¿Buscas tu próximo equipo?</h2>
          <p>Conversemos y encuentra lo que necesitas para salir a jugar.</p>
        </div>
        <Link className="ns-button ns-button-outline" to="/contacto">
          Hablemos <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
