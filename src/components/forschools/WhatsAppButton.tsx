import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+2348167542553';
  
  // The message you want to pre-fill
  const message = "Hello, Taughtlevel Technologies, I am reaching to you from your Website Presence. I am interested in your service, I wish to know more about your servie";
  
  // URL-encode the message
  const encodedMessage = encodeURIComponent(message);
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Taughtlevel Technologies"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;