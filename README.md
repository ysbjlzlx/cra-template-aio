# cra-template-aio

[![GitHub](https://img.shields.io/github/license/ysbjlzlx/cra-template-aio)](https://github.com/ysbjlzlx/cra-template-aio/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/cra-template-aio)](https://www.npmjs.com/package/cra-template-aio)
[![npm](https://img.shields.io/npm/dy/cra-template-aio)](https://www.npmjs.com/package/cra-template-aio)


[![GitHub Repo stars](https://img.shields.io/github/stars/ysbjlzlx/cra-template-aio?style=social)](https://github.com/ysbjlzlx/cra-template-aio)

`aio` (ALL in one) 是一个处理好前端常用开发组件的 `create-react-app` 模版库，项目开箱可用。

## 目录

* [安装](#安装)
* [使用](#使用)
* [代码风格](#代码风格)
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

## 使用

```shell
# http://127.0.0.1:3000
npm run start
```

## 代码风格

```shell
# 使用 umijs 代码风格
npm install --save-dev prettier @umijs/fabric
# git commit 前自动格式化
npx mrm@2 lint-staged
```

## 已安装依赖

### 自定义配置注入

`@craco/craco@6.0` 版本不兼容 `react-scripts@5.0.0` 版本，所以使用 alpha 版本

```shell
npm install --save @craco/craco@7.0.0-alpha.3
# 解决配置注入中的编译异常
npm install --save-dev eslint-config-react-app
```

### 路由

```shell
npm install --save react-router-dom
```

### 状态管理

```shell
npm install --save mobx-react-lite mobx-state-tree
```

### 多语言

```shell
npm install --save react-intl
```

### UI 组件

```shell
# MUI 组件
npm install --save @mui/material @emotion/react @emotion/styled
# 图标
npm install --save @mui/icons-material
# 表单处理及数据校验
npm install --save react-hook-form @hookform/resolvers joi
```

### 网络请求

```shell
npm install --save axios
```

## 推荐安装依赖

### 日期时间处理

```shell
npm install --save date-fns
```

### 函数处理

```shell
npm install --save lodash
npm install --save-dev @types/lodash
```