import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/vuex/getters/counter'

Vue.use(Vuex)

describe('counter.js - getters', () => {
  it('count', () => {
    const store = new Vuex.Store({
      getters,
      state: {
        count: 1
      }
    })

    expect(store.getters.count).to.equal(1)
  })
})
