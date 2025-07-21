import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";
import "./pasarelapago.css";

const CheckoutForm = () => {
  const location = useLocation();
  const form = useRef();

  const { nombre, precio, link } = location.state || {};

  const [enviando, setEnviando] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);

    emailjs
      .sendForm(
        "service_jayi0ha",       // ✅ Tu Service ID
        "template_ca61ieb",      // ✅ Tu Template ID
        form.current,
        "dc7vmur2e_DcXvSOd"      // ✅ Tu Public Key
      )
      .then(() => {
        window.location.href = link; // Redirige a Mercado Pago
      })
      .catch(() => {
        alert("Ocurrió un error. Intentá nuevamente.");
        setEnviando(false);
      });
  };

  if (!nombre || !precio || !link) {
    return <p>No se encontró la información del servicio.</p>;
  }

  return (
    <div className="checkout-container">
      <div className="checkout-summary">
        <h2>Resumen de tu compra</h2>
        <p><strong>Servicio:</strong> {nombre}</p>
        <p><strong>Precio:</strong> ${precio}</p>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit} ref={form}>
        <h3>Datos de contacto</h3>

        <input
          type="text"
          name="user_name"
          placeholder="Tu nombre"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Tu correo"
          required
        />
        <input
          type="text"
          name="instagram"
          placeholder="Tu Instagram (opcional)"
        />
        <textarea
          name="message"
          placeholder="¿Querés contarnos algo?"
        ></textarea>

        {/* Campos ocultos para enviar al correo */}
        <input type="hidden" name="servicio" value={nombre} />
        <input type="hidden" name="precio" value={`$${precio}`} />

        <button type="submit" disabled={enviando}>
          {enviando ? "Enviando..." : "Pagar"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
