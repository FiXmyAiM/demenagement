"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import SocialIcons from './SocialIcons';
import { useTheme } from './ThemeContext';
import { FaPhone } from "react-icons/fa";
import { FlipWords } from './ui/flip-words';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  
  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const y = useSpring(0, springConfig);
  
  // Valeurs de transformation pour l'effet parallaxe
  const headerY = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  
  // Suivre le défilement pour les animations
  useMotionValueEvent(scrollY, "change", (latest) => {
    y.set(latest);
  });

  // Particules flottantes pour l'effet visuel
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5
  }));

  const handlePhoneClick = () => {
    const phoneNumber = "51722115";
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      navigator.clipboard.writeText(phoneNumber);
      alert("Numéro de téléphone copié : 51 722 115");
    }
  };

  // Liste de mots pour l'animation FlipWords
  const flipWords = [
    "déménagement résidentiel",
    "déménagement commercial",
    "emballage et déballage",
    "transport d'électroménagers",
    "déménagement longue distance"
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen py-20 pb-0 md:py-0 flex items-center justify-center overflow-hidden">
      {/* Effet de particules */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white dark:bg-blue-400 opacity-20 z-0"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Background Image avec parallaxe */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div 
          className="w-full h-full bg-primary/40 dark:bg-primary/70" 
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
      </motion.div>

      {/* Contenu principal sans effet 3D */}
      <motion.div 
        className="container mx-auto px-4 relative z-10 text-center text-white"
        style={{ 
          y: headerY,
          opacity,
          scale
        }}
      >
        {/* Logo Jaouadi Transport */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xs sm:max-w-sm mx-auto mb-8"
        >
          <Image 
            src="/images/1.png" 
            alt="Jaouadi Transport Logo" 
            width={500} 
            height={200}
            className="w-full h-auto"
            priority
          />
        </motion.div>
        
        <motion.div 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-2 flex flex-col sm:flex-row justify-center items-center text-2xl sm:text-3xl md:text-4xl">
            <span className="mb-2 sm:mb-0 sm:mr-2">Experts en</span>
            <div className="relative inline-block">
              <FlipWords 
                words={flipWords} 
                className="text-orange-500 dark:text-orange-400"
                duration={3000}
              />
            </div>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <em>"On s'occupe de tout, vous n'avez à vous soucier de rien en Tunisie."</em>
        </motion.p>
        
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button
              onClick={handlePhoneClick}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto shadow-lg"
            >
              <FaPhone className="w-5 h-5" />
              Demandez un devis
            </button>
          </motion.div>
          
          {/* Icônes de réseaux sociaux */}
          <SocialIcons iconSize={24} className="mt-4 md:mt-0" />
        </motion.div>
        
        {/* Indicateur de défilement animé */}
        <motion.div 
         >
          <motion.div
            >
            <motion.div
           
              />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 