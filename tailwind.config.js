/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-red": "#3BA256",
        "primary-lightred": "#F8FAF8",
        "primary-gray": "#D9D9D9",
      },

      boxShadow: {
        main: "0 5px 15px 5px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
