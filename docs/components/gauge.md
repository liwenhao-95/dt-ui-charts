---
title: GaugeChart 仪表盘
---

<script setup>
import { GaugeChart } from 'vue3-echarts-charts'

const chartData = {
  series: [
    {
      type: 'gauge',
      name: '完成率',
      detail: { formatter: '{value}%' },
      data: [{ value: 75, name: '完成率' }]
    }
  ]
}
</script>

# GaugeChart 仪表盘

## 基础用法

<GaugeChart :option="chartData" />

```vue
<script setup>
import { GaugeChart } from 'vue3-echarts-charts'

const chartData = {
  series: [
    {
      type: 'gauge',
      name: '完成率',
      detail: { formatter: '{value}%' },
      data: [{ value: 75, name: '完成率' }]
    }
  ]
}
</script>

<template>
  <GaugeChart :option="chartData" />
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
