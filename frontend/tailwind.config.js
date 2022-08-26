/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important:true,
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT: '1rem',
        sm: '3rem',
        lg: '6em',
        xl: '10rem',
        '2xl': '12rem'
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1536px"
    },
    
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "35px",
      },
      colors: {
        primary:"#ff7849",
        secondary:"#ff7849",
        "gray-dark": "#273444",
        textClr:"#001",
        gray: "#8492a6",
        "gray-light": "#f2f2f2",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
