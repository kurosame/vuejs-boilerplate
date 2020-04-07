import axios from 'axios'
import { ActionContext, ActionTree } from 'vuex'
import { CounterState } from '@/vuex/modules/counter'
import { States } from '@/vuex/modules/state'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'

const actions: ActionTree<CounterState, States> = {
  [ADD_COUNT](context: ActionContext<CounterState, States>) {
    context.commit(ADD_COUNT, 1)
  },
  [ADD_AXIOS_COUNT](context: ActionContext<CounterState, States>) {
    axios
      .get('/api')
      .then(res => context.commit(ADD_AXIOS_COUNT, res.data.axiosCount))
      .catch((err: Error) =>
        console.error(`ADD_AXIOS_COUNT API response error: ${err.message}`)
      )
  },
  async [ADD_ASYNC_AWAIT_COUNT](context: ActionContext<CounterState, States>) {
    await axios
      .get('/api')
      .then(res =>
        context.commit(ADD_ASYNC_AWAIT_COUNT, res.data.asyncAwaitCount)
      )
      .catch((err: Error) =>
        console.error(
          `ADD_ASYNC_AWAIT_COUNT API response error: ${err.message}`
        )
      )
  }
}

export default actions
