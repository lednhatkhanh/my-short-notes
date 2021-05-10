module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#bd1874',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
