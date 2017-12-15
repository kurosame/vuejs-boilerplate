import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import axios from 'axios'
import * as assert from 'power-assert'
import * as sinon from 'sinon'
import * as Bluebird from 'bluebird'
import actions from '@/vuex/actions/counter'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  state: {
    count: 0,
    axiosCount: 0,
    asyncCount: 0
  },
  mutations: {
    [ADD_VALUE](state) {
      state.count = 1
    },
    [AXIOS_SAMPLE](state) {
      state.axiosCount = 2
    },
    [ASYNC_AWAIT_SAMPLE](state) {
      state.asyncCount = 3
    }
  }
})

const vm = new Vue({
  store,
  methods: {
    ...mapActions({
      addValue: ADD_VALUE,
      axiosSample: AXIOS_SAMPLE,
      asyncAwaitSample: ASYNC_AWAIT_SAMPLE
    })
  }
})

describe('counter.js - actions', () => {
  it('ADD_VALUE', () => {
    vm.addValue()
    assert.equal(store.state.count, 1)
  })

  it('AXIOS_SAMPLE - axios sample resolved', done => {
    const resolved = Bluebird.resolve({
      data: {
        count: 2
      }
    })
    const stub = sinon.stub(axios, 'get')
    stub.returns(resolved)

    vm.axiosSample()
    resolved
      .then(() => {
        assert.equal(store.state.axiosCount, 2)
        done()
      })
      .catch(done)

    stub.restore()
  })

  it('AXIOS_SAMPLE - axios sample rejected', done => {
    const rejected = Bluebird.reject(new Error('error'))
    const stub = sinon.stub(axios, 'get')
    stub.returns(rejected)

    vm.axiosSample()
    rejected.catch(err => {
      assert.equal(err.message, 'error')
      done()
    })

    stub.restore()
  })

  it('ASYNC_AWAIT_SAMPLE - async await sample resolved', async () => {
    const resolved = Bluebird.resolve({
      data: {
        count: 3
      }
    })
    const stub = sinon.stub(axios, 'get')
    stub.returns(resolved)

    await vm.asyncAwaitSample()
    assert.equal(store.state.asyncCount, 3)

    stub.restore()
  })

  it('ASYNC_AWAIT_SAMPLE - async await sample rejected', done => {
    const rejected = Bluebird.reject(new Error('error'))
    const stub = sinon.stub(axios, 'get')
    stub.returns(rejected)

    vm.asyncAwaitSample()
    rejected.catch(err => {
      assert.equal(err.message, 'error')
      done()
    })

    stub.restore()
  })
})
