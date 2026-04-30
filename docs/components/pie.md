---
title: PieChart 饼图
---

<script setup>
import { PieChart } from 'vue3-echarts-charts'

const chartData = {
  data: [
    { name: '直接访问', value: 335 },
    { name: '邮件营销', value: 310 },
    { name: '联盟广告', value: 234 },
    { name: '视频广告', value: 135 },
    { name: '搜索引擎', value: 1548 }
  ]
}
</script>

# PieChart 饼图

## 基础用法

<PieChart v-bind="chartData" />

```vue
<script setup>
import { PieChart } from 'vue3-echarts-charts'

const chartData = {
  data: [
    { name: '直接访问', value: 335 },
    { name: '邮件营销', value: 310 },
    { name: '联盟广告', value: 234 },
    { name: '视频广告', value: 135 },
    { name: '搜索引擎', value: 1548 }
  ]
}
</script>

<template>
  <PieChart v-bind="chartData" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| data | 饼图数据 | `PieDataItem[]` | `[]` |
| width | 图表宽度 | `string` | `'100%'` |
| height | 图表高度 | `string` | `'300px'` |
| autoResize | 自动调整大小 | `boolean` | `true` |

### PieDataItem 类型

```ts
interface PieDataItem {
  name: string