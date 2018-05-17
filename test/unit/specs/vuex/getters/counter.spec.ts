import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/vuex/getters/counter'

Vue.use(Vuex)

export class State {
  count: number = 1
  axiosCount: number = 2
  asyncAwaitCount: number = 3
}

describe('getters', () => {
  describe('counter.ts', () => {
    test('count', () => {
      const store = new Vuex.Store({ getters, state: new State() })

      expect(store.getters.count).toEqual(1)
    })

    test('axiosCount', () => {
      const store = new Vuex.Store({ getters, state: new State() })

      expect(store.getters.axiosCount).toEqual(2)
    })

    test('asyncAwaitCount', () => {
      const store = new Vuex.Store({ getters, state: new State() })

      expect(store.getters.asyncAwaitCount).toEqual(3)
    })
  })
})
