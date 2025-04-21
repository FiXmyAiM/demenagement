"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHome, FaBuilding, FaBox, FaBoxOpen, FaBroom } from 'react-icons/fa';

const services = [
  {
    icon: <FaHome size={40} />,
    title: 'Déménagement résidentiel',
    description: 'Déménagement de maisons et appartements avec soin et efficacité partout en Tunisie.'
  },
  {
    icon: <FaBuilding size={40} />,
    title: 'Bureaux & entreprises',
    description: 'Solutions professionnelles pour le déménagement de vos locaux professionnels à Ben Arous et ses environs.'
  },
  {
    icon: <FaBox size={40} />,
    title: 'Transport d\'objets lourds',
    description: 'Équipement spécialisé pour le transport sécurisé d\'objets lourds ou volumineux dans toute la Tunisie.'
  },
  {
    icon: <FaBoxOpen size={40} />,
    title: 'Emballage & protection',
    description: 'Service d\'emballage professionnel adapté aux conditions climatiques tunisiennes pour protéger vos biens pendant le transport.'
  },
  {
    icon: <FaBroom size={40} />,
    title: 'Nettoyage post-déménagement',
    description: 'Service de nettoyage complet après votre déménagement à Borj Cedria et dans tout le gouvernorat de Ben Arous.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-900 py-16 relative overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 dark:bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container-section relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4"
            animate={isInView ? { 
              scale: [0.9, 1.1, 1],
              textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 10px rgba(15,52,96,0.5)", "0px 0px 0px rgba(0,0,0,0)"]
            } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Nos Services
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nous offrons une gamme complète de services de déménagement adaptés à vos besoins.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="card p-8 flex flex-col items-center text-center perspective-container transform-gpu backface-hidden dark:text-white"
            >
              <motion.div 
                className="text-primary dark:text-accent mb-6 perspective-container"
                whileHover={{ 
                  rotateY: 360,
                  scale: 1.2,
                  transition: { duration: 0.6 }
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-primary dark:text-accent mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 