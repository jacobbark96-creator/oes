/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,astro}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1280px',
        '2xl': '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          navy: "#0E2341",
          dark: "#08192E",
        },
        emerald: {
          DEFAULT: "#1AAE63",
          light: "#EAF9F0",
        },
        bg: {
          grey: "#F7F8FA",
        },
        text: {
          DEFAULT: "#1F2937",
        }
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'emerald-gradient': 'linear-gradient(135deg, #1AAE63 0%, #158F50 100%)',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(14, 35, 65, 0.08)',
        'glass': '0 8px 32px 0 rgba(14, 35, 65, 0.05)',
      }
    },
  },
  plugins: [],
};
