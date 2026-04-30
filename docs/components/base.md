---
title: BaseChart 基础图表
---

<script setup>
import { BaseChart } from 'vue3-echarts-charts'

const chartOption = {
  tooltip: { trigger: 'axis' },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: { type: 'value' },
  series: [{
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'line'
  }]
}
</script>

# BaseChart 基础图表

## 基础用法

<BaseChart :option="chartOption" />

```vue
<script setup>
import { BaseChart } from 'vue3-echarts-charts'

const chartOption = {
  tooltip: { trigger: 'axis' },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: { type: 'value' },
  series: [{
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'line'
  }]
}
</script>

<template>
  <BaseChart :option="chartOption" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| option | ECharts 配置项 | `EChartsOption` | `{}` |
| width | 图表宽度 | `string` | `'100%'` |
| height | 图表高度 | `string` | `'300px'` |
| autoResize | 自动调整大小 | `boolean` | `true` |

### EChartsOption

BaseChart 的 option 属性接受 ECharts 的标准配置项，详情请参考 [ECharts 官方文档](https://echarts.apache.org/zh/option.html)。
