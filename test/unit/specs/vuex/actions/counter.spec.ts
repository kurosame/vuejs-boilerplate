import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import axios from 'axios'
import * as assert from 'power-assert'
import * as sinon from 'sinon'
import * as Bluebird from 'bluebird'
import actions from '@/vuex/actions/counter'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'

Vue.use(Vuex)

const getStub = sinon.stub(axios, 'get')

export class State {
  count: number = 0
  axiosCount: number = 0
  asyncCount: number = 0
}

const store = new Vuex.Store({
  actions,
  state: new State(),
  mutations: {
    [ADD_VALUE](state: State): void {
      state.count = 1
    },
    [AXIOS_SAMPLE](state: State): void {
      state.axiosCount = 2
    },
    [ASYNC_AWAIT_SAMPLE](state: State): void {
      state.asyncCount = 3
    },
  },
})

const vm = new Vue({
  store,
  methods: {
    ...mapActions({
      addValue: ADD_VALUE,
      axiosSample: AXIOS_SAMPLE,
      asyncAwaitSample: ASYNC_AWAIT_SAMPLE,
    }),
  },
})

describe('counter.ts - actions', () => {
  it('ADD_VALUE', () => {
    vm.addValue()
    assert.equal(store.state.count, 1)
  })

  it('AXIOS_SAMPLE - axios sample resolved', done => {
    const resolved = Bluebird.resolve({
      data: {
        count: 2,
      },
    })
    getStub.returns(resolved)

    vm.axiosSample()
    resolved
      .then(() => {
        assert.equal(store.state.axiosCount, 2)
        done()
      })
      .catch(done)
  })

  it('AXIOS_SAMPLE - axios sample rejected', done => {
    const rejected = Bluebird.reject(new Error('error'))
    getStub.returns(rejected)

    vm.axiosSample()
    rejected.catch((err: Error) => {
      assert.equal(err.message, 'error')
      done()
    })
  })

  it('ASYNC_AWAIT_SAMPLE - async await sample resolved', async () => {
    const resolved = Bluebird.resolve({
      data: {
        count: 3,
      },
    })
    getStub.returns(resolved)

    await vm.asyncAwaitSample()
    assert.equal(store.state.asyncCount, 3)
  })

  it('ASYNC_AWAIT_SAMPLE - async await sample rejected', done => {
    const rejected = Bluebird.reject(new Error('error'))
    getStub.returns(rejected)

    vm.asyncAwaitSample()
    rejected.catch((err: Error) => {
      assert.equal(err.message, 'error')
      done()
    })
  })
})
