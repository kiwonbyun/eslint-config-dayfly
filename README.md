# eslint-config-dayfly

## Peer Dependency

```
"eslint": ">=8",
    "prettier": "^3.2.5",
    "typescript": ">=4.2.0"
```

## 사용법

1. eslint

- .eslintrc.js 파일

```
module.exports = {
  extends: [
    'eslint-config-dayfly',
    'eslint-config-dayfly/react',
    'eslint-config-dayfly/typescript',
  ],
};
```

2. prettier

- prettier.config.js

```
module.exports = require('eslint-config-dayfly/prettierrc.js')
```
