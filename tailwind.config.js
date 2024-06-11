/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#e8e6ff",
          300: "#8a80ff",
          400: "#5b4dff",
          500: "#1400ff",
          600: "#1000cc",
          700: "#0c0099",
          800: "#080066",
          900: "#040033",
          950: "#000000",
        },
        gray: {
          100: "#f1f1f1",
          200: "#f0f0f0",
          300: "#e6e6e6",
          400: "#dcdcdc",
          500: "#cdcdcd",
          600: "#a4a4a4",
          700: "#7b7b7b",
          800: "#525252",
          900: "#292929",
          950: "#141414",
        },
      },
    },
  },
  plugins: [],
};
