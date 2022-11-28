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
        greyish: "rgba(134, 146, 166, 1)",
        firstbox: "rgba(199, 232, 210, 0.2)",
        firstboxb: "rgba(7, 170, 61, 1)",
        secondbox: "rgba(255, 255, 255, 1)",
        individual: "rgba(0, 0, 0, 1)",
        whiteish: "rgba(245, 245, 245, 1)",
        formgrey: "rgba(105, 111, 121, 1)",
        formgreyer: "rgba(186, 186, 186, 1)"
      },
      fontSize: {
        reg: "36px"
      },
      lineHeight: {
        regl: "54px",
        // 5: "18px",
        eighteen: "18px",
        showbtn: "17.63px"
      },
      spacing: {
        lif: "426px",
        forh: "458px",
        lifj: "264px",
        1.5: "5px",
        lifh: "108px",
        pol: "52px",
        bot: "39px",
        sbot: "28px",
        ind: "23px",
        // 10: "10px",
        ten: "10px",
        70: "70px",
        54: "54px",
        65: "65px",
        64: "64px",
        21: "21px",
        30: "30px",
        37: "37px",
        32: "32px",
        55: "55px",
        29: "29px"
      },
      borderWidth: {
        1: "1px"
      }
    }
  },
  plugins: []
};
