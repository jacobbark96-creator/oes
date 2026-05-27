/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        solar: {
          orange: "#F97316",
          green: "#22C55E",
          dark: "#1E293B",
        },
      },
    },
  },
  plugins: [],
};
