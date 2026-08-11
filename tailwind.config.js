/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        masonic: {
          void: '#040406',
          black: '#08080c',
          dark: '#0d0f17',
          slate: '#131722',
          card: '#111520',
          border: '#2a261f',
          gold: '#c5a059',
          'gold-light': '#ebd197',
          'gold-dark': '#8e6f30',
          crimson: '#dc2626',
          'crimson-dark': '#7f1d1d',
          'crimson-deep': '#450a0a',
          'crimson-light': '#f87171',
          bronze: '#9a7545',
          ivory: '#e8e2d5',
          muted: '#949bb0'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace']
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #c5a059 0%, #ebd197 50%, #8e6f30 100%)',
        'cosmic-gradient': 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.15)',
        'gold-inner': 'inset 0 0 15px rgba(197, 160, 89, 0.1)',
        'card-lux': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(197, 160, 89, 0.15)'
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 60s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
