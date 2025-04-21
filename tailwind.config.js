/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F3460', // Bleu foncé
          light: '#275D9D',
          dark: '#092340'
        },
        accent: {
          DEFAULT: '#FFC93C', // Jaune doux
          light: '#FFE3A3',
          dark: '#E6AC14'
        },
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#121212'
        },
        text: {
          DEFAULT: '#333333',
          dark: '#F5F5F5'
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.9s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      transitionProperty: {
        'transform': 'transform',
      },
    },
  },
  plugins: [],
} 