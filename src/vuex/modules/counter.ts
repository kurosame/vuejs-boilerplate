import actions from '@/vuex/actions/counter'
import getters from '@/vuex/getters/counter'
import { State } from '@/vuex/state/counter'
import { ADD_VALUE, ASYNC_AWAIT_SAMPLE, AXIOS_SAMPLE } from '@/vuex/types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<State> = {
  [ADD_VALUE](state: State, value: number) {
    state.count += value
  },
  [AXIOS_SAMPLE](state: State, value: number) {
    state.axiosCount += value
  },
  [ASYNC_AWAIT_SAMPLE](state: State, value: number) {
    state.asyncAwaitCount += value
  }
}

export default {
  actions,
  getters,
  mutations,
  state: new State()
}
