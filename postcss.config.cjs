/* eslint-disable no-undef */
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
      tailwindcss: {},
      'postcss-preset-env': {
        features: { 'nesting-rules': false },
      },
    'tailwindcss/nesting': 'postcss-nesting',
    autoprefixer: {},
  },
}
