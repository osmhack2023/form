/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/components/cover.png')",
      },
      spacing: {
        128: "45rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        akshar: ["Akshar", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      rednew: "#E03131",
      bluenew: "#1971C2",
      gold: "#FFD95A",
      silver: "#9BA4B5",
      bronze: "#482121",
      darkgrey: "#333333",
      green: "#38E54D",
      dgreen: "#379237",
      dblue: "#2079C2",
      dgrey: "#9BA4B5",
    },
  },
  plugins: [],
};
