<template>
  <BaseChart :option="option" :width="width" :height="height" :auto-resize="autoResize" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import BaseChart from './BaseChart.vue'

defineOptions({
  name: 'MixChart'
})

export type ChartType = 'line' | 'bar'

export interface SeriesItem {
  name: string
  data: number[]
  type: ChartType
  yAxisIndex?: number
}

interface Props {
  xAxis: string[]
  series: SeriesItem[]
  width?: string
  height?: string
  autoResize?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '300px',
  autoResize: true
})

const yAxisCount = computed(() => {
  const indices = props.series.map((item) => item.yAxisIndex ?? 0)
  return Math.max(...indices) + 1
})

const option = computed<EChartsOption>(() => {
  const yAxisConfig = yAxisCount.value === 1
    ? [{ type: 'value' as const }]
    : [
        { type: 'value' as const, position: 'left' as const },
        { type: 'value' as const, position: 'right' as const }
      ]

  return {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: props.series.map((item) => item.name)
    },
    xAxis: {
      type: 'category',
      data: props.xAxis
    },
    yAxis: yAxisConfig,
    series: props.series.map((item) => ({
      name: item.name,
      type: item.type,
      yAxisIndex: item.yAxisIndex ?? 0,
      data: item.data,
      barMaxWidth: 40
    }))
  }
})
</script>
