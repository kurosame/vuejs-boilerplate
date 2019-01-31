import Child from '@/components/Child.vue'
import { mount } from '@vue/test-utils'

const wrapper = mount(Child, {
  propsData: {
    counter: {
      count: 147,
      axiosCount: 258,
      asyncAwaitCount: 369
    }
  }
})

test('Data binding from the propsData.count to the count', () => {
  expect(wrapper.find('[data-test="count"]').text()).toEqual('147')
})

test('Click the add-count will emit the add-count', () => {
  expect(wrapper.emitted('add-count')).toBeUndefined()

  wrapper.find('[data-test="add-count"]').trigger('click')

  expect(wrapper.emitted('add-count')).toBeTruthy()
  expect(wrapper.emitted('add-count')[0]).toEqual([])
})

test('Data binding from the propsData.axiosCount to the axiosCount', () => {
  expect(wrapper.find('[data-test="axios-count"]').text()).toEqual('258')
})

test('Click the add-axios-count will emit the add-axios-count', () => {
  expect(wrapper.emitted('add-axios-count')).toBeUndefined()

  wrapper.find('[data-test="add-axios-count"]').trigger('click')

  expect(wrapper.emitted('add-axios-count')).toBeTruthy()
  expect(wrapper.emitted('add-axios-count')[0]).toEqual([])
})

test('Data binding from the propsData.asyncAwaitCount to the asyncAwaitCount', () => {
  expect(wrapper.find('[data-test="async-await-count"]').text()).toEqual('369')
})

test('Click the add-async-await-count will emit the addAsyncAwaitCount', () => {
  expect(wrapper.emitted('add-async-await-count')).toBeUndefined()

  wrapper.find('[data-test="add-async-await-count"]').trigger('click')

  expect(wrapper.emitted('add-async-await-count')).toBeTruthy()
  expect(wrapper.emitted('add-async-await-count')[0]).toEqual([])
})

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
