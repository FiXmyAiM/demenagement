"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode } = useTheme();

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'À propos', href: '#about' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white dark:bg-gray-900 shadow-md backdrop-blur-md bg-opacity-80 dark:bg-opacity-80' : 'py-4 bg-transparent'}`}>
      <nav className="container-section flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center">
          <motion.span 
            className={`text-xl md:text-2xl font-bold ${scrolled ? 'text-primary dark:text-white' : 'text-white'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Déménagement
            <span className="text-accent"> Borj Cedria</span>
          </motion.span>
        </Link>

        {/* Navigation pour Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navLinks.indexOf(link) * 0.1 }}
              >
                <Link 
                  href={link.href}
                  className={`relative font-medium text-sm ${
                    scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                  } hover:text-accent dark:hover:text-accent transition-colors`}
                  onClick={handleLinkClick}
                  tabIndex={0}
                  aria-label={link.name}
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link 
              href="#contact" 
              className="btn-accent transform transition-transform hover:translate-y-[-3px] hover:shadow-lg"
              tabIndex={0}
              aria-label="Demander un devis"
            >
              Devis Gratuit
            </Link>
          </motion.div>

          {/* Theme Toggle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="ml-2"
          >
            <ThemeToggle />
          </motion.div>
        </div>

        {/* Hamburger Menu pour Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <div className="z-50">
            <ThemeToggle />
          </div>
          <button
            onClick={handleToggle}
            className={`z-50 text-2xl focus:outline-none transition-colors ${
              isOpen 
                ? 'text-white' 
                : scrolled 
                  ? 'text-gray-800 dark:text-white' 
                  : 'text-white'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-primary dark:bg-gray-900 z-40 flex items-center justify-center"
            >
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center gap-6 text-white"
              >
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                    className="text-xl font-medium"
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="hover:text-accent transition-colors"
                      tabIndex={0}
                      aria-label={link.name}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                  className="mt-6"
                >
                  <Link
                    href="#contact"
                    onClick={handleLinkClick}
                    className="btn-accent"
                    tabIndex={0}
                    aria-label="Demander un devis"
                  >
                    Devis Gratuit
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navigation; 