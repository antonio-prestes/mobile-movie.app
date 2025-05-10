/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        accent: "#ab8bff",
        secondary: "#151312",
        light: {
          100: "#d6c6ff",
          200: "#a8b5db",
          300: "#9ca4ab",
          400: "#6d40ff",
          500: "#4a13ff",
          600: "#3700e6",
          700: "#2400c2",
          800: "#11009e",
          900: "#00007a",
        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",
        }
      },
    },
  },
  plugins: [],
}