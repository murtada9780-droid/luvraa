/** Tailwind configuration for a luxury, dark theme */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        deep: '#160b1a',
        plum: '#5a2a6b',
        rose: '#8b1d4a',
      },
      boxShadow: {
        'soft-glow': '0 10px 40px rgba(212,175,55,0.35)',
      },
    },
  },
  plugins: [],
}
