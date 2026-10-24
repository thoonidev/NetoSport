import { Link } from "react-router-dom";
import { Breadcrumbs, PageIntro } from "../components/Shop/Shop";
import matchday from "../images/collection/matchday.webp";
import night from "../images/collection/hero-night.webp";
import training from "../images/collection/training-small.webp";
import "./Nosotros.css";

export default function Nosotros() {
  return (
    <main id="contenido" className="ns-inner-page ns-about-page">
      <Breadcrumbs current="Nosotros" />
      <PageIntro
        eyebrow="ESTO ES NETOSPORT"
        title={
          <>
            El deporte se juega.
            <br />
            La pasión se <em>vive.</em>
          </>
        }
        text="Nos mueve lo mismo que a ti: las ganas de salir, darlo todo y volver a intentarlo."
      />
      <div className="ns-about-cover">
        <img
          src={matchday}
          loading="eager"
          fetchPriority="high"
          alt="Detalle de botas y balón antes de un partido de fútbol"
          width="1200"
          height="600"
          decoding="async"
        />
        <span>LA CANCHA NOS ENCUENTRA.</span>
        <p>FÚTBOL / EQUIPO / COMUNIDAD</p>
      </div>
      <section className="ns-about-story">
        <div>
          <p className="ns-kicker">NUESTRA ESENCIA</p>
          <h2>
            Más que equipo.
            <br />
            <em>Una forma de vivir.</em>
          </h2>
        </div>
        <div>
          <p>
            Un partido con amigos. Ese entrenamiento que cuesta un poco más. La
            camiseta que te acompaña a todas partes. El deporte está en esos
            momentos.
          </p>
          <p>
            En NetoSport queremos acompañarte en cada uno de ellos, con una
            selección de calzado, camisetas y equipamiento, y una atención
            cercana para ayudarte a encontrar lo que necesitas.
          </p>
          <Link className="ns-button ns-dark-outline" to="/productos">
            Conoce la selección ↗
          </Link>
        </div>
      </section>
      <section className="ns-about-values" aria-label="Lo que nos mueve">
        {[
          {
            n: "01",
            title: "Pasión por el juego.",
            text: "Vivimos el fútbol y el deporte como una oportunidad de compartir, disfrutar y superarnos.",
          },
          {
            n: "02",
            title: "Tu estilo, tu equipo.",
            text: "Buscamos acercarte opciones que acompañen tu forma de jugar y tu día a día.",
          },
          {
            n: "03",
            title: "Siempre cerca.",
            text: "Escuchamos lo que necesitas y te ayudamos a explorar tu próximo equipo.",
          },
        ].map((value) => (
          <article key={value.n}>
            <span>{value.n}</span>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </section>
      <section className="ns-about-manifesto">
        <div className="ns-about-night">
          <img
            src={night}
            alt="Fútbol en una cancha iluminada durante la noche"
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <p className="ns-kicker">NUESTRA MISIÓN</p>
          <h2>
            Que nunca falten
            <br />
            las ganas de <em>jugar.</em>
          </h2>
          <p>
            Queremos que más personas encuentren su lugar en el deporte. Desde
            quienes empiezan hasta quienes llevan años en la cancha.
          </p>
          <p className="ns-kicker ns-vision-label">HACIA DÓNDE VAMOS</p>
          <p>
            Construir una comunidad que comparta la pasión por el juego, con una
            experiencia de compra más clara, cercana y sencilla.
          </p>
          <Link className="ns-button" to="/contacto">
            Conversemos ↗
          </Link>
        </div>
      </section>
      <section className="ns-about-closing">
        <img
          src={training}
          alt="Un futbolista y su balón sobre la cancha"
          width="520"
          height="350"
          loading="lazy"
          decoding="async"
        />
        <div>
          <p className="ns-kicker">EL SIGUIENTE PARTIDO TE ESPERA</p>
          <h2>El juego empieza contigo.</h2>
          <Link to="/productos">Encuentra tu equipo ↗</Link>
        </div>
      </section>
    </main>
  );
}
