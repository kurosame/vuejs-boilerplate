import Vue from 'vue'
import Vuex from 'vuex'
import * as assert from 'power-assert'
import getters from '@/vuex/getters/counter'

Vue.use(Vuex)

describe('counter.js - getters', () => {
  it('all', () => {
    const store = new Vuex.Store({
      getters,
      state: {
        count: 1,
        axiosCount: 2,
        asyncCount: 3
      }
    })

    assert.equal(store.getters.count, 1)
    assert.equal(store.getters.axiosCount, 2)
    assert.equal(store.getters.asyncCount, 3)
  })
})
