import actions from '@/vuex/actions/counter'
import getters from '@/vuex/getters/counter'
import { State } from '@/vuex/state/counter'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<State> = {
  [ADD_COUNT](state: State, value: number) {
    state.count += value
  },
  [ADD_AXIOS_COUNT](state: State, value: number) {
    state.axiosCount += value
  },
  [ADD_ASYNC_AWAIT_COUNT](state: State, value: number) {
    state.asyncAwaitCount += value
  }
}

export default {
  actions,
  getters,
  mutations,
  state: new State()
}
