import { ICounterState } from '@/vuex/state/counter'
import { IStates } from '@/vuex/state/index'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'
import axios from 'axios'
import { ActionContext, ActionTree } from 'vuex'

const actions: ActionTree<ICounterState, IStates> = {
  [ADD_COUNT](context: ActionContext<ICounterState, IStates>) {
    context.commit(ADD_COUNT, 1)
  },
  [ADD_AXIOS_COUNT](context: ActionContext<ICounterState, IStates>) {
    axios
      .get('/api')
      .then(res => context.commit(ADD_AXIOS_COUNT, res.data.axiosCount))
      .catch(() => console.error('ADD_AXIOS_COUNT API response error'))
  },
  async [ADD_ASYNC_AWAIT_COUNT](
    context: ActionContext<ICounterState, IStates>
  ) {
    await axios
      .get('/api')
      .then(res =>
        context.commit(ADD_ASYNC_AWAIT_COUNT, res.data.asyncAwaitCount)
      )
      .catch(() => console.error('ADD_ASYNC_AWAIT_COUNT API response error'))
  }
}

export default actions
