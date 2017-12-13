import axios from 'axios'
import { ActionTree } from 'vuex'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'
import { State } from '@/vuex/modules/counter'

const actions: ActionTree<State, State> = {
  [ADD_VALUE]({ commit }) {
    commit(ADD_VALUE, 1)
  },
  [AXIOS_SAMPLE]({ commit }) {
    axios
      .get('/api')
      .then(res => {
        commit(AXIOS_SAMPLE, res.data.axiosCount)
      })
      .catch(err => {
        console.error(err)
      })
  },
  [ASYNC_AWAIT_SAMPLE]: async ({ commit }) => {
    const res: any = await axios.get('/api').catch(err => {
      console.error(err)
    })
    commit(ASYNC_AWAIT_SAMPLE, res.data.asyncCount)
  },
}

export default actions
