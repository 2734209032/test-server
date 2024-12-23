module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true // 启用 CommonJS 全局变量和作用域
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/no-unescaped-entities': 'off', // 关闭 no-unescaped-entities 规则
    'no-unused-vars': ['warn', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/no-explicit-any': 'off' // 配置 any 类型警告
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
