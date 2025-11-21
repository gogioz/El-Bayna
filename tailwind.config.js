/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bg: "#fff9f942",
      btn: "#C1A561 ",
      hover: "#708A58FF",
      text: "#2D4F2B",

      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        "Amiri-Regular": ["Amiri-Regular", "sans-serif"],
        "Amiri-Bold": ["Amiri-Bold", "sans-serif"],
        "Thuluth-Regular": ["Thuluth-Regular"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // adjust based on content length
        },
      },
      animation: {
        slide: "slide 30s linear infinite",
      },
    },
    screens: {
      sm: { min: "340px" },
      md: { min: "430px" },
      lg: { min: "768px" },
      xl: { min: "1024px" },
      "2xl": { min: "1280px" },
      "3xl": { min: "1400px" },
      "4xl": { min: "1730px" },
      "5xl": { min: "1920px" },
    },
    // plugins: [require("tailwind-scrollbar-hide")],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
