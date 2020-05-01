import Child from '@/components/Child.vue'
import { mount, Wrapper } from '@vue/test-utils'

let wrapper: Wrapper<Vue>
beforeEach(() => {
  wrapper = mount(Child, {
    propsData: { count: 147 }
  })
  wrapper.vm.$emit('add-count')
})
afterEach(() => wrapper.destroy())

test('Data binding `props.count` to `count`', () => {
  expect(wrapper.find('[data-testid="count"]').text()).toEqual('147')
})

test('Click `add-count` will emit `add-count`', () => {
  wrapper.find('[data-testid="add-count"]').trigger('click')

  expect(wrapper.emitted('add-count')).toBeTruthy()
})

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
