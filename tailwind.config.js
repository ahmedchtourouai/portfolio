/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#7c3aed'
        }
      },
      backgroundImage: {
        'neon-grad': 'linear-gradient(90deg,#7f5af0 0%,#3b82f6 100%)'
      }
    },
  },
  plugins: [],
}
