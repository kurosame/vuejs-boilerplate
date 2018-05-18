import { mount } from '@vue/test-utils'
import Child from '@/components/Child.vue'

describe('components', () => {
  describe('Child.vue', () => {
    const wrapper = mount(Child, {
      propsData: {
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

    test('addValue', () => {
      expect(wrapper.emitted('addValue')).toBeUndefined()

      wrapper.find('button.addValue').trigger('click')

      expect(wrapper.emitted('addValue')).toBeTruthy()
      expect(wrapper.emitted('addValue')[0]).toEqual([])
    })

    test('axiosSample', () => {
      expect(wrapper.emitted('axiosSample')).toBeUndefined()

      wrapper.find('button.axiosSample').trigger('click')

      expect(wrapper.emitted('axiosSample')).toBeTruthy()
      expect(wrapper.emitted('axiosSample')[0]).toEqual([])
    })

    test('asyncAwaitSample', () => {
      expect(wrapper.emitted('asyncAwaitSample')).toBeUndefined()

      wrapper.find('button.asyncAwaitSample').trigger('click')

      expect(wrapper.emitted('asyncAwaitSample')).toBeTruthy()
      expect(wrapper.emitted('asyncAwaitSample')[0]).toEqual([])
    })
  })
})
