# cz-conventional-changelog-chinese

> 中文版的cz-conventional-changelog，对中文开发者友好。

Status:
[![Build Status](https://travis-ci.org/rhinel/cz-conventional-changelog-chinese.svg?branch=master)](https://travis-ci.org/rhinel/cz-conventional-changelog-chinese)
[![npm](https://img.shields.io/npm/v/cz-conventional-changelog-chinese.svg?style=flat)](https://www.npmjs.com/package/cz-conventional-changelog-chinese)
[![npm](https://img.shields.io/npm/dm/cz-conventional-changelog-chinese.svg?style=flat)](https://www.npmjs.com/package/cz-conventional-changelog-chinese)
[![npm](https://img.shields.io/npm/l/cz-conventional-changelog-chinese.svg?style=flat)](https://www.npmjs.com/package/cz-conventional-changelog-chinese)

这是一个 format git commit message 的库，本项目仅仅是作为翻译和集成。

食用本项目后可以使用`yarn commit`来格式化提交的commit message，方便生成CHANGELOG，或者生成Tag的时候的简述。

## 感谢

首先感谢原作者，感谢angularJS。

## 安装

```bash

yarn add -D commitizen cz-conventional-changelog-chinese

# add config to package.json

  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog-chinese"
    }
  },

# 和 husky hooks 一起食用更佳

```

## 配置

已下类型可设置为环境变量的默认提交内容：

```JavaScript

process.env = {
  CZ_TYPE,
  CZ_SCOPE,
  CZ_SUBJECT,
  CZ_BODY,
  CZ_ISSUES,
}

```

## License

MIT
