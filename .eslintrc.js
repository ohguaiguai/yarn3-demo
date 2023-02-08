module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    // 'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    /* 'plugin:prettier/recommended' */
    'prettier'
  ],
  rules: {
    quotes: ['error', 'single'],
    // 'prettier/prettier': 'warn',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
