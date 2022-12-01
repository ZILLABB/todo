/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
  },
  plugins: [],
};
