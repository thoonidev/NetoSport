import React, { useState } from "react";
import imageContact from "../../images/img_contact.jpg";
import "./Formulario.css";

function Formulario() {
  const [registrado, setRegistrado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // ... validaciones y lógica de envío de formulario ...
    const nombre = event.target.nombre.value;
    const apellidos = event.target.apellidos.value;
    const telefono = event.target.telefono.value;
    const correo = event.target.correo.value;
    const mensaje = event.target.mensaje.value;

    //Validar los campos según los requisitos:
    if (!nombre.trim() || !apellidos.trim()) {
      alert("Por favor, ingrese nombre y apellidos.");
      return;
    }

    if (
      (telefono.length !== 7 && telefono.length !== 9) ||
      (telefono.length === 7 && !/^[2456]/.test(telefono)) ||
      (telefono.length === 9 && !/^9/.test(telefono))
    ) {
      alert(
        "El telefono debe tener 7 dígitos y comenzar con 2, 4, 5 o 6, o tener 9 digitos y comenzar con 9."
      );
      return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      alert("Ingrese el correo electronico válido");
      return;
    }

    if (!mensaje.trim()) {
      alert("Por favor, ingrese un mensaje.");
      return;
    }

    alert("Formulario enviado correctamente.");
    setRegistrado(true);

    // Reiniciar valores del formulario
    setFormData({
      nombre: "",
      apellidos: "",
      telefono: "",
      correo: "",
      mensaje: "",
    });

    //Quita el mensaje despues de (2 segundos)
    setTimeout(() => {
      setRegistrado(false);
    }, 3000);
  };

  return (
    <div className="form-container">
      <div className="image-container">
        <img
          src={imageContact}
          alt="Imagen relacionada"
          className="side-image"
        />
      </div>
      <form className="form-content" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Ingrese su nombre"
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            className="form-control"
            id="apellidos"
            name="apellidos"
            placeholder="Ingrese sus apellidos"
            value={formData.apellidos}
            onChange={(e) =>
              setFormData({ ...formData, apellidos: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
            placeholder="Ingrese su teléfono"
            value={formData.telefono}
            onChange={(e) =>
              setFormData({ ...formData, telefono: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo</label>
          <input
            type="text"
            className="form-control"
            id="correo"
            name="correo"
            placeholder="Ingrese su correo"
            value={formData.correo}
            onChange={(e) =>
              setFormData({ ...formData, correo: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            className="form-control"
            id="mensaje"
            name="mensaje"
            placeholder="Ingrese su mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={(e) =>
              setFormData({ ...formData, mensaje: e.target.value })
            }
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      {registrado && (
        <div className="mensaje-confirmacion">
          <p>¡Formulario enviado con éxito!</p>
        </div>
      )}
    </div>
  );
}

export default Formulario;
