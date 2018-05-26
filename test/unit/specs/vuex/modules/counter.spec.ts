import modules from '@/vuex/modules/counter'
import { ADD_VALUE, ASYNC_AWAIT_SAMPLE, AXIOS_SAMPLE } from '@/vuex/types'

test('Set the state.count', () => {
  const state = { count: 1 }
  const wrapper = (m: any) => m[ADD_VALUE](state, 1)
  wrapper(modules.mutations)

  expect(state.count).toEqual(2)
})

test('Set the state.axiosCount', () => {
  const state = { axiosCount: 2 }
  const wrapper = (m: any) => m[AXIOS_SAMPLE](state, 2)
  wrapper(modules.mutations)

  expect(state.axiosCount).toEqual(4)
})

test('Set the state.asyncAwaitCount', () => {
  const state = { asyncAwaitCount: 3 }
  const wrapper = (m: any) => m[ASYNC_AWAIT_SAMPLE](state, 3)
  wrapper(modules.mutations)

  expect(state.asyncAwaitCount).toEqual(6)
})
