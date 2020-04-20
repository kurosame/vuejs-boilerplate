import { MutationTree } from 'vuex'
import modules, { CounterState } from '@/vuex/modules/counter'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'

let wrapper: (
  type: string,
  state: CounterState
) => MutationTree<CounterState> | undefined
beforeEach(() => {
  wrapper = (type, state): MutationTree<CounterState> =>
    modules.mutations[type](state, 1)
})
afterEach(() => {
  wrapper = (): undefined => undefined
})

test('Set `state.count`', () => {
  const state = { count: 1, axiosCount: 2, asyncAwaitCount: 3 }
  wrapper(ADD_COUNT, state)

  expect(state.count).toEqual(2)
  expect(state.axiosCount).toEqual(2)
  expect(state.asyncAwaitCount).toEqual(3)
})

test('Set `state.axiosCount`', () => {
  const state = { count: 1, axiosCount: 2, asyncAwaitCount: 3 }
  wrapper(ADD_AXIOS_COUNT, state)

  expect(state.count).toEqual(1)
  expect(state.axiosCount).toEqual(3)
  expect(state.asyncAwaitCount).toEqual(3)
})

test('Set `state.asyncAwaitCount`', () => {
  const state = { count: 1, axiosCount: 2, asyncAwaitCount: 3 }
  wrapper(ADD_ASYNC_AWAIT_COUNT, state)

  expect(state.count).toEqual(1)
  expect(state.axiosCount).toEqual(2)
  expect(state.asyncAwaitCount).toEqual(4)
})
