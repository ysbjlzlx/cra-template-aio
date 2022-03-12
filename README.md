# cra-template-aio

## 简介

`aio` 是 All in one 的意思，添加常用依赖，项目开箱可用。

## 安装

```sh
npx create-react-app my-app --template cra-template-aio
```

## 代码风格

```bash
# 使用 umijs 代码风格
npm install --save-dev prettier @umijs/fabric
# git commit 前自动格式化
npx mrm@2 lint-staged
```

## 组件与配置

1. 自定义配置注入

`craco` 6.0 版本不兼容 `react-scripts@5.0.0` 版本，所以使用 alpha 版本

```shell
npm install --save @craco/craco@7.0.0-alpha.3
# 解决配置注入中的编译异常
npm install --save-dev eslint-config-react-app
```

2. 路由

```bash
npm install --save react-router-dom
```

3. 状态管理

```bash
npm install --save mobx-react-lite mobx-state-tree
```

4. 多语言

```bash
npm install --save react-intl
```

5. UI 组件

```bash
# MUI 组件
npm install --save @mui/material @emotion/react @emotion/styled
# 图标
npm install --save @mui/icons-material
# 表单处理及数据校验
npm install --save react-hook-form @hookform/resolvers joi
```

6. 网络请求

```bash
npm install --save axios
```

7. 日期时间处理

```bash
npm install --save date-fns
```

