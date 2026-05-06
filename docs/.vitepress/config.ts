import { defineConfig } from 'vitepress'
import { nav, sidebar } from './nav'
import { search, zh } from './zh'
import { en } from './en'

export default defineConfig({
  title: 'Vue3 ECharts Charts',
  titleTemplate: '图表组件库',
  description: '基于 ECharts 6.0 的 Vue 3 图表组件库',

  lastUpdated: true,

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  vite: {
    server: {
      port: 5000
    }
  },

  themeConfig: {
    logo: '/favicon.ico',

    search: {
      provider: 'local',
      options: {
        locales: {...search}
      }
    },

    nav,
    sidebar,

    footer: {
      copyright: 'Copyright © 2026 | Powered by dt-ui-charts'
    }
  },

  locales: {
    root: zh,
    en: en
  }
})
