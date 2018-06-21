import { ICounterState } from '@/vuex/state/counter'
import { IStates } from '@/vuex/state/index'
import { GetterTree } from 'vuex'

const getters: GetterTree<ICounterState, IStates> = {
  counter: (state: ICounterState): ICounterState => {
    return {
      count: state.count,
      axiosCount: state.axiosCount,
      asyncAwaitCount: state.asyncAwaitCount
    }
  }
}

export default getters
