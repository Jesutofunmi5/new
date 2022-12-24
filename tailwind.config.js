/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      lg: ["16px"],
      base: ["12px"],
      sm: [
        "10px",
        {
          fontWeight: "500"
        }
      ]
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
        background: "#F7F7F7",
        orange: "#F26D21"
      }
    }
  },
  plugins: []
};
