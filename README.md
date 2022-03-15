# cra-template-aio

[![GitHub](https://img.shields.io/github/license/ysbjlzlx/cra-template-aio)](https://github.com/ysbjlzlx/cra-template-aio/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/cra-template-aio)](https://www.npmjs.com/package/cra-template-aio)
[![npm](https://img.shields.io/npm/dy/cra-template-aio)](https://www.npmjs.com/package/cra-template-aio)


[![GitHub Repo stars](https://img.shields.io/github/stars/ysbjlzlx/cra-template-aio?style=social)](https://github.com/ysbjlzlx/cra-template-aio)

`aio` (ALL in one) 是已安装且配置好前端常用开发组件的 `create-react-app` 模版，项目开箱可用。

## 目录

* [安装](#安装)
* [使用](#运行)
* [代码风格](#代码风格)
* [自定义配置](#自定义配置)
* [已安装依赖](#已安装依赖)
* [推荐安装依赖](#推荐安装依赖)

## 安装

初始化项目
```shell
npx create-react-app my-app --template cra-template-aio
```

初始化 commit hooks
```shell
npm run prepare
```

## 运行

```shell
# http://localhost:3000
npm run start
```

## 代码风格

```shell
# 使用 umijs 代码风格
npm install --save-dev prettier @umijs/fabric
# git commit 前自动格式化
npx mrm@2 lint-staged
```
## 自定义配置

`@craco/craco@6.0` 版本不兼容 `react-scripts@5.0.0` 版本，所以使用 alpha 版本

```shell
npm install --save @craco/craco@7.0.0-alpha.3
# 解决配置注入中的编译异常
npm install --save-dev eslint-config-react-app
```

## 已安装依赖

| 组件名称                                               | 功能        |
|----------------------------------------------------|-----------|
| `react-router-dom`                                 | 路由        |
| `mobx-react-lite` `mobx-state-tree`                | 状态管理      |
| `react-intl`                                       | 国际化       |
| `@mui/material` `@emotion/react` `@emotion/styled` | MUI 组件    |
| `react-hook-form` `@hookform/resolvers` `joi`      | 表单处理及数据校验 |
| `axios`                                            | 网络请求      |


## 推荐安装依赖

| 组件名称                      | 功能          | 安装命令                                                        |
|---------------------------|-------------|-------------------------------------------------------------|
| `@mui/icons-material`     | Material 图标 | `npm i --save @mui/icons-material`                          |
| `date-fns`                | 日期时间处理      | `npm i --save date-fns`                                     |
| `lodash`  `@types/lodash` | 函数处理        | `npm i --save lodash`<br />`npm i --save-dev @types/lodash` |

