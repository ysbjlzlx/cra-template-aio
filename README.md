# cra-template-aio

[![GitHub](https://img.shields.io/github/license/ysbjlzlx/cra-template-aio)](https://github.com/ysbjlzlx/cra-template-aio/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/cra-template-aio)](https://www.npmjs.com/package/cra-template-aio)
[![npm](https://img.shields.io/npm/dy/cra-template-aio)](https://www.npmjs.com/package/cra-template-aio)


[![GitHub Repo stars](https://img.shields.io/github/stars/ysbjlzlx/cra-template-aio?style=social)](https://github.com/ysbjlzlx/cra-template-aio)

`aio` (ALL in one) 是已配置好前端常用开发组件的 `create-react-app` 模版，项目开箱可用。

## 目录

* [安装](#安装)
* [运行](#运行)
* [已安装依赖](#已安装依赖)
* [推荐安装依赖](#推荐安装依赖)

## 安装

```shell
yarn create react-app my-app --template cra-template-aio
```

## 运行

```shell
# http://localhost:3000
yarn run start
```

## 已安装依赖

| 组件名称                                                   | 功能           |
|--------------------------------------------------------|:-------------|
| `react-router-dom`                                     | 路由           |
| `mobx` `mobx-react-lite` `mobx-state-tree`             | 状态管理         |
| `react-intl`                                           | 国际化          |
| `@mui/material` `@emotion/react` `@emotion/styled`     | MUI 组件       |
| `react-hook-form` `@hookform/resolvers` `joi`          | 表单处理及数据校验    |
| `axios`                                                | 网络请求         |
| `husky` `lint-staged` `prettier` `@umijs/fabric`       | Code style   |
| `@craco/craco@7.0.0-alpha.3` `eslint-config-react-app` | Build config |


## 推荐安装依赖

| 组件名称                     | 功能          | 安装命令                                               |
|--------------------------|-------------|----------------------------------------------------|
| `@mui/icons-material`    | Material 图标 | `yarn add @mui/icons-material`                     |
| `date-fns`               | 日期时间处理      | `yarn add date-fns`                                |
| `lodash` `@types/lodash` | 函数处理        | `yarn add lodash`<br />`yarn add -D @types/lodash` |

## 已知问题

* 当使用 `npx create-react-app my-app --template aio` 创建项目时 script `prepare` 不会自动执行，需要项目创建后手动执行