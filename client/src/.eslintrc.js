module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'plugin:react/recommended',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    quotes: ['error', 'single'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
}
