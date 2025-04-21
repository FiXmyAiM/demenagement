"use client";

import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sonia Belkhir',
    text: 'Service exceptionnel ! Toute l\'équipe a été très professionnelle et attentionnée avec nos meubles. Je recommande vivement leurs services pour un déménagement sans stress à travers Ben Arous.',
    rating: 5
  },
  {
    name: 'Tarek Mejri',
    text: 'Déménagement impeccable du début à la fin. Équipe ponctuelle, efficace et très aimable. Aucun dégât sur mes meubles pendant le trajet de Borj Cedria à La Marsa. Prix très correct pour la qualité du service.',
    rating: 5
  },
  {
    name: 'Maryam Saidi',
    text: 'J\'étais très anxieuse à l\'idée de déménager de Tunis à Borj Cedria, mais l\'équipe a su me mettre en confiance. Ils ont été d\'une aide précieuse et ont dépassé mes attentes !',
    rating: 4
  },
  {
    name: 'Ahmed Trabelsi',
    text: 'Un grand merci pour votre efficacité et votre professionnalisme. Tout s\'est déroulé exactement comme prévu lors de mon déménagement à Hammam-Lif, sans aucune mauvaise surprise.',
    rating: 5
  },
  {
    name: 'Leila Gharbi',
    text: 'Service rapide et soigné dans tout le gouvernorat de Ben Arous. Les déménageurs étaient très sympathiques et ont pris grand soin de mes affaires. Je n\'hésiterai pas à faire appel à eux pour mon prochain déménagement.',
    rating: 5
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
    loop: true,
    created() {
      setLoaded(true);
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1, spacing: 16 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 16 },
      },
    },
  });

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [instanceRef]);

  const getRatingStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={i < rating ? 'text-accent' : 'text-gray-300 dark:text-gray-600'} 
      />
    ));
  };

  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-gray-900 py-16 relative overflow-hidden">
      {/* Éléments décoratifs */}
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
        className="absolute bottom-20 left-0 w-72 h-72 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"
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
      
      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">Ce que disent nos clients</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez les témoignages de clients satisfaits qui ont fait confiance à notre service de déménagement.
          </p>
        </motion.div>

        <div className="relative px-4">
          <div ref={sliderRef} className="keen-slider min-h-[250px] sm:min-h-[220px]">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="keen-slider__slide p-2">
                <motion.div 
                  className="card p-6 h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <FaQuoteLeft className="text-primary/20 dark:text-primary/30 text-3xl mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6 flex-grow text-sm md:text-base">{testimonial.text}</p>
                  <div>
                    <div className="flex mb-2">
                      {getRatingStars(testimonial.rating)}
                    </div>
                    <h4 className="font-semibold text-primary dark:text-accent">{testimonial.name}</h4>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <motion.div 
              className="flex justify-center gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {Array.from(
                { length: instanceRef.current.track.details.slides.length },
                (_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      currentSlide === idx ? 'bg-primary dark:bg-accent' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                )
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 