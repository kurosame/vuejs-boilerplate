import Vue from 'vue'
import Vuex from 'vuex'
import * as assert from 'power-assert'
import modules from '@/vuex/modules/counter'
import { State } from '@/vuex/state/counter'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'

Vue.use(Vuex)

describe('mutations', () => {
  describe('counter.ts', () => {
    it('ADD_VALUE', () => {
      const store = new Vuex.Store({
        state: new State(),
        mutations: modules.mutations
      })
      store.commit(ADD_VALUE, 1)

      assert.equal(store.state.count, 1)
    })

    it('AXIOS_SAMPLE', () => {
      const store = new Vuex.Store({
        state: new State(),
        mutations: modules.mutations
      })
      store.commit(AXIOS_SAMPLE, 2)

      assert.equal(store.state.axiosCount, 2)
    })

    it('ASYNC_AWAIT_SAMPLE', () => {
      const store = new Vuex.Store({
        state: new State(),
        mutations: modules.mutations
      })
      store.commit(ASYNC_AWAIT_SAMPLE, 3)

      assert.equal(store.state.asyncCount, 3)
    })
  })
})
