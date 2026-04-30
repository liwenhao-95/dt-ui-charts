const zh = {
  lang: 'zh-CN',
  label: '简体中文',
  themeConfig: {
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short' as const,
        timeStyle: 'short' as const
      }
    },
    outline: {
      label: '页面导航'
    },
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    docFooter: {
      prev: '← 上一页',
      next: '下一页 →'
    },
    footer: {
      message: '基于 Vue 3 + ECharts 6.0 构建',
      copyright: 'MIT Licensed | Copyright © 2024-present'
    }
  }
}

const search = {
  root: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        noResultsText: '未找到结果',
        resetButtonTitle: '清除搜索',
        footer: {
          selectText: '选择',
          navigateText: '导航',
          closeText: '关闭'
        }
      }
    }
  }
}

export { zh, search }
