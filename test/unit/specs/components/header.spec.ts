import Header from '@/components/globals/Header.vue'
import { mount } from '@vue/test-utils'

describe('components', () => {
  describe('Header.vue', () => {
    const wrapper = mount(Header)

    test('snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
