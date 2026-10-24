import { Breadcrumbs, PageIntro } from "../components/Shop/Shop";
import Formulario from "../components/Formulario/Formulario";
import matchday from "../images/collection/matchday-small.webp";
import "./Contacto.css";

export default function Contacto() {
  return (
    <main id="contenido" className="ns-inner-page ns-contact-page">
      <Breadcrumbs current="Contacto" />
      <PageIntro
        eyebrow="TU EQUIPO EMPIEZA CON UNA CONVERSACIÓN"
        title={
          <>
            Estamos en
            <br />
            tu <em>equipo.</em>
          </>
        }
        text="¿Buscas algo en particular o tienes una pregunta? Conversemos."
      />
      <div className="ns-contact-layout">
        <div className="ns-contact-info">
          <div className="ns-contact-photo">
            <img
              src={matchday}
              loading="eager"
              alt="Botas y balón listos para salir a jugar"
              width="600"
              height="400"
              decoding="async"
            />
            <span>HABLEMOS DE TU PRÓXIMO PARTIDO.</span>
          </div>
          <a
            className="ns-contact-method"
            href="https://wa.me/51935624766"
            target="_blank"
            rel="noreferrer"
          >
            <span className="ns-contact-method-icon" aria-hidden="true">
              ↗
            </span>
            <div>
              <h2>Por WhatsApp</h2>
              <p>+51 935 624 766</p>
              <small>Consulta modelos y disponibilidad</small>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="ns-contact-method"
            href="mailto:consultas@netosport.com"
          >
            <span className="ns-contact-method-icon" aria-hidden="true">
              @
            </span>
            <div>
              <h2>Por correo</h2>
              <p>consultas@netosport.com</p>
              <small>Cuéntanos lo que necesitas</small>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="ns-contact-method"
            href="https://www.google.com/maps/search/?api=1&query=Calle+Los+Vinces+1852"
            target="_blank"
            rel="noreferrer"
          >
            <span className="ns-contact-method-icon" aria-hidden="true">
              ⌖
            </span>
            <div>
              <h2>Encuéntranos</h2>
              <p>Calle Los Vinces 1852</p>
              <small>Ver ubicación en Google Maps</small>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <Formulario />
      </div>
      <section className="ns-faq">
        <div>
          <p className="ns-kicker">ANTES DE SALIR A JUGAR</p>
          <h2>Resolvamos tus dudas.</h2>
        </div>
        <div>
          <details>
            <summary>¿Cómo consulto un producto?</summary>
            <p>
              Abre su ficha y usa el enlace de consulta, o arma una selección en
              el carrito y compártela con nosotros por WhatsApp.
            </p>
          </details>
          <details>
            <summary>¿Puedo consultar tallas y modelos?</summary>
            <p>
              Sí. Escríbenos con el artículo que te interesa para consultar las
              tallas, modelos y disponibilidad real.
            </p>
          </details>
          <details>
            <summary>¿Cómo coordino la entrega?</summary>
            <p>
              Conversemos sobre tu ubicación para confirmar las opciones, los
              plazos y el costo antes de acordar el pedido.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
