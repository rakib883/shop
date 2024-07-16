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
          "playStore":"url(./download-app-cover.png)",
          "foterDiscount" : "url('https://i.ibb.co/C73f4h8/discount-banner-1.jpg')"
      },
      fontFamily: {
        'MainFont': [`"Inter", "sans-serif"`],
      },
    },
  },
  plugins: [],
}