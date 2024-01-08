/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        cormorant: ["Cormorant Garamond"],
        syne: ["Syne"],
        roboto: ["Roboto"],
      }
    },
    colors: {
      white: "#FFFFFF",
      dark: "#000000",
      oliveGreen: "#0B7542",
      oliveWhite: "#b9f8da",
      oliveGrey: "#F1F1F1",
      oliveDark: "#042f1a",
      oliveYellow:"#FAFFF0 ",
      purple: "#d094e5",
      apricot: "#e8b89c",
      skyblue: "#bbf3fa",
      aqua: "#a3dcd4",
      soapStone: "#EDE7DE",
      merino: "#d1ebe7",
      lightMerino: "#fdfdfd",
      oldLace:"#faf5eb"
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
});