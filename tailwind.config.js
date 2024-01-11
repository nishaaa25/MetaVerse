/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    fontSize: {
      xxl: "144px",
      "4xl": "64px",
      "3xl": "42px",
      "2xl": "32px",
      xl: "24px",
      lg: "20px",
      md: "18px",
      base: "16px",
      sm: "14px",
    },
    extend: {
      colors: {
        "primary-black": "#1a232e",
        black: "#000000",
        "light-grey": "#c7c7c7",
        "grey-700":"#b0b0b0",
        "blue-400":"#323f5d",
        "blue-800":"#25618b"
      },
      borderRadius:{
        "4xl": "40px",
        "3xl": "32px",
        "2xl": "24px",
        "xxl": "140px",
        'full': '9999px',
      },
    },
  },
  plugins: [],
};
