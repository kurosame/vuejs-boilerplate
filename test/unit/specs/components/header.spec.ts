import Header from '@/components/globals/Header.vue'
import { mount } from '@vue/test-utils'

const wrapper = mount(Header)

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
