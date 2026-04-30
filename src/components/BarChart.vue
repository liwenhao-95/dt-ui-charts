<template>
  <BaseChart :option="option" :width="width" :height="height" :auto-resize="autoResize" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import BaseChart from './BaseChart.vue'

defineOptions({
  name: 'BarChart'
})

interface SeriesItem {
  name: string
  data: number[]
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

const option = computed<EChartsOption>(() => ({
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
  yAxis: {
    type: 'value'
  },
  series: props.series.map((item) => ({
    name: item.name,
    type: 'bar',
    data: item.data
  }))
}))
</script>
