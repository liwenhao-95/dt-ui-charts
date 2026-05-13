---
title: LineChart 折线图
---

<script setup>
import { DtLineChart } from 'vue3-echarts-charts'

const chartData = {
  xAxis: { data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] },
  series: [
    { name: '销量', data: [120, 200, 150, 80, 70, 110, 130] },
    { name: '利润', data: [50, 100, 80, 60, 40, 70, 90] }
  ]
}
</script>

# LineChart 折线图

## 基础用法

<DtLineChart :option="chartData" />

```vue
<script setup>
import { DtLineChart } from 'vue3-echarts-charts'

const chartData = {
  xAxis: { data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] },
  series: [
    { name: '销量', data: [120, 200, 150, 80, 70, 110, 130] },
    { name: '利润', data: [50, 100, 80, 60, 40, 70, 90] }
  ]
}
</script>

<template>
  <DtLineChart :option="chartData" />
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
