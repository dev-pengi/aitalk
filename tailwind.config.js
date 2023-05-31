/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: "#191919",
        dark2: "#232323",
        dark3: "#303030",
        textcolor: "#f8f8f8",
        textcolorLighter: "#b8b8b8",
        primary: "#5a7de6",
      },
    },
  },
  plugins: [],
};
