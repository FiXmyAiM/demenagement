"use client";

import { FaPhone, FaMapMarkerAlt, FaTruck, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 relative overflow-hidden pt-20 pb-8">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(#00000008 1px, transparent 1px), linear-gradient(90deg, #00000008 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />
      
      {/* Formes décoratives */}
      <motion.div
        className="absolute -right-20 top-0 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 15, 0],
          y: [0, 15, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -left-20 bottom-0 w-80 h-80 bg-orange-500/5 dark:bg-orange-500/10 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -10, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Colonne 1: À propos */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <motion.div
                className="mr-3 bg-orange-500 dark:bg-orange-500 text-white p-3 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)]"
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <FaTruck className="h-6 w-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-primary dark:text-white">Jaouadi Transport</h3>
            </div>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Société de déménagement professionnelle en Tunisie. Nous combinons professionnalisme, 
              efficacité et sécurité pour un déménagement sans stress.
            </p>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center text-gray-600 dark:text-gray-300"
                whileHover={{ x: 5 }}
              >
                <div className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] mr-3">
                  <FaPhone className="h-4 w-4 text-orange-500 dark:text-orange-400" />
                </div>
                <span>51 722 115</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-600 dark:text-gray-300"
                whileHover={{ x: 5 }}
              >
                <div className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] mr-3">
                  <FaMapMarkerAlt className="h-4 w-4 text-orange-500 dark:text-orange-400" />
                </div>
                <span>Charguia 1, 2035, Tunis</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-600 dark:text-gray-300"
                whileHover={{ x: 5 }}
              >
                <div className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] mr-3">
                  <FaEnvelope className="h-4 w-4 text-orange-500 dark:text-orange-400" />
                </div>
                <span>contact@jaouadi-transport.com</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Colonne 2: Heures d'ouverture */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-6 text-primary dark:text-white border-b-2 border-orange-500/30 dark:border-orange-500/30 pb-2 inline-block">
              Heures d'ouverture
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Lundi - Vendredi:</span>
                <span>08:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi:</span>
                <span>09:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche:</span>
                <span>Fermé</span>
              </div>
              <div className="mt-8 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)] transform rotate-[-1deg]">
                <p className="font-semibold text-orange-500 dark:text-orange-400 text-center">
                  Service d'urgence disponible 24/7
                </p>
              </div>
            </div>
          </motion.div>

          {/* Colonne 3: Médias sociaux */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-primary dark:text-white border-b-2 border-orange-500/30 dark:border-orange-500/30 pb-2 inline-block">
              Suivez-nous
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="#"
                className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)] transform hover:scale-105 hover:rotate-2 transition-all"
                whileHover={{ y: -5 }}
              >
                <FaFacebook className="h-6 w-6 mr-3 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-200">Facebook</span>
              </motion.a>
              <motion.a
                href="#"
                className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)] transform hover:scale-105 hover:rotate-2 transition-all"
                whileHover={{ y: -5 }}
              >
                <FaInstagram className="h-6 w-6 mr-3 text-pink-600" />
                <span className="text-gray-700 dark:text-gray-200">Instagram</span>
              </motion.a>
              <motion.a
                href="#"
                className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)] transform hover:scale-105 hover:rotate-2 transition-all"
                whileHover={{ y: -5 }}
              >
                <FaTwitter className="h-6 w-6 mr-3 text-blue-400" />
                <span className="text-gray-700 dark:text-gray-200">Twitter</span>
              </motion.a>
              <motion.a
                href="#"
                className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)] transform hover:scale-105 hover:rotate-2 transition-all"
                whileHover={{ y: -5 }}
              >
                <FaLinkedin className="h-6 w-6 mr-3 text-blue-700" />
                <span className="text-gray-700 dark:text-gray-200">LinkedIn</span>
              </motion.a>
            </div>
            <div className="mt-8 p-4 bg-orange-500/10 dark:bg-orange-500/20 rounded-lg">
              <p className="text-center text-gray-700 dark:text-gray-200">
                Recevez un devis gratuit en nous appelant au 
                <span className="font-bold text-orange-500 dark:text-orange-400 block mt-1">51 722 115</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Ligne de séparation */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Copyright */}
        <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {currentYear} Jaouadi Transport. Tous droits réservés.</p>
          <p className="mt-2">Powered by <a href="https://www.instagram.com/fixmyaim" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline font-medium">FiXmyAiM</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 