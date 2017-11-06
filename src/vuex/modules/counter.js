import actions from 'vuex/actions/counter'
import getters from 'vuex/getters/counter'
import { ADD_VALUE } from 'vuex/types'

export default {
  actions,
  getters,
  state: {
    count: 0
  },
  mutations: {
    [ADD_VALUE](state, value) {
      state.count += value
    }
  }
}
