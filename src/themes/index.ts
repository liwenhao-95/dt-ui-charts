import type { EChartsOption } from 'echarts'

export const defaultTheme: EChartsOption = {
  color: ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73D13D', '#36CBCB', '#FFA940', '#FF4D4F']
}

export const darkTheme: EChartsOption = {
  color: ['#4992FF', '#37E4A1', '#FFC53D', '#FF6B6B', '#A277FF', '#12CBC4', '#FDA7DF', '#D980FA'],
  backgroundColor: '#1a1a2e',
  textStyle: {
    color: '#e0e0e0'
  }
}

export type ThemeName = 'default' | 'dark'

export const themes: Record<ThemeName, EChartsOption> = {
  default: defaultTheme,
  dark: darkTheme
}
