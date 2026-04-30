<template>
  <BaseChart :option="option" :width="width" :height="height" :auto-resize="autoResize" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import BaseChart from './BaseChart.vue'

defineOptions({
  name: 'GaugeChart'
})

interface Props {
  value: number
  name?: string
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
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  series: [
    {
      type: 'gauge',
      name: props.name || '',
      detail: {
        formatter: '{value}%'
      },
      data: [{ value: props.value, name: props.name || '' }]
    }
  ]
}))
</script>
