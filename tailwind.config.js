const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        permanentMarker: ["Permanent Marker", "cursive"],
      },
      backgroundImage: {
        "movie-pattern": "url('/src/components/assets/pattern.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
