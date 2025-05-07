"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHome, FaBuilding, FaBox, FaBoxOpen, FaBroom, FaClock, FaTruck, FaGlobe, FaTools, FaShieldAlt, FaCertificate, FaMoneyBillAlt, FaHandsHelping, FaWarehouse, FaUsers, FaMedal, FaComments } from 'react-icons/fa';

const services = [
  {
    icon: <FaHome size={40} />,
    title: 'Déménagement résidentiel',
    description: 'Service complet de déménagement pour maisons et appartements partout en Tunisie.'
  },
  {
    icon: <FaBuilding size={40} />,
    title: 'Déménagement commercial',
    description: 'Solutions professionnelles pour le déménagement de bureaux et locaux commerciaux.'
  },
  {
    icon: <FaBoxOpen size={40} />,
    title: 'Emballage et déballage',
    description: 'Service professionnel d\'emballage et déballage pour protéger vos biens pendant le transport.'
  },
  {
    icon: <FaTruck size={40} />,
    title: 'Transport d\'électroménagers',
    description: 'Transport sécurisé de vos appareils électroménagers avec équipement spécialisé.'
  },
  {
    icon: <FaGlobe size={40} />,
    title: 'Déménagement longue distance',
    description: 'Services de déménagement pour les longues distances à travers toute la Tunisie.'
  },
  {
    icon: <FaClock size={40} />,
    title: 'Déménagement urgent',
    description: 'Solutions rapides pour vos besoins de déménagement de dernière minute.'
  },
  {
    icon: <FaTools size={40} />,
    title: 'Déménagement de meubles',
    description: 'Manipulation professionnelle et transport sécurisé de tous types de meubles.'
  },
  {
    icon: <FaMoneyBillAlt size={40} />,
    title: 'Déménagement pas cher',
    description: 'Solutions économiques sans compromettre la qualité du service.'
  },
  {
    icon: <FaHandsHelping size={40} />,
    title: 'Aide au déménagement',
    description: 'Assistance personnalisée pour faciliter votre processus de déménagement.'
  },
  {
    icon: <FaWarehouse size={40} />,
    title: 'Déménagement avec garde-meubles',
    description: 'Solutions de stockage temporaire sécurisé pour vos biens.'
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: 'Société de déménagement fiable',
    description: 'Service fiable et rapide pour un déménagement sans stress.'
  },
  {
    icon: <FaCertificate size={40} />,
    title: 'Société de déménagement agréée',
    description: 'Une entreprise officiellement agréée respectant toutes les normes légales.'
  },
  {
    icon: <FaUsers size={40} />,
    title: 'Équipe de déménageurs professionnels',
    description: 'Personnel formé et expérimenté pour un service de haute qualité.'
  },
  {
    icon: <FaMedal size={40} />,
    title: 'Meilleure société de déménagement',
    description: 'Reconnue parmi les meilleures entreprises de déménagement en Tunisie.'
  },
  {
    icon: <FaComments size={40} />,
    title: 'Avis sur société de déménagement',
    description: 'Consultez les témoignages de nos clients satisfaits partout en Tunisie.'
  }
];

// Why choose us items
const whyChooseUs = [
  {
    icon: <FaUsers size={40} />,
    title: 'Expérience et expertise',
    description: 'Plus de 15 ans d\'expérience dans le domaine du déménagement en Tunisie.'
  },
  {
    icon: <FaHandsHelping size={40} />,
    title: 'Service personnalisé',
    description: 'Chaque déménagement est unique, nous adaptons nos services à vos besoins spécifiques.'
  },
  {
    icon: <FaTruck size={40} />,
    title: 'Équipement moderne',
    description: 'Notre flotte de véhicules et notre équipement sont régulièrement entretenus et mis à jour.'
  },
  {
    icon: <FaMoneyBillAlt size={40} />,
    title: 'Prix transparent',
    description: 'Pas de frais cachés, nous vous fournissons un devis détaillé avant de commencer.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const Services = () => {
  const ref = useRef(null);
  const whyChooseUsRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const isWhyChooseUsInView = useInView(whyChooseUsRef, { once: false, amount: 0.1 });

  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-900 py-24 md:py-32 mt-0 relative overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(#00000008 1px, transparent 1px), linear-gradient(90deg, #00000008 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />
      
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
      {/* Removed the yellow shade blur effect in bottom left for dark mode */}

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block relative"
            animate={isInView ? {
              rotate: [-2, 2, -2],
              y: [0, -5, 0]
            } : {}}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4 px-8 py-4 
              bg-white dark:bg-gray-800 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] 
              dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] border-2 border-primary/50 dark:border-white/50"
              animate={isInView ? { 
                scale: [0.9, 1.02, 1]
              } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Nos Services
            </motion.h2>
            <motion.div 
              className="absolute -z-10 inset-0 bg-orange-500/20 dark:bg-orange-500/30 rounded-xl"
              animate={isInView ? {
                rotate: [0, 3, 0],
                scale: [1, 1.05, 1]
              } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
            Jaouadi Transport vous offre une gamme complète de services de déménagement adaptés à vos besoins partout en Tunisie.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.3 }
              }}
              className={`p-5 md:p-6 flex flex-col items-center text-center rounded-xl 
              bg-white dark:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] 
              dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]
              border-2 border-orange-500/30 dark:border-orange-500/20
              transform ${index % 3 === 0 ? 'rotate-[-1deg]' : index % 3 === 1 ? 'rotate-[1deg]' : 'rotate-[0deg]'}`}
            >
              <motion.div 
                className="text-orange-500 dark:text-orange-400 mb-4 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center 
                bg-orange-500/10 dark:bg-orange-500/20 rounded-full"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2,
                  transition: { duration: 0.6 }
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2 md:mb-3">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Why Choose Us Section */}
        <div className="mt-32" ref={whyChooseUsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyChooseUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block relative"
              animate={isWhyChooseUsInView ? {
                rotate: [-2, 2, -2],
                y: [0, -5, 0]
              } : {}}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4 px-8 py-4 
                bg-white dark:bg-gray-800 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] 
                dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] border-2 border-primary/50 dark:border-white/50"
                animate={isWhyChooseUsInView ? { 
                  scale: [0.9, 1.02, 1]
                } : {}}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Pourquoi Nous Choisir
              </motion.h2>
              <motion.div 
                className="absolute -z-10 inset-0 bg-orange-500/20 dark:bg-orange-500/30 rounded-xl"
                animate={isWhyChooseUsInView ? {
                  rotate: [0, 3, 0],
                  scale: [1, 1.05, 1]
                } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
              Découvrez les raisons pour lesquelles Jaouadi Transport est votre partenaire idéal pour votre déménagement.
            </p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate={isWhyChooseUsInView ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.3 }
                }}
                className={`p-6 md:p-8 flex flex-col items-center text-center rounded-xl 
                bg-white dark:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] 
                dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]
                border-2 border-orange-500/30 dark:border-orange-500/20
                transform ${index % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}`}
              >
                <motion.div 
                  className="text-orange-500 dark:text-orange-400 mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center 
                  bg-orange-500/10 dark:bg-orange-500/20 rounded-full"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.6 }
                  }}
                >
                  {reason.icon}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">{reason.title}</h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 