import { mount } from '@vue/test-utils'
import Child from '@/components/Child.vue'

describe('components', () => {
  describe('Child.vue', () => {
    const wrapper = mount(Child, {
      propsData: {
        addValue: () => {},
        axiosSample: () => {},
        asyncAwaitSample: () => {},
        count: 1,
        axiosCount: 2,
        asyncAwaitCount: 3
      }
    })

    test('count', () => {
      expect(wrapper.html()).toContain('<span class="count">1</span>')
    })

    test('axiosCount', () => {
      expect(wrapper.html()).toContain('<span class="axios-count">2</span>')
    })

    test('asyncAwaitCount', () => {
      expect(wrapper.html()).toContain(
        '<span class="async-await-count">3</span>'
      )
    })
  })
})
