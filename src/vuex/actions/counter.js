import axios from 'axios'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '../types'

export default {
  [ADD_VALUE]({ commit }) {
    commit(ADD_VALUE, 1)
  },
  // axios sample
  [AXIOS_SAMPLE]({ commit }) {
    axios
      .get('/api')
      .then(res => {
        commit(AXIOS_SAMPLE, res.data)
      })
      .catch(err => {
        throw new Error(err)
      })
  },
  // async await sample
  [ASYNC_AWAIT_SAMPLE]: async ({ commit }) => {
    const res1 = await axios.get('/api1').catch(err => {
      throw new Error(err)
    })
    const res2 = await axios.get(`/api2?${res1.id}`).catch(err => {
      throw new Error(err)
    })
    commit(ASYNC_AWAIT_SAMPLE, res2.data)
  }
}
