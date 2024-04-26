module.exports = {
  parser: '@babel/eslint-parser', // 파서 설정(React jsx파싱 때문에 설정)
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  plugins: ['import'],
  rules: {
    'no-console': 'error',
    'no-unused-vars': 'warn',
    'no-duplicate-imports': 'error',
    'no-param-reassign': 'error',
    eqeqeq: ['error', 'always'],
    'prefer-arrow-callback': 'warn',
    'no-undef-init': 'error',
    'import/no-unresolved': 'error', // 존재하지 않는 경로의 파일 import 에러 발생
  },
  env: {
    browser: true, // 브라우저 환경에서의 전역 변수 (window 등) 허용
    es2021: true, // ES2021 문법 지원
    node: true, // Node.js 환경에서의 전역 변수 허용
  },
  parserOptions: {
    ecmaVersion: 12, // ECMAScript 버전 지정 (2021은 12)
    sourceType: 'module', // 모듈 시스템 사용 선언 (ES6 모듈)
    requireConfigFile: false,
  },
  ignorePatterns: [
    '.*.js', // Ignore dot files
    'node_modules/',
    'dist/',
  ],
};
