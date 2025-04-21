"use client";

import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-light dark:bg-gray-800 text-white pt-12 pb-6">
      <div className="container-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Société de Déménagement <br className="sm:hidden" /> Borj Cedria
            </motion.h3>
            <p className="text-gray-300 dark:text-gray-300 mb-4 text-sm md:text-base">
              Votre partenaire de confiance pour tous vos besoins en déménagement à Ben Arous, Tunisie.
              Nous combinons professionnalisme, efficacité et sécurité.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://wa.me/21650123456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a 
                href="https://instagram.com/demenagement.borjcedria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://facebook.com/demenagement.borjcedria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#services" 
                  className="text-gray-300 hover:text-accent transition-colors text-sm md:text-base"
                >
                  Nos services
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  className="text-gray-300 hover:text-accent transition-colors text-sm md:text-base"
                >
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link 
                  href="#testimonials" 
                  className="text-gray-300 hover:text-accent transition-colors text-sm md:text-base"
                >
                  Témoignages
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-gray-300 hover:text-accent transition-colors text-sm md:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-accent" />
                <a 
                  href="tel:+21650123456" 
                  className="text-gray-300 hover:text-accent transition-colors text-sm md:text-base"
                >
                  +216 50 123 456
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-accent" />
                <a 
                  href="mailto:contact@demenagement-borjcedria.tn" 
                  className="text-gray-300 hover:text-accent transition-colors text-sm md:text-base break-all"
                >
                  contact@demenagement-borjcedria.tn
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 text-accent mt-1" />
                <span className="text-gray-300 text-sm md:text-base">
                  Avenue Principal, Borj Cedria,<br />
                  Ben Arous, Tunisie
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 dark:border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0">
              &copy; {currentYear} Société de Déménagement Borj Cedria. Tous droits réservés.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
              <Link 
                href="/mentions-legales" 
                className="hover:text-accent transition-colors"
              >
                Mentions légales
              </Link>
              <Link 
                href="/politique-confidentialite" 
                className="hover:text-accent transition-colors"
              >
                Confidentialité
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-6 text-xs md:text-sm text-gray-500 dark:text-gray-500">
            Powered by <span className="text-accent font-medium">FiXmyAiM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 