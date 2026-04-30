---
title: 组件
---

# 组件

Vue3 ECharts Charts 提供 7 种图表组件。

## 组件列表

| 组件 | 说明 |
|------|------|
| [LineChart 折线图](./line.md) | 用于展示数据随时间变化的趋势 |
| [BarChart 柱状图](./bar.md) | 用于对比不同分类的数据 |
| [MixChart 折柱混合图](./mix.md) | 用于同时展示折线和柱状图的混合图表 |
| [PieChart 饼图](./pie.md) | 用于展示各部分占整体的比例 |
| [ScatterChart 散点图](./scatter.md) | 用于展示两个变量之间的关系 |
| [GaugeChart 仪表盘](./gauge.md) | 用于展示单个指标的完成进度 |
| [BaseChart 基础图表](./base.md) | 用于渲染任意 ECharts 配置 |

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
