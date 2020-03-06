import { mount } from '@vue/test-utils'
import Child from '@/components/Child.vue'

const wrapper = mount(Child, {
  propsData: { count: 147 }
})
wrapper.vm.$emit('add-count')

test('Data binding props.count to count', () => {
  expect(wrapper.find('[data-test="count"]').text()).toEqual('147')
})

test('Click the add-count will emit the add-count', () => {
  wrapper.find('[data-test="add-count"]').trigger('click')

  expect(wrapper.emitted('add-count')).toBeTruthy()
})

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
