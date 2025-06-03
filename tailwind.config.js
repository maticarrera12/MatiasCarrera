/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vicenza: ["vicenza", "serif"],
      },
      colors: {
        "soft-white": "#F5FBEF",
        "dark-purple": "#2E1760",
        "vibrant-blue": "#3423A6",
        "dark-gray": "#333333",
        'flame': "#FF3500",
      },
    },
  },
  plugins: [],
};
