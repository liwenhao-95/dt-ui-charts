import type { App } from 'vue'
import * as echarts from 'echarts'
import * as themes from './themes'

export * from './components'
export * from './types'
export { themes }

// 注册内置主题
echarts.registerTheme('default', themes.defaultTheme)
echarts.registerTheme('dark', themes.darkTheme)

import BaseChart from './components/BaseChart.vue'
import LineChart from './components/LineChart.vue'
import BarChart from './components/BarChart.vue'
import PieChart from './components/PieChart.vue'
import ScatterChart from './components/ScatterChart.vue'
import GaugeChart from './components/GaugeChart.vue'
import MixChart from './components/MixChart.vue'

const install = (app: App) => {
  app.component('DtBaseChart', BaseChart)
  app.component('DtLineChart', LineChart)
  app.component('DtBarChart', BarChart)
  app.component('DtPieChart', PieChart)
  app.component('DtScatterChart', ScatterChart)
  app.component('DtGaugeChart', GaugeChart)
  app.component('DtMixChart', MixChart)
}

export default { install }