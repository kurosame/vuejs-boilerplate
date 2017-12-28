import { MutationTree } from 'vuex'
import actions from '@/vuex/actions/counter'
import getters from '@/vuex/getters/counter'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'

export class State {
  count: number = 0
  axiosCount: number = 0
  asyncCount: number = 0
}

const mutations: MutationTree<State> = {
  [ADD_VALUE](state: State, value: number) {
    state.count += value
  },
  [AXIOS_SAMPLE](state: State, value: number) {
    state.axiosCount += value
  },
  [ASYNC_AWAIT_SAMPLE](state: State, value: number) {
    state.asyncCount += value
  }
}

export default {
  actions,
  getters,
  mutations,
  state: new State()
}
