<template>
  <BaseChart
    :option="mergedOption"
    :title="title"
    :theme="theme"
    :width="width"
    :height="height"
    :auto-resize="autoResize"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import { merge } from 'lodash-es'
import BaseChart from './BaseChart.vue'
import type { DtBaseProps } from '../types'

defineOptions({
  name: 'DtMixChart'
})

const props = withDefaults(defineProps<DtBaseProps>(), {
  width: '100%',
  height: '300px',
  autoResize: true
})

const mergedOption = computed<EChartsOption>(() => {
  const series = (props.option?.series as any[]) || []
  const yAxisIndices = series.map((item) => item.yAxisIndex ?? 0)
  const yAxisCount = Math.max(...yAxisIndices) + 1

  let yAxisConfig: EChartsOption = {}
  if (yAxisCount === 1) {
    yAxisConfig = { yAxis: { type: 'value' } }
  } else {
    yAxisConfig = {
      yAxis: [
        { type: 'value', position: 'left' },
        { type: 'value', position: 'right' }
      ]
    }
  }

  return merge({}, yAxisConfig, props.option || {})
})
</script>
