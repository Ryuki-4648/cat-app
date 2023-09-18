/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#d996b6",
          bg: "#f5f5f5",
          text: "#333",
        },
      },
    },
  },
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  plugins: [],
}

