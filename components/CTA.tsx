"use client";

import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';

type QuoteFormInputs = {
  name: string;
  address: string;
  serviceType: string;
  date: string;
  phone: string;
};

const CTA = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<QuoteFormInputs>();
  
  const onSubmit: SubmitHandler<QuoteFormInputs> = async (data) => {
    // Simulate form submission with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    // Here you would normally send the data to your server or a form processing service
  };

  return (
    <section className="py-16 bg-primary dark:bg-gray-800 text-white relative overflow-hidden">
      {/* Effet de décoration en arrière-plan */}
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 12,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à déménager sans stress ?</h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Remplissez ce formulaire pour obtenir un devis gratuit et personnalisé pour votre déménagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl dark:shadow-black/30 overflow-hidden"
        >
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-primary dark:text-accent mb-6">Demandez un devis gratuit</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
              </div>
              
              <div>
                <label htmlFor="address" className="block text-gray-700 dark:text-gray-300 mb-2">Adresse actuelle</label>
                <input
                  id="address"
                  type="text"
                  placeholder="Votre adresse"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent dark:bg-gray-800 dark:text-white dark:border-gray-700"
                  {...register('address', { required: "Ce champ est requis" })}
                  aria-invalid={errors.address ? "true" : "false"}
                />
                {errors.address && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.address.message}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-gray-700 dark:text-gray-300 mb-2">Type de service</label>
                  <select
                    id="serviceType"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:focus:ring-accent dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    {...register('serviceType', { required: "Ce champ est requis" })}
                    aria-invalid={errors.serviceType ? "true" : "false"}
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="residential">Déménagement résidentiel</option>
                    <option value="office">Bureaux & entreprises</option>
                    <option value="heavy">Transport d'objets lourds</option>
                    <option value="packing">Emballage & protection</option>
                    <option value="cleaning">Nettoyage post-déménagement</option>
                  </select>
                  {errors.serviceType && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.serviceType.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-gray-700 dark:text-gray-300 mb-2">Date souhaitée</label>
                  <input
                    id="date"
                    type="date"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    {...register('date', { required: "Ce champ est requis" })}
                    aria-invalid={errors.date ? "true" : "false"}
                  />
                  {errors.date && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.date.message}</p>}
                </div>
              </div>
              
              <div className="text-center mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-accent w-full max-w-md mx-auto flex justify-center items-center"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Demander un devis gratuit'}
                </button>
                
                {isSubmitSuccessful && (
                  <p className="text-green-500 dark:text-green-400 text-center mt-4">Votre demande de devis a été envoyée avec succès ! Nous vous contacterons bientôt.</p>
                )}
              </div>
            </form>
          </div>
        </motion.div>
        
        <div className="text-center mt-10">
          <Link 
            href="#contact" 
            className="text-white hover:text-accent transition-colors"
            aria-label="Contact direct"
          >
            Préférez-vous nous contacter directement ? Cliquez ici
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 