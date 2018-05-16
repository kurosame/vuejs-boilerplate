import axios from 'axios'
import { ActionTree, ActionContext } from 'vuex'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'
import { State } from '@/vuex/state/counter'

const actions: ActionTree<State, State> = {
  [ADD_VALUE](context: ActionContext<State, any>) {
    context.commit(ADD_VALUE, 1)
  },
  [AXIOS_SAMPLE](context: ActionContext<State, any>) {
    axios
      .get('/api')
      .then(res => context.commit(AXIOS_SAMPLE, res.data.axiosCount))
      .catch(() => console.error('AXIOS_SAMPLE API response error'))
  },
  async [ASYNC_AWAIT_SAMPLE](context: ActionContext<State, any>) {
    const res: any = await axios
      .get('/api')
      .then(res => context.commit(ASYNC_AWAIT_SAMPLE, res.data.asyncAwaitCount))
      .catch(() => console.error('ASYNC_AWAIT_SAMPLE API response error'))
    // possible to use res
  }
}

export default actions
