"use client";

import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaWhatsapp, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

type FormInputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormInputs>();
  
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // Simulate form submission with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    // Here you would normally send the data to your server or a form processing service
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">Contactez-nous</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            N'hésitez pas à nous contacter pour toute question ou pour demander un devis gratuit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-6 md:p-8 h-full">
              <h3 className="text-2xl font-bold text-primary dark:text-accent mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                    <FaPhone className="text-primary dark:text-accent text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Téléphone</p>
                    <a href="tel:+21650123456" className="text-primary dark:text-accent font-medium hover:underline">
                      +216 50 123 456
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-primary dark:text-accent text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                    <a href="mailto:contact@demenagement-borjcedria.tn" className="text-primary dark:text-accent font-medium hover:underline break-all">
                      contact@demenagement-borjcedria.tn
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-primary dark:text-accent text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Adresse</p>
                    <p className="text-gray-700 dark:text-gray-300">Borj Cedria, Ben Arous, Tunisie</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-primary dark:text-white mb-4">Suivez-nous</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://wa.me/21650123456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white p-3 rounded-full hover:opacity-80 transition-opacity"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                  <a 
                    href="https://instagram.com/demenagement.borjcedria" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#E1306C] text-white p-3 rounded-full hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a 
                    href="https://facebook.com/demenagement.borjcedria" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#1877F2] text-white p-3 rounded-full hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-6 md:p-8 h-full">
              <h3 className="text-2xl font-bold text-primary dark:text-accent mb-6">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Nom complet</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    {...register('name', { required: "Ce champ est requis" })}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Votre email"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    {...register('email', { 
                      required: "Ce champ est requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Adresse email invalide"
                      }
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">Téléphone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    {...register('phone', { required: "Ce champ est requis" })}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  {errors.phone && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.phone.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Votre message"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    {...register('message', { required: "Ce champ est requis" })}
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
                
                {isSubmitSuccessful && (
                  <p className="text-green-500 dark:text-green-400 text-center">Votre message a été envoyé avec succès !</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 