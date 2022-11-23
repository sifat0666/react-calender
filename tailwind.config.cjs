/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
