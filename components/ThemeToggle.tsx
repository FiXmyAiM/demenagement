"use client";

import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light dark:from-primary-dark dark:to-primary overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDarkMode ? "Passer au mode clair" : "Passer au mode sombre"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={false}
            animate={{ opacity: isDarkMode ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <FaSun className="text-white text-xl" />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={false}
            animate={{ opacity: isDarkMode ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaMoon className="text-white text-xl" />
          </motion.div>
        </div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 