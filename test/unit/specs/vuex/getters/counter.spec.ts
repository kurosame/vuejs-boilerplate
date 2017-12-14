import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/vuex/getters/counter'

Vue.use(Vuex)

export class State {
  count: number = 1
  axiosCount: number = 2
  asyncCount: number = 3
}

describe('counter.ts - getters', () => {
  it('all', () => {
    const store = new Vuex.Store({
      getters,
      state: new State(),
    })

    expect(store.getters.count).to.equal(1)
    expect(store.getters.axiosCount).to.equal(2)
    expect(store.getters.asyncCount).to.equal(3)
  })
})
