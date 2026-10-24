import { useState } from "react";
import "./Formulario.css";

const initialFields = { nombre: "", correo: "", telefono: "", mensaje: "" };
export default function Formulario() {
  const [fields, setFields] = useState(initialFields);
  const [error, setError] = useState("");
  const [draft, setDraft] = useState("");
  function update(event) {
    setFields((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    setError("");
    setDraft("");
  }
  function prepareMessage(event) {
    event.preventDefault();
    if (fields.nombre.trim().length < 2 || fields.mensaje.trim().length < 10) {
      setError("Escribe tu nombre y un mensaje de al menos 10 caracteres.");
      return;
    }
    const digits = fields.telefono.replace(/\D/g, "");
    if (fields.telefono.trim() && (digits.length < 7 || digits.length > 15)) {
      setError("Revisa tu teléfono: debe tener entre 7 y 15 dígitos.");
      event.currentTarget.elements.telefono.focus();
      return;
    }
    const body = `Hola, NetoSport:\n\n${fields.mensaje.trim()}\n\nNombre: ${fields.nombre.trim()}\nCorreo: ${fields.correo.trim()}${fields.telefono.trim() ? `\nTeléfono: ${fields.telefono.trim()}` : ""}`;
    setDraft(
      `mailto:consultas@netosport.com?subject=${encodeURIComponent(`Consulta de ${fields.nombre.trim()}`)}&body=${encodeURIComponent(body)}`,
    );
  }
  return (
    <section className="ns-contact-form-panel" aria-labelledby="ns-form-title">
      <p className="ns-kicker">CUÉNTANOS LO QUE BUSCAS</p>
      <h2 id="ns-form-title">Empecemos la conversación.</h2>
      <p>Completa tus datos y prepara un mensaje para nuestro correo.</p>
      <form className="ns-contact-form" onSubmit={prepareMessage}>
        <div className="ns-form-two">
          <label htmlFor="nombre">
            Tu nombre
            <input
              id="nombre"
              name="nombre"
              autoComplete="name"
              required
              minLength="2"
              maxLength="100"
              placeholder="¿Cómo te llamas?"
              value={fields.nombre}
              onChange={update}
            />
          </label>
          <label htmlFor="correo">
            Correo electrónico
            <input
              id="correo"
              name="correo"
              autoComplete="email"
              type="email"
              required
              maxLength="150"
              placeholder="tu@correo.com"
              value={fields.correo}
              onChange={update}
            />
          </label>
        </div>
        <label htmlFor="telefono">
          Teléfono (opcional)
          <input
            id="telefono"
            name="telefono"
            autoComplete="tel"
            type="tel"
            maxLength="25"
            placeholder="+51 999 999 999"
            value={fields.telefono}
            onChange={update}
          />
        </label>
        <label htmlFor="mensaje">
          ¿En qué podemos ayudarte?
          <textarea
            id="mensaje"
            name="mensaje"
            required
            minLength="10"
            maxLength="2000"
            rows="5"
            placeholder="Cuéntanos sobre el equipo que buscas…"
            value={fields.mensaje}
            onChange={update}
          />
        </label>
        {error && (
          <p className="ns-form-error" role="alert">
            {error}
          </p>
        )}
        <button className="ns-button" type="submit">
          Preparar mensaje <span aria-hidden="true">↗</span>
        </button>
        <p className="ns-form-note">
          El mensaje se enviará desde tu aplicación de correo. También puedes
          escribirnos directamente por WhatsApp.
        </p>
        {draft && (
          <div className="ns-message-ready" role="status">
            <strong>Tu mensaje está listo.</strong>
            <p>
              Abre tu correo para revisarlo y enviarlo. Necesitas una aplicación
              de correo configurada.
            </p>
            <a href={draft}>Abrir mi correo ↗</a>
          </div>
        )}
      </form>
    </section>
  );
}
