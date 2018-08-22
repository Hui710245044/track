module.exports = {
  root: false,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'recommended',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {},
  globals: {}
}
