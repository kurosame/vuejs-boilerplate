import Header from '@/components/Header.vue'
import { mount, Wrapper } from '@vue/test-utils'

let wrapper: Wrapper<Vue>
beforeEach(() => {
  wrapper = mount(Header)
})
afterEach(() => wrapper.destroy())

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
