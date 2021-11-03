module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#352D66",
        secondary: "#FAC033",
        tertiary: "#6B5BCD"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  mode: "jit",
  daisyui: {
    themes: false,
  }
}
