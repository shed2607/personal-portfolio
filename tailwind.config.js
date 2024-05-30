/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: "#404040",
        customGray: "#737373",
        customLightGray: "#A6A6A6",
        customLighterGray: "#D9D9D9",
      },
      fontFamily: {
        grifter: ["Grifter", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
