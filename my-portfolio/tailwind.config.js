module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'desktop-bg': '#FAFAFA',
        'main-bg': '#FFFFFF',
        'main-text': '#000000',
        'secondary-text': '#737373',
        'tertiary-text': '#B2B2B2',
        'border': '#E5E5E5',
        'card-bg': '#F2F2F2',
      },
      fontFamily: {
        'mtry': ['MTRY', 'serif'],
        'rethink': ['var(--font-rethink)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
        'montreal': ['Neue Montreal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}