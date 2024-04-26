module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react', // React 플러그인 사용
    'react-hooks', // React-hooks 플러그인 사용
  ],
  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-key': 'error',
        'react/no-deprecated': 'warn',
        'react/no-find-dom-node': 'warn',
        'react/no-children-prop': 'warn',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
