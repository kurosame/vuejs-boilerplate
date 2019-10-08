import Parent from '@/pages/Parent.vue'
import { shallowMount } from '@vue/test-utils'

const wrapper = shallowMount(Parent)

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
