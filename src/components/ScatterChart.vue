<template>
  <BaseChart :option="option" :width="width" :height="height" :auto-resize="autoResize" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import BaseChart from './BaseChart.vue'

defineOptions({
  name: 'ScatterChart'
})

interface Props {
  data: [number, number][]
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
    trigger: 'item'
  },
  xAxis: {
    type: 'value',
    scale: true
  },
  yAxis: {
    type: 'value',
    scale: true
  },
  series: [
    {
      type: 'scatter',
      data: props.data,
      symbolSize: 10
    }
  ]
}))
</script>
