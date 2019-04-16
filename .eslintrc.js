module.exports = {
  extends: ["react-app", "eslint:recommended", "plugin:react/recommended"],
  rules: {
    "arrow-parens": ["error", "always"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "comma-dangle": ["error", "always-multiline"],
    "import/newline-after-import": ["error", { count: 1 }],
    "lines-between-class-members": ["error", "always"],
    "newline-after-var": ["error", "always"],
    "newline-before-return": "error",
    "padding-line-between-statements": "error",
    "sort-keys": "error",
    quotes: ["error", "single"]
  }
};
