import Child from '@/components/Child.vue'
import { mount } from '@vue/test-utils'

const wrapper = mount(Child, {
  propsData: {
    count: 1,
    axiosCount: 2,
    asyncAwaitCount: 3
  }
})

test('Data binding from the propsData.count to the count', () => {
  expect(wrapper.html()).toContain('<span class="count">1</span>')
})

test('Click the button.add-value will emit the addValue', () => {
  expect(wrapper.emitted('addValue')).toBeUndefined()

  wrapper.find('button.add-value').trigger('click')

  expect(wrapper.emitted('addValue')).toBeTruthy()
  expect(wrapper.emitted('addValue')[0]).toEqual([])
})

test('Data binding from the propsData.axiosCount to the axiosCount', () => {
  expect(wrapper.html()).toContain('<span class="axios-count">2</span>')
})

test('Click the button.axios-sample will emit the axiosSample', () => {
  expect(wrapper.emitted('axiosSample')).toBeUndefined()

  wrapper.find('button.axios-sample').trigger('click')

  expect(wrapper.emitted('axiosSample')).toBeTruthy()
  expect(wrapper.emitted('axiosSample')[0]).toEqual([])
})

test('Data binding from the propsData.asyncAwaitCount to the asyncAwaitCount', () => {
  expect(wrapper.html()).toContain('<span class="async-await-count">3</span>')
})

test('Click the button.async-await-sample will emit the asyncAwaitSample', () => {
  expect(wrapper.emitted('asyncAwaitSample')).toBeUndefined()

  wrapper.find('button.async-await-sample').trigger('click')

  expect(wrapper.emitted('asyncAwaitSample')).toBeTruthy()
  expect(wrapper.emitted('asyncAwaitSample')[0]).toEqual([])
})

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
