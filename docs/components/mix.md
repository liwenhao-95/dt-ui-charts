---
title: MixChart 折柱混合图
---

<script setup>
import { MixChart } from 'vue3-echarts-charts'

const chartData = {
  xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  series: [
    { name: '蒸发量', type: 'bar', data: [120, 132, 101, 134, 90, 230, 210] },
    { name: '平均温度', type: 'line', data: [22, 182, 91, 24, 120, 132, 91], yAxisIndex: 1 }
  ]
}
</script>

# MixChart 折柱混合图

## 基础用法

<MixChart v-bind="chartData" />

```vue
<script setup>
import { MixChart } from 'vue3-echarts-charts'

const chartData = {
  xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  series: [
    { name: '蒸发量', type: 'bar', data: [120, 132, 101, 134, 90, 230, 210] },
    { name: '平均温度', type: 'line', data: [22, 182, 91, 24, 120, 132, 91], yAxisIndex: 1 }
  ]
}
</script>

<template>
  <MixChart v-bind="chartData" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| xAxis | x轴数据 | `string[]` | `[]` |
| series | 系列数据 | `SeriesItem[]` | `[]` |
| width | 图表宽度 | `string` | `'100%'` |
| height | 图表高度 | `string` | `'300px'` |
| autoResize | 自动调整大小 | `boolean` | `true` |

### SeriesItem 类型

```ts
interface SeriesItem {
  name: string
  data: number[]
  type: 'line' | 'bar'
  yAxisIndex?: number
}
```

### SeriesItem 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| name | 系列名称 | `string` | - |
| data | 系列数据 | `number[]` | - |
| type | 图表类型 | `'line' \| 'bar'` | - |
| yAxisIndex | Y轴索引，用于双轴图表 | `0 \| 1` | `0` |
