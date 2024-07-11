module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowNullableBoolean: true }],
    "@typescript-eslint/no-confusing-void-expression": "off"
  },
  ignorePatterns: ['global.d.ts', 'src/generated/**/*.ts']
}
