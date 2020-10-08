// eslint-disable-next-line no-undef
module.exports = {
  env: {
    node: true,
    es2021: true,
    "jest/globals": true,
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:jest/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "jest", "prettier"],
  rules: {},
};
