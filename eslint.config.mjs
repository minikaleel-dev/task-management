import { defineConfig } from "eslint-define-config";

export default defineConfig({
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
  ],
  parser: "babel-eslint", // or @babel/eslint-parser
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module", // This is important for ES modules
    jsx: true,
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".js"] }],
  },
});
