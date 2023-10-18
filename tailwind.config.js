/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  backgroundImage: {
    'hero-pattern': "url('./src/Images/Rectangle 4288.png')",
    'footer-texture': "url('/img/footer-texture.png')",
  }
}

