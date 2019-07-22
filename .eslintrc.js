module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'autofix'],
  rules: {
    'prettier/prettier': ['error', { 'endOfLine': 'auto' }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'autofix/no-unused-vars': 'error',
    'import/no-unresolved': 'off',
    'no-console': 'off',
  },
};
