/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#151515',      // Night (dark black)
        accent: '#68B6B9',       // Verdigris (teal blue)
        amber: '#FBC139',        // Amber (golden yellow)
        tomato: '#F45835',       // Tomato (coral red)
        bglight: '#F6F3EA',      // Floral white (off-white)
        neutral: '#6B7280',      // Neutral Grey
      },
    },
  },
  plugins: [],
}
