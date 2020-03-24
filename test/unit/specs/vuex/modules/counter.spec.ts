import modules from '@/vuex/modules/counter'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'

test('Set `state.count`', () => {
  const state = { count: 1 }
  const wrapper = (m: any) => m[ADD_COUNT](state, 1)
  wrapper(modules.mutations)

  expect(state.count).toEqual(2)
})

test('Set `state.axiosCount`', () => {
  const state = { axiosCount: 2 }
  const wrapper = (m: any) => m[ADD_AXIOS_COUNT](state, 2)
  wrapper(modules.mutations)

  expect(state.axiosCount).toEqual(4)
})

test('Set `state.asyncAwaitCount`', () => {
  const state = { asyncAwaitCount: 3 }
  const wrapper = (m: any) => m[ADD_ASYNC_AWAIT_COUNT](state, 3)
  wrapper(modules.mutations)

  expect(state.asyncAwaitCount).toEqual(6)
})
