"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTruck } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

type LoadingScreenProps = {
  minLoadingTime?: number;
};

const LoadingScreen = ({ minLoadingTime = 1500 }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minLoadingTime);

    return () => clearTimeout(timer);
  }, [minLoadingTime]);

  // Variantes d'animation pour l'écran de chargement
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.5,
        ease: "easeInOut" 
      }
    }
  };

  const truckVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: { 
        duration: minLoadingTime / 1000,
        ease: "easeInOut"
      }
    }
  };

  if (!isLoading) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-white dark:bg-gray-900 z-[9999] flex flex-col items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="mb-6 relative"
        variants={truckVariants}
      >
        <FaTruck className="text-5xl md:text-6xl text-primary dark:text-accent" />
        <motion.div 
          className="absolute top-1/2 -left-8 w-10 h-0.5 bg-primary dark:bg-accent"
          animate={{ 
            width: [10, 20, 10],
            opacity: [0.2, 1, 0.2] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5
          }}
        />
      </motion.div>
      
      <motion.h1 
        className="text-3xl font-bold text-primary dark:text-white mb-3"
        variants={textVariants}
      >
        Déménagement <span className="text-accent">Jaouadi Transport</span>
      </motion.h1>
      
      <motion.p 
        className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-md px-4"
        variants={textVariants}
      >
        Chargement de votre expérience de déménagement sans stress...
      </motion.p>
      
      <div className="w-64 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary dark:bg-accent rounded-full"
          variants={progressVariants}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 