/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',      // Deep Ink Blue
        accent: '#2563EB',       // Electric Blue
        amber: '#F59E0B',        // Soft Amber
        bglight: '#F9FAFB',      // Off-White
        neutral: '#6B7280',      // Neutral Grey
      },
    },
  },
  plugins: [],
}
