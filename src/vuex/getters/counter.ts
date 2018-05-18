import { GetterTree } from 'vuex'
import { State } from '@/vuex/state/counter'

const getters: GetterTree<State, any> = {
  count: (state: State): number => state.count,
  axiosCount: (state: State): number => state.axiosCount,
  asyncAwaitCount: (state: State): number => state.asyncAwaitCount
}

export default getters
