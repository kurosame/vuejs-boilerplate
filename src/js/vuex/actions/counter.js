import axios from 'axios'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'

export default {
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
  async [ASYNC_AWAIT_SAMPLE]({ commit }) {
    const res = await axios.get('/api').catch(err => {
      console.error(err)
    })
    commit(ASYNC_AWAIT_SAMPLE, res.data.asyncCount)
  }
}
