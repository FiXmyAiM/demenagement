"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import SocialIcons from './SocialIcons';
import { useTheme } from './ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  
  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const y = useSpring(0, springConfig);
  
  // Valeurs de transformation pour l'effet parallaxe
  const headerY = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  
  // Animation 3D basée sur la position de la souris
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = (heroRef.current as HTMLElement).getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calcMoveX = mousePosition.x / 30;
  const calcMoveY = mousePosition.y / 30;

  // Suivre le défilement pour les animations
  useMotionValueEvent(scrollY, "change", (latest) => {
    y.set(latest);
  });

  // Particules flottantes pour l'effet 3D
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5
  }));

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden perspective-container">
      {/* Effet de particules */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white dark:bg-blue-400 opacity-20 z-0"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            translateZ: -100
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

      {/* Contenu principal avec effet 3D */}
      <motion.div 
        className="container-section relative z-10 text-center text-white"
        style={{ 
          y: headerY,
          opacity,
          scale,
          rotateX: -calcMoveY * 0.5,
          rotateY: calcMoveX * 0.5,
          translateZ: 50
        }}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block"
            whileHover={{ scale: 1.05, color: isDarkMode ? "#FFC93C" : "#FFC93C" }}
          >
            Votre partenaire de confiance
          </motion.span> <br />
          <motion.span 
            className="inline-block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent dark:from-accent dark:to-primary-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            animate={{ 
              backgroundPosition: ["0% center", "100% center"],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          >
            pour tous vos déménagements à Borj Cedria
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto bg-gradient-to-r dark:from-white dark:to-gray-300 dark:bg-clip-text dark:text-transparent"
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
          <Link 
            href="#contact" 
            className="btn-accent w-full md:w-auto transform transition-transform hover:translate-y-[-5px] hover:shadow-lg"
            tabIndex={0}
            aria-label="Demandez un devis gratuit"
          >
            Demandez un devis
          </Link>
          
          {/* Icônes de réseaux sociaux */}
          <SocialIcons iconSize={24} className="mt-4 md:mt-0" />
        </motion.div>
        
        {/* Indicateur de défilement animé */}
        <motion.div 
          className="absolute bottom-[-150px] sm:bottom-[-150px] left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-8 h-14 border-2 border-white dark:border-white rounded-full flex justify-center p-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white dark:bg-white rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 