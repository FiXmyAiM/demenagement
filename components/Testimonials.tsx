"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sonia Belkhir',
    location: 'Tunis',
    text: 'Service exceptionnel ! Toute l\'équipe a été très professionnelle et attentionnée avec nos meubles. Je recommande vivement Jaouadi Transport pour un déménagement sans stress partout en Tunisie.',
    rating: 5
  },
  {
    name: 'Tarek Mejri',
    location: 'La Marsa',
    text: 'Déménagement impeccable du début à la fin. Équipe ponctuelle, efficace et très aimable. Aucun dégât sur mes meubles pendant le trajet. Prix très correct pour la qualité du service.',
    rating: 5
  },
  {
    name: 'Maryam Saidi',
    location: 'Carthage',
    text: 'J\'étais très anxieuse à l\'idée de déménager, mais l\'équipe de Jaouadi Transport a su me mettre en confiance. Ils ont été d\'une aide précieuse et ont dépassé mes attentes !',
    rating: 5
  },
  {
    name: 'Ahmed Trabelsi',
    location: 'Hammam-Lif',
    text: 'Un grand merci pour votre efficacité et votre professionnalisme. Tout s\'est déroulé exactement comme prévu lors de mon déménagement, sans aucune mauvaise surprise.',
    rating: 5
  },
  {
    name: 'Leila Gharbi',
    location: 'Sfax',
    text: 'Service rapide et soigné. Les déménageurs étaient très sympathiques et ont pris grand soin de mes affaires. Je n\'hésiterai pas à faire appel à eux pour mon prochain déménagement.',
    rating: 5
  },
  {
    name: 'Mohammed Ben Salah',
    location: 'Sousse',
    text: 'Je recommande fortement Jaouadi Transport pour leur professionnalisme et leur sérieux. Déménagement de Sousse à Tunis sans aucun problème, tout a été parfaitement organisé.',
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto cycle through testimonials
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    })
  };

  const getRatingStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'} 
      />
    ));
  };

  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-gray-900 py-24 md:py-32 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(#00000008 1px, transparent 1px), linear-gradient(90deg, #00000008 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />
      
      <motion.div 
        className="absolute top-20 right-0 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-0 w-72 h-72 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block relative"
            animate={{
              rotate: [-2, 2, -2],
              y: [0, -5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4 px-8 py-4 
              bg-white dark:bg-gray-800 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] 
              dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] border-2 border-primary/50 dark:border-white/50"
              animate={{ 
                scale: [0.9, 1.02, 1]
              }}
              transition={{ duration: 1 }}
            >
              Ce que disent nos clients
            </motion.h2>
            <motion.div 
              className="absolute -z-10 inset-0 bg-orange-500/20 dark:bg-orange-500/30 rounded-xl"
              animate={{
                rotate: [0, 3, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
            Découvrez les témoignages de clients satisfaits qui ont fait confiance à notre service de déménagement.
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center px-4 py-10">
          <div className="w-full max-w-4xl relative min-h-[300px] md:min-h-[250px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full"
              >
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] 
                  dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)]
                  border-2 border-orange-500/30 dark:border-orange-500/20
                  transform rotate-[-1deg]"
                  whileHover={{ 
                    rotate: ['-1deg', '1deg', '-0.5deg'],
                    transition: { duration: 0.5 }
                  }}
                >
                  <FaQuoteLeft className="text-orange-500/30 dark:text-orange-500/40 text-3xl md:text-4xl absolute top-4 left-4" />
                  <FaQuoteRight className="text-orange-500/30 dark:text-orange-500/40 text-3xl md:text-4xl absolute bottom-4 right-4" />
                  
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
                      <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold text-orange-500">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-2">
                        {getRatingStars(testimonials[currentIndex].rating)}
                      </div>
                      <h4 className="font-bold text-xl text-primary dark:text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-orange-500 mb-4">
                        {testimonials[currentIndex].location}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 italic text-sm md:text-lg relative z-10">
                        "{testimonials[currentIndex].text}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Testimonial indicators */}
          <div className="flex justify-center items-center mt-8 gap-2">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 border-2 border-orange-500/50 ${
                  currentIndex === idx ? 'bg-orange-500' : 'bg-white dark:bg-gray-800'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 