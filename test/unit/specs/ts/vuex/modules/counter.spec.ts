import Vue from 'vue'
import Vuex from 'vuex'
import * as assert from 'power-assert'
import mutations from '@/vuex/modules/counter'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'

Vue.use(Vuex)

export class State {
  count: number = 0
  axiosCount: number = 0
  asyncCount: number = 0
}

describe('counter.ts - mutations', () => {
  it('all', () => {
    const store = new Vuex.Store({
      state: new State(),
      mutations: mutations.mutations,
    })
    store.commit(ADD_VALUE, 1)
    store.commit(AXIOS_SAMPLE, 2)
    store.commit(ASYNC_AWAIT_SAMPLE, 3)

    assert.equal(store.state.count, 1)
    assert.equal(store.state.axiosCount, 2)
    assert.equal(store.state.asyncCount, 3)
  })
})
