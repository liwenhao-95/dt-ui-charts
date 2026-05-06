import type { EChartsOption } from 'echarts'

export type ThemeName = 'default' | 'dark'

export interface DtBaseProps {
  option?: EChartsOption
  theme?: ThemeName
  title?: string
  width?: string
  height?: string
  autoResize?: boolean
}
