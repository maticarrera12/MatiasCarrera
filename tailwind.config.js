/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aeonik: ["AeonikPro", "serif"],
        otbrut: ["OTBrut", "serif"],
      },
      colors: {
        "soft-white": "#F5FBEF",
        "dark-gray": "#333333",
        'flame': "#FF3500",
      },
    },
  },
  plugins: [],
};
