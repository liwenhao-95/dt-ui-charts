<template>
  <BaseChart
    type="bar"
    :option="option"
    :title="title"
    :width="width"
    :height="height"
    :auto-resize="autoResize"
    :theme="theme"
  />
</template>

<script setup lang="ts">
import BaseChart from './BaseChart.vue'
import type { DtBaseProps } from '../types'

defineOptions({
  name: 'DtBarChart'
})

withDefaults(defineProps<DtBaseProps>(), {
  width: '100%',
  height: '300px',
  autoResize: true
})
</script>
