# 项目背景

## 简介

Vue3 ECharts Charts 是一个基于 Vue 3 和 ECharts 6.0 开发的图表组件库，专为 Windows 7 系统优化，兼容现代浏览器。

## 目标

- 提供简洁易用的图表组件
- 支持多种常用图表类型
- 确保 Windows 7 系统的兼容性
- 支持按需加载，减小打包体积

## 技术栈

- Vue 3.2+ (Composition API)
- TypeScript 5.0+
- ECharts 6.0
- Vite 5.0
- VitePress 1.0

## 浏览器支持

- Windows 7 及以上版本
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 安装

```bash
npm install vue3-echarts-charts
```

## 快速开始

```vue
<template>
  <LineChart
    :x-axis="['周一', '周二', '周三', '周四', '周五', '周六', '周日']"
    :series="[{ name: '销量', data: [120, 200, 150, 80, 70, 110, 130] }]"
  />
</template>

<script setup lang="ts">
import { LineChart } from 'vue3-echarts-charts'
</script>
```
