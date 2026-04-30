# 开发规范

## 目录结构

```
src/
├── components/          # 图表组件
│   ├── BaseChart.vue    # 基础图表组件
│   ├── LineChart.vue    # 折线图
│   ├── BarChart.vue     # 柱状图
│   ├── PieChart.vue     # 饼图
│   ├── ScatterChart.vue # 散点图
│   ├── GaugeChart.vue   # 仪表盘
│   └── index.ts         # 组件导出
├── types/               # TypeScript 类型定义
│   └── index.ts
├── utils/               # 工具函数
├── style.css            # 样式文件
└── index.ts             # 库入口文件
```

## 组件开发规范

### 命名规范

- 组件文件使用 PascalCase 命名（如 `LineChart.vue`）
- 组件名使用 PascalCase（如 `LineChart`）
- Props 使用 camelCase（如 `autoResize`）

### Props 定义

使用 TypeScript interface 定义 Props：

```ts
interface Props {
  xAxis: string[]
  series: SeriesItem[]
  width?: string
  height?: string
  autoResize?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '300px',
  autoResize: true
})
```

### ECharts 配置

所有图表组件通过 `computed` 属性生成 ECharts 配置：

```ts
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'

const option = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'axis'
  },
  // ... 其他配置
}))
```

## 代码风格

- 使用 TypeScript 严格模式
- 使用 Composition API
- 使用 `setup` 语法糖
- 组件文件使用 `.vue` 扩展名
- 样式使用 scoped 作用域

## 提交规范

- feat: 新功能
- fix: 修复 bug
- docs: 文档更新
- style: 代码格式
- refactor: 重构
- test: 测试
- chore: 构建/工具
