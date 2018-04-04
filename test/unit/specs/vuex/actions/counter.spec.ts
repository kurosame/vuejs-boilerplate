import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import axios from 'axios'
import * as assert from 'power-assert'
import * as sinon from 'sinon'
import * as Bluebird from 'bluebird'
import actions from '@/vuex/actions/counter'
import { State } from '@/vuex/state/counter'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  state: new State(),
  mutations: {
    [ADD_VALUE](state: State, count) {
      state.count = count
    },
    [AXIOS_SAMPLE](state: State, axiosCount) {
      state.axiosCount = axiosCount
    },
    [ASYNC_AWAIT_SAMPLE](state: State, asyncCount) {
      state.asyncCount = asyncCount
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

let stub: any

describe('actions', () => {
  describe('counter.ts', () => {
    beforeEach(() => (stub = sinon.stub(axios, 'get')))
    afterEach(() => stub.restore())

    it('ADD_VALUE', () => {
      vm.addValue()
      assert.equal(store.state.count, 1)
    })

    it('AXIOS_SAMPLE - axios sample resolved', async () => {
      const resolved = Bluebird.resolve({
        data: { axiosCount: 2 }
      })
      stub.returns(resolved)

      await vm.axiosSample()
      resolved.then(() => assert.equal(store.state.axiosCount, 2))
    })

    it('AXIOS_SAMPLE - axios sample rejected', async () => {
      const rejected = Bluebird.reject(new Error('error'))
      stub.returns(rejected)

      await vm.axiosSample()
      rejected.catch((err: Error) => assert.equal(err.message, 'error'))
    })

    it('ASYNC_AWAIT_SAMPLE - async await sample resolved', async () => {
      const resolved = Bluebird.resolve({
        data: { asyncCount: 3 }
      })
      stub.returns(resolved)

      await vm.asyncAwaitSample()
      assert.equal(store.state.asyncCount, 3)
    })

    it('ASYNC_AWAIT_SAMPLE - async await sample rejected', done => {
      const rejected = Bluebird.reject(new Error('error'))
      stub.returns(rejected)

      vm.asyncAwaitSample()
      rejected.catch((err: Error) => {
        assert.equal(err.message, 'error')
        done()
      })
    })
  })
})
