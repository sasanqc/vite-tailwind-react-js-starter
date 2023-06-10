/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  theme: {
    extend: {
      fontSize: {
        xs: ["15px", "26px"],
        sm: ["", ""],
        base: ["", ""],
        lg: ["", ""],
        xl: ["", ""],
        "2xl": ["", ""],
        "3xl": ["", ""],
        "4xl": ["", ""],
      },
      fontFamily: {
        poppins: "'Poppins', sans serif",
      },
    },
  },
  plugins: [],
};
