# vue3-echarts-charts

基于 Vue 3 + ECharts 6.0 的图表组件库，兼容 Windows 7 系统。

## 特性

- 🎯 多种图表类型：折线图、柱状图、饼图、散点图、仪表盘
- 📦 轻量级：基于 ECharts 6.0，性能优异
- 🔧 易于使用：简洁的 API 设计
- 📥 按需导入：支持单独导入，减小打包体积
- 💻 兼容 Windows 7

## 安装

```bash
npm install vue3-echarts-charts
```

## 快速开始

### 全局引入

```ts
import { createApp } from 'vue'
import App from './App.vue'
import Vue3EchartsCharts from 'vue3-echarts-charts'
import 'vue3-echarts-charts/dist/style.css'

const app = createApp(App)
app.use(Vue3EchartsCharts)
app.mount('#app')
```

### 按需引入

```vue
<template>
  <LineChart :x-axis="xAxisData" :series="seriesData" />
</template>

<script setup lang="ts">
import { LineChart } from 'vue3-echarts-charts'
</script>
```

## 图表组件

- LineChart - 折线图
- BarChart - 柱状图
- PieChart - 饼图
- ScatterChart - 散点图
- GaugeChart - 仪表盘

## 开发

```bash
# 安装依赖
npm install

# 运行文档站
npm run docs:dev

# 构建库
npm run build:lib
```

## 浏览器支持

- Windows 7 及以上
- 现代浏览器

## License

MIT
