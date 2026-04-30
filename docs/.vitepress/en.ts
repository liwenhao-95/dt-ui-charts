const en = {
  lang: 'en-US',
  label: 'English',
  themeConfig: {
    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'short' as const,
        timeStyle: 'short' as const
      }
    },
    outline: {
      label: 'On this page'
    },
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    docFooter: {
      prev: '← Previous',
      next: 'Next →'
    },
    footer: {
      message: 'Built with Vue 3 + ECharts 6.0',
      copyright: 'MIT Licensed | Copyright © 2024-present'
    }
  }
}

export { en }
