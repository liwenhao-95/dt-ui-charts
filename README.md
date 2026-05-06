# vue3-echarts-charts

[![npm](https://img.shields.io/npm/v/vue3-echarts-charts)](https://www.npmjs.com/package/vue3-echarts-charts)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

基于 Vue 3 + ECharts 6.0 的图表组件库，兼容 Windows 7 系统。

## 特性

- 🎯 **多种图表类型**：折线图、柱状图、饼图、散点图、仪表盘、混合图
- 📦 **轻量级**：基于 ECharts 6.0，性能优异
- 🔧 **易于使用**：简洁的 API 设计
- 📥 **按需导入**：支持单独导入，减小打包体积
- 💻 **兼容 Windows 7**

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
  <BarChart :option="chartOption" title="销售数据" width="500px" height="300px" />
</template>

<script setup lang="ts">
import { BarChart } from 'vue3-echarts-charts'

const chartOption = {
  xAxis: { data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] },
  series: [
    { name: '销量', data: [120, 200, 150, 80, 70, 110, 130] },
    { name: '利润', data: [50, 100, 80, 60, 40, 70, 90] }
  ]
}
</script>
```

## 图表组件

| 组件 | 说明 |
|------|------|
| LineChart | 折线图，适用于趋势展示 |
| BarChart | 柱状图，适用于对比分析 |
| PieChart | 饼图，适用于占比展示 |
| ScatterChart | 散点图，适用于分布分析 |
| GaugeChart | 仪表盘，适用于指标展示 |
| MixChart | 混合图，支持折柱混合展示 |

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| option | ECharts 配置项 | `EChartsOption` | `{}` |
| title | 图表标题 | `string` | - |
| width | 图表宽度 | `string` | `'100%'` |
| height | 图表高度 | `string` | `'300px'` |
| autoResize | 自动调整大小 | `boolean` | `true` |

## 开发

```bash
# 安装依赖
npm install

# 运行文档站
npm run docs:dev

# 构建库
npm run build:lib

# 运行测试
npm run test:run

# 代码检查
npm run lint
```

## 浏览器支持

- Windows 7 及以上
- 现代浏览器

## License

MIT
