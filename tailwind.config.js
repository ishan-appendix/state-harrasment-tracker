/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lora: ["Lora", "serif"],
      "source-sans": ["Source Sans Pro", "sans-serif"],
    },

    extend: {
      colors: {
        "watchdog-blue": "#244583",
        "off-blue": "#BBD0F8",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
