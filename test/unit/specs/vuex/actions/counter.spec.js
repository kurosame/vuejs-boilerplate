import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import axios from 'axios'
import Promise from 'bluebird'
import actions from '../../../../../src/vuex/actions/counter'
import { ADD_VALUE } from '../../../../../src/vuex/types'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions: actions,
  state: {
    count: 0
  },
  mutations: {
    [ADD_VALUE] (state, value) {
      state.count += value
    }
  }
})

const vm =  new Vue({
  store,
  template:
    '<div @click=\"ADD_VALUE()\" />',
  methods: {
    ...mapActions([
      ADD_VALUE
    ])
  }
})

describe('counter.js - actions', () => {
  // axios test sample
  /*
  it('AXIOS_SAMPLE - axios sample resolved', (done) => {
    const resolved = new Promise.resolve({
      data: {
        id: '12345'
      }
    })
    sinon.stub(axios, 'get').returns(resolved)

    vm.AXIOS_SAMPLE()
    resolved.then(() => {
      expect(store.state.id).to.equal('12345')
      done()
    }).catch(done)

    axios.get.restore()
  })

  it('AXIOS_SAMPLE - axios sample rejected', (done) => {
    const rejected = new Promise.reject({
      status: 'error'
    })
    sinon.stub(axios, 'get').returns(rejected)

    vm.AXIOS_SAMPLE()
    rejected.catch((err) => {
      expect(err.status).to.equal('error')
      done()
    })
  })
  */

  it('ADD_VALUE', () => {
    vm.ADD_VALUE()

    expect(store.state.count).to.equal(1)
  })
})
