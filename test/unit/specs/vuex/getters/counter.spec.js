import Vue from 'vue'
import Vuex from 'vuex'
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

    expect(store.getters.count).to.equal(1)
    expect(store.getters.axiosCount).to.equal(2)
    expect(store.getters.asyncCount).to.equal(3)
  })
})
