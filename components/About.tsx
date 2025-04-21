"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container-section">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/about-image.jpg"
              alt="Hayder Trabelsi"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">À propos de nous</h2>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Hayder Trabelsi</h3>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Fort de plus de 10 ans d'expérience dans le secteur du déménagement à Ben Arous, j'ai fondé cette entreprise avec une vision claire : offrir un service de déménagement qui combine efficacité, sécurité et tranquillité d'esprit pour nos clients tunisiens.
                </p>
                
                <p>
                  Notre équipe est composée de professionnels qualifiés de Borj Cedria qui partagent les mêmes valeurs d'excellence et de respect. Nous comprenons que déménager peut être stressant, c'est pourquoi nous nous engageons à rendre ce processus aussi simple et agréable que possible pour tous nos clients en Tunisie.
                </p>
                
                <p>
                  Chaque déménagement est unique, et nous adaptons nos services pour répondre parfaitement à vos besoins spécifiques. Notre engagement envers la qualité et la satisfaction client a fait de nous une référence dans le domaine du déménagement dans la région de Ben Arous et dans toute la Tunisie.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 