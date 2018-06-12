import { State } from '@/vuex/state/counter'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'
import axios from 'axios'
import { ActionContext, ActionTree } from 'vuex'

const actions: ActionTree<State, any> = {
  [ADD_COUNT](context: ActionContext<State, any>) {
    context.commit(ADD_COUNT, 1)
  },
  [ADD_AXIOS_COUNT](context: ActionContext<State, any>) {
    axios
      .get('/api')
      .then(res => context.commit(ADD_AXIOS_COUNT, res.data.axiosCount))
      .catch(() => console.error('ADD_AXIOS_COUNT API response error'))
  },
  async [ADD_ASYNC_AWAIT_COUNT](context: ActionContext<State, any>) {
    const data: any = await axios
      .get('/api')
      .then(res =>
        context.commit(ADD_ASYNC_AWAIT_COUNT, res.data.asyncAwaitCount)
      )
      .catch(() => console.error('ADD_ASYNC_AWAIT_COUNT API response error'))
    // possible to use data
  }
}

export default actions
