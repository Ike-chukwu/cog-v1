/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(56, 106, 139, 1)",
        hr: "#C4C4C4",
        lightGrey: "#999999",
        lighterGrey: "rgba(247, 247, 247, 0.9)",
        rentalsColor: "#679DC0",
        managerColor: "#62909F",
        benefitColor: "#4B4B4B",
        sliderColor: "#D2F4FF",
        databaseColor: "#E6736C",
        keyColor: "#A69FF7",
        searchColor: "#DFE0A5",
        cardColor: " #F5F5F5",
        borderGrey: "#B1B1B4",
        lightGreen: "#E0E9EC",
        primaryGreen: "#386A8B",
        dark: "#001827",
        borderGrey: "#EAEAEA",
        darkGreyText: "#4B5B65",
        progressGreen: "#049561",
        "default-yellow": "rgba(224, 202, 4, 1)",
        "minor-text": "rgba(75, 75, 75, 1)",
        "main-text": "rgba(17, 12, 74, 1)",
        "main-green": "rgba(4, 149, 97, 1)",
        "default-red": "rgba(224, 5, 37, 1)",
        "text-green": "rgba(98, 144, 159, 1)",
        "light-green": "rgba(159, 241, 202, 1)",
        "grey-text": "rgba(177, 177, 180, 1)",
        "cog-color": "rgba(56, 106, 139, 1)",
        "body-text": "rgba(75, 91, 101, 1)",
        "hi-color": "rgba(210, 244, 255, 1)",
        "modal-background": "rgba(177, 177, 180, 0.47)",
      },
      fontFamily: {
        euclid: "Euclid",
        inter: "Inter",
      },

      borderRadius: {
        "045": "45px",
        "030": "30px",
        "05": "5px",
      },
      margin: {
        "05": "5px",
        "02": "2px",
      },
      padding: {
        "05": "5px",
      }
    },
  },
  plugins: [],
}
