import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {

  const phoneNumber = "918220344477"; // 👉 change if needed
  const message = "Hi, I would like to know more about PALMS programmes.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
      className="
        fixed bottom-6 right-22 z-[9999]
        w-14 h-14
        flex items-center justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_10px_30px_rgba(0,0,0,0.3)]
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]
        transition-all duration-300
      "
    >
      <FaWhatsapp size={26} />
    </motion.button>
  );
};

export default WhatsAppButton;