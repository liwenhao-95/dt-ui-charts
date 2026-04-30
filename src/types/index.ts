import type { EChartsOption } from 'echarts'

export interface ChartProps {
  option: EChartsOption
  width?: string
  height?: string
  autoResize?: boolean
}

export interface LineChartData {
  xAxis: string[]
  series: {
    name: string
    data: number[]
  }[]
}

export interface BarChartData {
  xAxis: string[]
  series: {
    name: string
    data: number[]
  }[]
}

export interface PieChartData {
  name: string
  value: number
}[]

export interface ScatterChartData {
  data: [number, number]
}[]

export interface GaugeChartData {
  value: number
  name?: string
}
