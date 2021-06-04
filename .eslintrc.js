module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {},
  // settings: {
  //   'import/resolver': {
  //     nuxt: {
  //       nuxtSrcDir: 'src',
  //       extensions: ['.js', '.ts', '.vue'],
  //     },
  //   },
  // },
}
