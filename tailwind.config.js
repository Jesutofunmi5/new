/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Heebo: ["Heebo", "sans-serif"]
    },
    screens: {
      sm: "512px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: " #50C878",
          100: "#008753"
        },
        red: {
          DEFAULT: "#FF0000",
          100: "#F6DBCC"
        },
        green: {
          DEFAULT: "#07AA3D",
          100: "#C7E8D2"
        },
        gray: {
          DEFAULT: "#48484A",
          100: "#D1D1D6",
          200: "#8E8E93"
        },
        pine: "#005C39",
        blue: "#0096DB",
        black: "#041723",
        citrus: "#F26D21",
        background: "#F7F7F7"
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
};
