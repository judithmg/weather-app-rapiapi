module.exports = {
  env: {
    browser: true,
    es2021: true,
   'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'simple-import-sort',
    'react-hooks',
    'typescript-sort-keys',
    'prettier',
  ],
  settings: {
    "import/resolver": {
      typescript: {}
    },
  },
  rules: {
    'prettier/prettier': 1,
    'max-len': [1, { code: 120, ignoreUrls: true }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/react-in-jsx-scope': 0,
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-imports': [1, { ignoreDeclarationSort: true }],
    'sort-keys': [1, 'asc', { caseSensitive: true, natural: false }],
    'sort-vars': 0,
    'typescript-sort-keys/interface': 0,
    'typescript-sort-keys/string-enum': 1,
    'import/extensions': 0,
    'react/no-unstable-nested-components': 0,
  },
};
