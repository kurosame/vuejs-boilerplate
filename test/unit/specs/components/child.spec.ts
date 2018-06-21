import Child from '@/components/Child.vue'
import { mount } from '@vue/test-utils'

const wrapper = mount(Child, {
  propsData: {
    counter: {
      count: 1,
      axiosCount: 2,
      asyncAwaitCount: 3
    }
  }
})

test('Data binding from the propsData.count to the count', () => {
  expect(wrapper.html()).toContain('<span class="count">1</span>')
})

test('Click the button.add-count will emit the addCount', () => {
  expect(wrapper.emitted('addCount')).toBeUndefined()

  wrapper.find('button.add-count').trigger('click')

  expect(wrapper.emitted('addCount')).toBeTruthy()
  expect(wrapper.emitted('addCount')[0]).toEqual([])
})

test('Data binding from the propsData.axiosCount to the axiosCount', () => {
  expect(wrapper.html()).toContain('<span class="axios-count">2</span>')
})

test('Click the button.add-axios-count will emit the addAxiosCount', () => {
  expect(wrapper.emitted('addAxiosCount')).toBeUndefined()

  wrapper.find('button.add-axios-count').trigger('click')

  expect(wrapper.emitted('addAxiosCount')).toBeTruthy()
  expect(wrapper.emitted('addAxiosCount')[0]).toEqual([])
})

test('Data binding from the propsData.asyncAwaitCount to the asyncAwaitCount', () => {
  expect(wrapper.html()).toContain('<span class="async-await-count">3</span>')
})

test('Click the button.add-async-await-count will emit the addAsyncAwaitCount', () => {
  expect(wrapper.emitted('addAsyncAwaitCount')).toBeUndefined()

  wrapper.find('button.add-async-await-count').trigger('click')

  expect(wrapper.emitted('addAsyncAwaitCount')).toBeTruthy()
  expect(wrapper.emitted('addAsyncAwaitCount')[0]).toEqual([])
})

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
