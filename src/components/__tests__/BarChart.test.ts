import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BarChart from '../BarChart.vue'

describe('BarChart', () => {
  it('renders with basic option', () => {
    const wrapper = mount(BarChart, {
      props: {
        option: {
          xAxis: { data: ['周一', '周二'] },
          series: [{ name: '销量', data: [120, 200] }]
        }
      }
    })
    expect(wrapper.findComponent(BarChart).exists()).toBe(true)
  })

  it('accepts width and height props', () => {
    const wrapper = mount(BarChart, {
      props: {
        width: '500px',
        height: '400px',
        option: {}
      }
    })
    expect(wrapper.props('width')).toBe('500px')
    expect(wrapper.props('height')).toBe('400px')
  })

  it('accepts title prop', () => {
    const wrapper = mount(BarChart, {
      props: {
        title: '销售报表',
        option: {}
      }
    })
    expect(wrapper.props('title')).toBe('销售报表')
  })
})
