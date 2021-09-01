module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react', 'import'],
  extends: ['react-app', 'airbnb', 'prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
