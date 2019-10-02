import { GetterTree } from 'vuex'
import { CounterState } from '@/vuex/modules/counter'
import { States } from '@/vuex/modules/state'

const getters: GetterTree<CounterState, States> = {
  counter: (state: CounterState): CounterState => {
    return {
      count: state.count,
      axiosCount: state.axiosCount,
      asyncAwaitCount: state.asyncAwaitCount
    }
  }
}

export default getters
