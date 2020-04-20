import { GetterTree } from 'vuex'
import { CounterState } from '@/vuex/modules/counter'
import { States } from '@/vuex/modules/state'
import getters from '@/vuex/getters/counter'

let wrapper: (
  state: CounterState
) => GetterTree<CounterState, States> | undefined
beforeEach(() => {
  wrapper = (state): GetterTree<CounterState, Pick<States, 'counter'>> =>
    getters.counter(state, undefined, { counter: state }, undefined)
})
afterEach(() => {
  wrapper = (): undefined => undefined
})

test('Compute `counter`', () => {
  expect(wrapper({ count: 1, axiosCount: 2, asyncAwaitCount: 3 })).toEqual({
    count: 1,
    axiosCount: 2,
    asyncAwaitCount: 3
  })
})
