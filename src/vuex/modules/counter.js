import actions from '@/vuex/actions/counter'
import getters from '@/vuex/getters/counter'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'

export default {
  actions,
  getters,
  state: {
    count: 0,
    axiosCount: 0,
    asyncCount: 0
  },
  mutations: {
    [ADD_VALUE](state, value) {
      state.count += value
    },
    [AXIOS_SAMPLE](state, value) {
      state.axiosCount += value
    },
    [ASYNC_AWAIT_SAMPLE](state, value) {
      state.asyncCount += value
    }
  }
}
