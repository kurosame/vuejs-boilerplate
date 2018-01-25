import Vue from 'vue'
import Vuex from 'vuex'
import * as assert from 'power-assert'
import mutations from '@/vuex/modules/counter'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'

Vue.use(Vuex)

describe('counter.js - mutations', () => {
  it('ALL', () => {
    const store = new Vuex.Store({
      state: {
        count: 0,
        axiosCount: 0,
        asyncCount: 0
      },
      mutations: mutations.mutations
    })
    store.commit(ADD_VALUE, 1)
    store.commit(AXIOS_SAMPLE, 2)
    store.commit(ASYNC_AWAIT_SAMPLE, 3)

    assert.equal(store.state.count, 1)
    assert.equal(store.state.axiosCount, 2)
    assert.equal(store.state.asyncCount, 3)
  })
})
