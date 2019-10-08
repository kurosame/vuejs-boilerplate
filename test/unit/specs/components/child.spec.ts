import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import Child from '@/components/Child.vue'
import { ADD_COUNT, ADD_AXIOS_COUNT, ADD_ASYNC_AWAIT_COUNT } from '@/vuex/types'

const localVue = createLocalVue()
localVue.use(Vuex)

const addCount = jest.fn().mockReturnValue(() => '')
const addAxiosCount = jest.fn()
const addAsyncAwaitCount = jest.fn()

const store = new Vuex.Store({
  actions: {
    [ADD_COUNT]: addCount,
    [ADD_AXIOS_COUNT]: addAxiosCount,
    [ADD_ASYNC_AWAIT_COUNT]: addAsyncAwaitCount
  },
  getters: {
    counter: () => ({ count: 147, axiosCount: 258, asyncAwaitCount: 369 })
  }
})

const wrapper = mount(Child, {
  localVue,
  store
})

test('Data binding from store counter.count to the count', () => {
  expect(wrapper.find('[data-test="count"]').text()).toEqual('147')
})

test('Click the add-count will emit the addCount', () => {
  wrapper.find('[data-test="add-count"]').trigger('click')

  expect(addCount).toBeCalled()
})

test('Data binding from store counter.axiosCount to the axiosCount', () => {
  expect(wrapper.find('[data-test="axios-count"]').text()).toEqual('258')
})

test('Click the add-axios-count will emit the addAxiosCount', () => {
  wrapper.find('[data-test="add-axios-count"]').trigger('click')

  expect(addAxiosCount).toBeCalled()
})

test('Data binding from store counter.asyncAwaitCount to the asyncAwaitCount', () => {
  expect(wrapper.find('[data-test="async-await-count"]').text()).toEqual('369')
})

test('Click the add-async-await-count will emit the addAsyncAwaitCount', () => {
  wrapper.find('[data-test="add-async-await-count"]').trigger('click')

  expect(addAsyncAwaitCount).toBeCalled()
})

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
