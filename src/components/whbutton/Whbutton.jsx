import { FaWhatsapp } from 'react-icons/fa';
import "./whbutton.css";
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Acción a realizar al hacer clic en el botón de WhatsApp
    window.open("https://api.whatsapp.com/send?phone=5493513069984&text=Hola,%20quiero%20más%20info", '_blank');
  };

  return (
    <a
      href="https://api.whatsapp.com/send?phone=5493513069984&text=Hola,%20quiero%20más%20info"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;