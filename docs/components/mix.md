---
title: MixChart 折柱混合图
---

<script setup>
import { MixChart } from 'vue3-echarts-charts'

const chartData = {
  xAxis: { data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] },
  series: [
    { type: 'bar', name: '蒸发量', data: [120, 132, 101, 134, 90, 230, 210] },
    { type: 'line', name: '平均温度', data: [22, 182, 91, 24, 120, 132, 91], yAxisIndex: 1 }
  ]
}
</script>

# MixChart 折柱混合图

## 基础用法

<MixChart :option="chartData" />

```vue
<script setup>
import { MixChart } from 'vue3-echarts-charts'

const chartData = {
  xAxis: { data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] },
  series: [
    { type: 'bar', name: '蒸发量', data: [120, 132, 101, 134, 90, 230, 210] },
    { type: 'line', name: '平均温度', data: [22, 182, 91, 24, 120, 132, 91], yAxisIndex: 1 }
  ]
}
</script>

<template>
  <MixChart :option="chartData" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| option | ECharts 配置项 | `EChartsOption` | `{}` |
| title | 图表标题 | `string` | - |
| width | 图表宽度 | `string` | `'100%'` |
| height | 图表高度 | `string` | `'300px'` |
| autoResize | 自动调整大小 | `boolean` | `true` |

### SeriesItem 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| name | 系列名称 | `string` | - |
| data | 系列数据 | `number[]` | - |
| type | 图表类型 | `'line' \| 'bar'` | - |
| yAxisIndex | Y轴索引，用于双轴图表 | `0 \| 1` | `0` |
