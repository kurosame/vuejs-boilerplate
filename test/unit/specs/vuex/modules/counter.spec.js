import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/vuex/modules/counter'
import { ADD_VALUE } from '@/vuex/types'

Vue.use(Vuex)

describe('counter.js - mutations', () => {
  it('ADD_VALUE', () => {
    const store = new Vuex.Store({
      state: {
        count: 0
      },
      mutations: mutations.mutations
    })
    store.commit(ADD_VALUE, 1)

    expect(store.state.count).to.equal(1)
  })
})
