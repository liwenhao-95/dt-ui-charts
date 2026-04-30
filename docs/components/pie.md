---
title: PieChart 饼图
---

<script setup>
import { PieChart } from 'vue3-echarts-charts'

const chartData = {
  series: [
    {
      type: 'pie',
      radius: '50%',
      data: [
        { name: '直接访问', value: 335 },
        { name: '邮件营销', value: 310 },
        { name: '联盟广告', value: 234 },
        { name: '视频广告', value: 135 },
        { name: '搜索引擎', value: 1548 }
      ]
    }
  ]
}
</script>

# PieChart 饼图

## 基础用法

<PieChart :option="chartData" />

```vue
<script setup>
import { PieChart } from 'vue3-echarts-charts'

const chartData = {
  series: [
    {
      type: 'pie',
      radius: '50%',
      data: [
        { name: '直接访问', value: 335 },
        { name: '邮件营销', value: 310 },
        { name: '联盟广告', value: 234 },
        { name: '视频广告', value: 135 },
        { name: '搜索引擎', value: 1548 }
      ]
    }
  ]
}
</script>

<template>
  <PieChart :option="chartData" />
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
