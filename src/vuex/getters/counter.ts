import { GetterTree } from 'vuex'
import { State } from '@/vuex/modules/counter'

const getters: GetterTree<State, State> = {
  count: (state: State): number => state.count,
  axiosCount: (state: State): number => state.axiosCount,
  asyncCount: (state: State): number => state.asyncCount,
}

export default getters
