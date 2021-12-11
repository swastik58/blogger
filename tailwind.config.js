module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'bakbak': ['Bakbak One', 'cursive'],
        'hind': ['Hind Madurai', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
        'bubbles': ['Fuzzy Bubbles', 'cursive'],
        'acme': ['Acme', 'sans-serif'],
        'chakra': ['Chakra Petch', 'sans-serif'],
        'didact': ['Didact Gothic', 'sans-serif'],
        'ubuntu': ['Ubuntu Condensed', 'sans-serif'],
        'cuprum': ['Cuprum', 'sans-serif'],
        'arima': ['Arima Madurai', 'cursive'],
        'fira': ['Fira Sans', 'sans-serif'],
        'noto': ['Noto Sans Display', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
