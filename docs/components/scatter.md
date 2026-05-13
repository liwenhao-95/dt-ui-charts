---
title: ScatterChart 散点图
---

<script setup>
import { DtScatterChart } from 'vue3-echarts-charts'

const chartData = {
  xAxis: { type: 'value', scale: true },
  yAxis: { type: 'value', scale: true },
  series: [
    {
      type: 'scatter',
      data: [
        [10.0, 8.04], [8.0, 6.95], [13.0, 7.58], [9.0, 8.81],
        [11.0, 8.33], [14.0, 9.96], [6.0, 7.24], [4.0, 4.26],
        [12.0, 10.84], [7.0, 4.82], [5.0, 5.68]
      ]
    }
  ]
}
</script>

# ScatterChart 散点图

## 基础用法

<DtScatterChart :option="chartData" />

```vue
<script setup>
import { DtScatterChart } from 'vue3-echarts-charts'

const chartData = {
  xAxis: { type: 'value', scale: true },
  yAxis: { type: 'value', scale: true },
  series: [
    {
      type: 'scatter',
      data: [
        [10.0, 8.04], [8.0, 6.95], [13.0, 7.58], [9.0, 8.81],
        [11.0, 8.33], [14.0, 9.96], [6.0, 7.24], [4.0, 4.26],
        [12.0, 10.84], [7.0, 4.82], [5.0, 5.68]
      ]
    }
  ]
}
</script>

<template>
  <DtScatterChart :option="chartData" />
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
