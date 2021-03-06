module.exports = {
  extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'arrow-parens': ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'comma-dangle': ['error', 'always-multiline'],
    'import/newline-after-import': ['error', { count: 1 }],
    'lines-between-class-members': ['error', 'always'],
    'max-len': ['error', { code: 160 }],
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true, minProperties: 2 },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    'object-property-newline': 'error',
    'padding-line-between-statements': 'error',
    'sort-keys': 'error',
    quotes: ['error', 'single'],
  },
};
