/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        'soft-white': '#F5FBEF',
        'dark-purple': '#2E1760',
        'vibrant-blue': '#3423A6',
        'dark-gray': '#333333',
        'flame': '#FF4C00',
      },
    },
  },
  plugins: [],
};