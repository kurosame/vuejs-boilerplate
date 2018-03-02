import Vue from 'vue'
import Vuex from 'vuex'
import * as assert from 'power-assert'
import getters from '@/vuex/getters/counter'

Vue.use(Vuex)

export class State {
  count: number = 1
  axiosCount: number = 2
  asyncCount: number = 3
}

describe('getters', () => {
  describe('counter.ts', () => {
    it('count', () => {
      const store = new Vuex.Store({ getters, state: new State() })

      assert.equal(store.getters.count, 1)
    })

    it('axiosCount', () => {
      const store = new Vuex.Store({ getters, state: new State() })

      assert.equal(store.getters.axiosCount, 2)
    })

    it('asyncCount', () => {
      const store = new Vuex.Store({ getters, state: new State() })

      assert.equal(store.getters.asyncCount, 3)
    })
  })
})
