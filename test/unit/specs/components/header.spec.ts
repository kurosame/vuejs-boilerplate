import { mount } from '@vue/test-utils'
import Header from '@/components/globals/Header.vue'

describe('components', () => {
  describe('Header.vue', () => {
    const wrapper = mount(Header)

    test('snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
