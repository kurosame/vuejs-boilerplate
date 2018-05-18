import modules from '@/vuex/modules/counter'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'

describe('mutations', () => {
  describe('counter.ts', () => {
    test('ADD_VALUE', () => {
      const state = { count: 1 }
      const wrapper = (mutations: any) => mutations[ADD_VALUE](state, 1)
      wrapper(modules.mutations)

      expect(state.count).toEqual(2)
    })

    test('AXIOS_SAMPLE', () => {
      const state = { axiosCount: 2 }
      const wrapper = (mutations: any) => mutations[AXIOS_SAMPLE](state, 2)
      wrapper(modules.mutations)

      expect(state.axiosCount).toEqual(4)
    })

    test('ASYNC_AWAIT_SAMPLE', () => {
      const state = { asyncAwaitCount: 3 }
      const wrapper = (mutations: any) =>
        mutations[ASYNC_AWAIT_SAMPLE](state, 3)
      wrapper(modules.mutations)

      expect(state.asyncAwaitCount).toEqual(6)
    })
  })
})
