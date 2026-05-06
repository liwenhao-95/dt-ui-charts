<template>
  <div ref="chartRef" :style="{ width: width, height: height }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick, computed } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { merge } from 'lodash-es'

defineOptions({
  name: 'BaseChart'
})

interface Props {
  option?: EChartsOption
  type?: string
  title?: string
  width?: string
  height?: string
  autoResize?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '300px',
  autoResize: true
})

const chartRef = ref<HTMLDivElement>()
let chartInstance: echarts.ECharts | null = null

// 内置默认配置
const defaultConfig: EChartsOption = {
  color: ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73D13D', '#36CBCB', '#FFA940', '#FF4D4F'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    },
    textStyle: {
      fontSize: 14,
      color: '#333'
    },
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#e5e5e5',
    borderWidth: 1,
    padding: [10, 15]
  },
  legend: {
    top: 0,
    itemWidth: 14,
    itemHeight: 8,
    itemGap: 20,
    textStyle: {
      fontSize: 13,
      color: '#666'
    }
  },
  xAxis: {
    type: 'category',
    axisPointer: {
      type: 'shadow'
    },
    axisLine: {
      lineStyle: {
        color: '#e5e5e5'
      }
    },
    axisLabel: {
      color: '#666',
      fontSize: 12
    },
    axisTick: {
      lineStyle: {
        color: '#e5e5e5'
      }
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: '#e5e5e5'
      }
    },
    axisLabel: {
      color: '#666',
      fontSize: 12
    },
    axisTick: {
      lineStyle: {
        color: '#e5e5e5'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#f0f0f0',
        type: 'dashed'
      }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  series: {
    label: {
      show: false
    },
    emphasis: {
      label: {
        show: false
      }
    }
  }
}

// 深度合并配置: defaultConfig → title → type → option，用户的 option 优先级最高
const mergedOption = computed<EChartsOption>(() => {
  const titleOption = props.title ? { title: { text: props.title } } : {}

  let typeOption: EChartsOption = {}
  if (props.type) {
    const seriesData = (props.option?.series as any[]) || []
    typeOption = {
      series: seriesData.map((item: any) => ({
        ...item,
        type: props.type
      }))
    }
  }

  // 检查 series 类型，饼图和仪表盘不需要坐标轴
  const series = (props.option?.series as any[]) || []
  const hasNoAxis = series.some((item: any) =>
    ['pie', 'gauge'].includes(item?.type)
  )
  const axisOption = hasNoAxis ? { xAxis: { show: false }, yAxis: { show: false } } : {}

  return merge({}, defaultConfig, titleOption, axisOption, typeOption, props.option || {})
})

const initChart = () => {
  if (!chartRef.value) return

  chartInstance = echarts.init(chartRef.value)
  chartInstance.setOption(mergedOption.value)
}

const updateChart = () => {
  if (chartInstance) {
    chartInstance.setOption(mergedOption.value, true)
  }
}

const resizeChart = () => {
  chartInstance?.resize()
}

const handleResize = () => {
  if (props.autoResize) {
    resizeChart()
  }
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  nextTick(() => {
    initChart()

    if (props.autoResize && chartRef.value) {
      resizeObserver = new ResizeObserver(handleResize)
      resizeObserver.observe(chartRef.value)
    }

    window.addEventListener('resize', handleResize)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  resizeObserver?.disconnect()
  resizeObserver = null
  chartInstance?.dispose()
  chartInstance = null
})

watch(
  () => props.option,
  () => {
    nextTick(() => {
      updateChart()
    })
  },
  { deep: true }
)
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
