---
title: GaugeChart 仪表盘
---

<script setup>
import { GaugeChart } from 'vue3-echarts-charts'
</script>

# GaugeChart 仪表盘

## 基础用法

<GaugeChart :value="75" name="完成率" />

```vue
<script setup>
import { GaugeChart } from 'vue3-echarts-charts'
</script>

<template>
  <GaugeChart :value="75" name="完成率" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value | 仪表盘数值 | `number` | `0` |
| name | 名称 | `string` | `''` |
| width | 图表宽度 | `string` | `'100%'` |
| height |