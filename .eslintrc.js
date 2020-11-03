module.exports = {
  root: true,
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    }
  ],
  rules: {
    quotes: ['error', 'single'],
  },
};
