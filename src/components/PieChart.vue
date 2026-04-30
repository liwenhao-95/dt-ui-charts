<template>
  <BaseChart :option="option" :width="width" :height="height" :auto-resize="autoResize" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import BaseChart from './BaseChart.vue'

defineOptions({
  name: 'PieChart'
})

interface PieDataItem {
  name: string
  value: number
}

interface Props {
  data: PieDataItem[]
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
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  series: [
    {
      type: 'pie',
      radius: '50%',
      data: props.data,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}))
</script>
