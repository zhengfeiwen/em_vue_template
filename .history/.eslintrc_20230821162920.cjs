module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: "@typescript-eslint/parser" 、、 
  },
  parser: "vue-eslint-parser",
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended"
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "no-console": "off",
    "vue/multi-word-component-names": "off",
    "comma-dangle": [2, "never"] // 禁止使用拖尾逗号
  }
};
