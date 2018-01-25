import Vue from 'vue'
import Vuex from 'vuex'
import * as assert from 'power-assert'
import mutations from '@/vuex/modules/counter'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    axiosCount: 0,
    asyncCount: 0
  },
  mutations: mutations.mutations
})

describe('counter.js - mutations', () => {
  it('ADD_VALUE', () => {
    store.commit(ADD_VALUE, 1)

    assert.equal(store.state.count, 1)
  })

  it('AXIOS_SAMPLE', () => {
    store.commit(AXIOS_SAMPLE, 2)

    assert.equal(store.state.axiosCount, 2)
  })

  it('ASYNC_AWAIT_SAMPLE', () => {
    store.commit(ASYNC_AWAIT_SAMPLE, 3)

    assert.equal(store.state.asyncCount, 3)
  })
})
