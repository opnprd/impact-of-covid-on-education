module.exports = {
  env: { 
    jest: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'quote-props': ['warn', 'as-needed'],
  },
  overrides: [
    {
      files: ['rollup.config.js', '.eslintrc.js'],
      env: {
        node: true,
      },
    },
  ],
};
