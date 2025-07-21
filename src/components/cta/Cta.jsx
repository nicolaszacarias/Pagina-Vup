import React from "react";
import "./cta.css";
import { MdCall, MdEmail } from "react-icons/md";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { useForm, ValidationError } from "@formspree/react";

const Cta = () => {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); // reemplazá con tu ID real

  return (
    <div id="contact-us" className="c-wrapper">
      <div className="innerWidth paddings flexStart c-container">
        {/* Lado izquierdo - Contactos */}
        <div className="c-left">
          <div className="gradient__text">
          <h2>Estamos para ayudarte</h2> 
          </div>
          <p>Elegí tu canal de contacto favorito y hablá con nosotros.</p>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="icon"><MdCall /></div>
              <h3>Llamanos</h3>
              <p>+54 9 351 306 9984</p>
              <a href="tel:+5493513069984">Llamar ahora</a>
            </div>

            <div className="contact-card">
              <div className="icon"><BsWhatsapp /></div>
              <h3>WhatsApp</h3>
              <p>+54 9 351 864-7777</p>
               <a
    href="https://api.whatsapp.com/send?phone=5493513069984&text=Hola,%20quiero%20más%20info"
    target="_blank"
    rel="noopener noreferrer"
    className="cta-button"
  >Enviar mensaje</a>
            </div>

            <div className="contact-card">
              <div className="icon"><BsLinkedin /></div>
              <h3>LinkedIn</h3>
              <p>/asegurarnet</p>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">Ver perfil</a>
            </div>

            <div className="contact-card">
              <div className="icon"><MdEmail /></div>
              <h3>Email</h3>
              <p>info@vup.com</p>
              <a href="mailto:info@vup.com">Enviar correo</a>
            </div>
          </div>
        </div>

        {/* Lado derecho - Formulario */}
        <div className="c-right">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Nombre completo"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              id="message"
              name="message"
              placeholder="Tu mensaje..."
              rows="5"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Enviando..." : "Enviar mensaje"}
            </button>

            {state.succeeded && <p className="success-msg">¡Mensaje enviado con éxito!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cta;
