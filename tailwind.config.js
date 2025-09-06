/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ffe9ea',
          100: '#ffd1d3',
          200: '#ffa3a8',
          300: '#ff757c',
          400: '#ff4751',
          500: '#ff1926',
          600: '#cc141e',
          700: '#990f17',
          800: '#660a0f',
          900: '#330507',
        }
      },
      boxShadow: {
        brand: '0 0 40px rgba(255, 25, 38, 0.35)',
      }
    },
  },
  plugins: [],
}
