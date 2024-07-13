/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
          "offerImage":"url('./campaign-cover-countdown.jpg')",
          "playStore":"url(./download-app-cover.png)"
      },
      fontFamily: {
        'MainFont': [`"Inter", "sans-serif"`],
      },
    },
  },
  plugins: [],
}