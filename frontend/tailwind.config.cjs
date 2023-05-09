/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        qss: {
          primary: "#103557",
          secondary: "#038477",
          alternative: "#025C60",
          background: "#FBFBFB",
          input: "#F2F6F6",
          inputText: "#444444",
          border: "#F4F4F4",
          "base-100": "#CACACA",
          "base-200": "#D9D9D9",
          "base-300": "#ADADAD",
          "base-400": "#E1EEED",
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
