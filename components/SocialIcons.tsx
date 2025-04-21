"use client";

import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

type SocialIconsProps = {
  className?: string;
  iconSize?: number;
  vertical?: boolean;
  animation?: boolean;
};

const SocialIcons = ({ 
  className = "", 
  iconSize = 24, 
  vertical = false,
  animation = true 
}: SocialIconsProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className={`flex ${vertical ? 'flex-col' : 'flex-row'} gap-3 ${className}`}
      variants={animation ? container : undefined}
      initial={animation ? "hidden" : undefined}
      animate={animation ? "show" : undefined}
    >
      <motion.a 
        href="https://wa.me/21650123456" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon bg-[#25D366] text-white"
        aria-label="WhatsApp"
        variants={animation ? item : undefined}
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp size={iconSize} />
      </motion.a>
      <motion.a 
        href="https://instagram.com/demenagement.borjcedria" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon bg-[#E1306C] text-white"
        aria-label="Instagram"
        variants={animation ? item : undefined}
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaInstagram size={iconSize} />
      </motion.a>
      <motion.a 
        href="https://facebook.com/demenagement.borjcedria" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon bg-[#1877F2] text-white"
        aria-label="Facebook"
        variants={animation ? item : undefined}
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaFacebook size={iconSize} />
      </motion.a>
    </motion.div>
  );
};

export default SocialIcons; 