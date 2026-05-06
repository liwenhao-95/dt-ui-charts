<template>
  <BaseChart
    :option="option"
    :title="title"
    :theme="theme"
    :width="width"
    :height="height"
    :auto-resize="autoResize"
  />
</template>

<script setup lang="ts">
import BaseChart from './BaseChart.vue'
import type { DtBaseProps } from '../types'

defineOptions({
  name: 'DtScatterChart'
})

const props = withDefaults(defineProps<DtBaseProps>(), {
  width: '100%',
  height: '300px',
  autoResize: true
})
</script>
