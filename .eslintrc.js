module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/vue3-recommended',
    'prettier',
  ],
  rules: {
    'vue/require-default-prop': 'off', //opcional
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
  // parser: 'vue-eslint-parser',
}
