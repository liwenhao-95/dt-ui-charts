import type { EChartsOption } from 'echarts'

export interface DtBaseProps {
  option?: EChartsOption
  title?: string
  width?: string
  height?: string
  autoResize?: boolean
}
