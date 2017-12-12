import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/vuex/modules/counter'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'

Vue.use(Vuex)

describe('counter.js - mutations', () => {
  it('all', () => {
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

    expect(store.state.count).to.equal(1)
    expect(store.state.axiosCount).to.equal(2)
    expect(store.state.asyncCount).to.equal(3)
  })
})
