module.exports = {
  extends: [require.resolve('@jhqn/react/dist/eslint')],
  rules: {
    'no-bitwise': ['error', { allow: ['<<', '>>', '&', '|'] }],
    'prefer-destructuring': ['error', { object: true, array: false }],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
}
