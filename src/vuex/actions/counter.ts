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
      .catch(err => console.error(err))
  },
  async [ASYNC_AWAIT_SAMPLE](context: ActionContext<State, any>) {
    const res: any = await axios.get('/api').catch(err => console.error(err))
    context.commit(ASYNC_AWAIT_SAMPLE, res.data.asyncCount)
  }
}

export default actions
