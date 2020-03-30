import Header from '@/components/Header.vue'
import { mount, Wrapper } from '@vue/test-utils'

let wrapper: Wrapper<Header>
beforeEach(() => {
  wrapper = mount(Header)
})

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
