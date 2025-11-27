/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'soft-blue': '#003366',
        'soft-red': '#E3001B',
        'gray-bg': '#F5F5F5',
        'soft-hover': '#0055aa',
        'primary-gold': '#D4AF37',
        'b2s-blue': '#2E64A1',
        'b2s-orange': '#F5A623',
        
      }
    },
  },
  plugins: [],
}
