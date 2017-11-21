import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import axios from 'axios'
import Promise from 'bluebird'
import actions from 'vuex/actions/counter'
import { ADD_VALUE, AXIOS_SAMPLE } from 'vuex/types'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  state: {
    count: 0
  },
  mutations: {
    [ADD_VALUE](state) {
      state.count = 1
    },
    [AXIOS_SAMPLE](state) {
      state.count = 2
    }
  }
})

const vm = new Vue({
  store,
  methods: {
    ...mapActions({
      addValue: ADD_VALUE,
      axiosSample: AXIOS_SAMPLE
    })
  }
})

describe('counter.js - actions', () => {
  it('ADD_VALUE', () => {
    vm.addValue()
    expect(store.state.count).to.equal(1)
  })

  // axios test sample
  // it('AXIOS_SAMPLE - axios sample resolved', (done) => {
  //   const resolved = new Promise.resolve({
  //     data: {
  //       count: 2
  //     }
  //   })
  //   sinon.stub(axios, 'get').returns(resolved)

  //   vm.axiosSample()
  //   resolved.then(() => {
  //     expect(store.state.count).to.equal(2)
  //     done()
  //   }).catch(done)

  //   axios.get.restore()
  // })

  // it('AXIOS_SAMPLE - axios sample rejected', (done) => {
  //   const rejected = new Promise.reject(new Error('error'))
  //   sinon.stub(axios, 'get').returns(rejected)

  //   vm.axiosSample()
  //   rejected.catch((err) => {
  //     expect(err.message).to.equal('error')
  //     done()
  //   })
  // })
})
