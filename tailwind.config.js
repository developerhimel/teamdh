module.exports = {
  purge: false,
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        THICCCBOI: "'THICCCBOI',serif",
        Chikon: "Chikon",
        ItalicKor: "ItalicKor",
        NeueMontrealBold: "NeueMontrealBold",
        NeueMontrealLight: "NeueMontrealLight",
        ChivoBlack: "ChivoBlack",
        ChivoBold: "ChivoBold",
        ChivoLight: "ChivoLight",
        ChivoRegular: "ChivoRegular",
        Rza: "Rza",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
