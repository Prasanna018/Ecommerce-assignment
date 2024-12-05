/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D3142",
        secondary: "#4F5D75",
        accent: "#EF8354",
      },
    },
  },
  plugins: [],
}