---
title: LineChart 折线图
---

<script setup>
import { LineChart } from 'vue3-echarts-charts'

const chartData = {
  xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  series: [
    { name: '销量', data: [120, 200, 150, 80, 70, 110, 130] },
    { name: '利润', data: [50, 100, 80, 60, 40, 70, 90] }
  ]
}
</script>

# LineChart 折线图

## 基础用法

<LineChart v-bind="chartData" />

```vue
<script setup>
import { LineChart } from 'vue3-echarts-charts'

const chartData = {
  xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  series: [
    { name: '销量', data: [120, 200, 150, 80, 70, 110, 130] },
    { name: '利润', data: [50, 100, 80, 60, 40, 70, 90] }
  ]
}
</script>

<template>
  <LineChart v-bind="chartData" />
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
}
```
