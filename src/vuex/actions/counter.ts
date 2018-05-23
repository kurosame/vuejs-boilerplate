import { State } from '@/vuex/state/counter'
import { ADD_VALUE, ASYNC_AWAIT_SAMPLE, AXIOS_SAMPLE } from '@/vuex/types'
import axios from 'axios'
import { ActionContext, ActionTree } from 'vuex'

const actions: ActionTree<State, any> = {
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
    const data: any = await axios
      .get('/api')
      .then(res => context.commit(ASYNC_AWAIT_SAMPLE, res.data.asyncAwaitCount))
      .catch(() => console.error('ASYNC_AWAIT_SAMPLE API response error'))
    // possible to use data
  }
}

export default actions
