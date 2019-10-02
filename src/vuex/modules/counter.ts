import { MutationTree } from 'vuex'
import actions from '@/vuex/actions/counter'
import getters from '@/vuex/getters/counter'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'

export interface CounterState {
  count: number
  axiosCount: number
  asyncAwaitCount: number
}

const initialState: CounterState = {
  count: 0,
  axiosCount: 0,
  asyncAwaitCount: 0
}

const mutations: MutationTree<CounterState> = {
  [ADD_COUNT](state: CounterState, value: number) {
    state.count += value
  },
  [ADD_AXIOS_COUNT](state: CounterState, value: number) {
    state.axiosCount += value
  },
  [ADD_ASYNC_AWAIT_COUNT](state: CounterState, value: number) {
    state.asyncAwaitCount += value
  }
}

export default {
  actions,
  getters,
  mutations,
  state: initialState
}
