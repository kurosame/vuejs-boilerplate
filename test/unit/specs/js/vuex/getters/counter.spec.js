import Vue from 'vue'
import Vuex from 'vuex'
import * as assert from 'power-assert'
import getters from '@/vuex/getters/counter'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  state: {
    count: 1,
    axiosCount: 2,
    asyncCount: 3
  }
})

describe('counter.js - getters', () => {
  it('count', () => {
    assert.equal(store.getters.count, 1)
  })

  it('axiosCount', () => {
    assert.equal(store.getters.axiosCount, 2)
  })

  it('asyncCount', () => {
    assert.equal(store.getters.asyncCount, 3)
  })
})
