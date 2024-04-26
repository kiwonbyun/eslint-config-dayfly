const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  plugins: [
    '@typescript-eslint', // 타입스크립트 플러그인 사용
  ],
  extends: [
    './index.js',
    'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 규칙
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // 타입 체킹을 요구하는 타입스크립트 규칙],
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', 'ts', '.tsx'],
      },
      typescript: {
        project,
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module', // 모듈 시스템 사용
    project: './tsconfig.json', // 프로젝트 레벨의 tsconfig.json 파일 위치
  },
  rules: {
    // 여기에 타입스크립트 특화 또는 수정하고 싶은 규칙을 추가
  },
};
