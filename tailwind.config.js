/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'white': '0 0 150px rgba(255, 255, 255, 0.4)',
        'grey': '0 0 320px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-filters'),
  ],
  daisyui: {
    themes: ["light"], // Mengatur tema default menjadi 'light'
  },
}
