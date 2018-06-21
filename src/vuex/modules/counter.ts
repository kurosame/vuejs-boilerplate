import actions from '@/vuex/actions/counter'
import getters from '@/vuex/getters/counter'
import { ICounterState } from '@/vuex/state/counter'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'
import { MutationTree } from 'vuex'

const initialState: ICounterState = {
  count: 0,
  axiosCount: 0,
  asyncAwaitCount: 0
}

const mutations: MutationTree<ICounterState> = {
  [ADD_COUNT](state: ICounterState, value: number) {
    state.count += value
  },
  [ADD_AXIOS_COUNT](state: ICounterState, value: number) {
    state.axiosCount += value
  },
  [ADD_ASYNC_AWAIT_COUNT](state: ICounterState, value: number) {
    state.asyncAwaitCount += value
  }
}

export default {
  actions,
  getters,
  mutations,
  state: initialState
}
