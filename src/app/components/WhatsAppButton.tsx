import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5522992180473"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center hover:bg-[#20b85b] transition"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  )
}

export default WhatsAppButton
