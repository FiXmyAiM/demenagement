"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaTimes, FaBars } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { isDarkMode } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollPosition > 10;

  const navLinks = [
    { name: "Accueil", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handlePhoneClick = () => {
    const phoneNumber = "51722115";
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      navigator.clipboard.writeText(phoneNumber);
      alert("Numéro de téléphone copié : 51 722 115");
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Link href="/">
              <span className="text-2xl font-bold text-primary dark:text-white flex items-center">
                
                <span className={`${isScrolled ? 'text-primary dark:text-white' : 'text-white dark:text-white'}`}>
                  Jaouadi Transport
                </span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-6 mr-8">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Link 
                    href={link.href}
                    className={`font-medium text-sm hover:text-orange-500 transition-colors relative group ${
                      isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white dark:text-gray-200'
                    }`}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center space-x-4"
            >
              <ThemeToggle />
              
              <button
                onClick={handlePhoneClick}
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-full flex items-center transition-all duration-300 hover:scale-105 shadow-md"
              >
                <FaPhone className="w-3 h-3 mr-2" />
                <span>51 722 115</span>
              </button>
            </motion.div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button 
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white dark:text-gray-200'
              }`}
              onClick={toggleMenu}
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="container mx-auto px-4 py-3">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="block py-2 px-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="py-2">
                  <button
                    onClick={handlePhoneClick}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-3 px-4 rounded-md flex items-center justify-center transition-all duration-300"
                  >
                    <FaPhone className="w-4 h-4 mr-2" />
                    <span>Appelez-nous : 51 722 115</span>
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation; 