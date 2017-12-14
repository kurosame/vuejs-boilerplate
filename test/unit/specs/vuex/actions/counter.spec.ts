import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import axios from 'axios'
import Promise from 'bluebird'
import actions from '@/vuex/actions/counter'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'

Vue.use(Vuex)

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
    expect(store.state.count).to.equal(1)
  })

  it('AXIOS_SAMPLE - axios sample resolved', done => {
    const resolved = new Promise.resolve({
      data: {
        count: 2,
      },
    })
    sinon.stub(axios, 'get').returns(resolved)

    vm.axiosSample()
    resolved
      .then(() => {
        expect(store.state.axiosCount).to.equal(2)
        done()
      })
      .catch(done)

    axios.get.restore()
  })

  it('AXIOS_SAMPLE - axios sample rejected', done => {
    const rejected = new Promise.reject(new Error('error'))
    sinon.stub(axios, 'get').returns(rejected)

    vm.axiosSample()
    rejected.catch(err => {
      expect(err.message).to.equal('error')
      done()
    })

    axios.get.restore()
  })

  it('ASYNC_AWAIT_SAMPLE - async await sample resolved', async () => {
    const resolved = new Promise.resolve({
      data: {
        count: 3,
      },
    })
    sinon.stub(axios, 'get').returns(resolved)

    await vm.asyncAwaitSample()
    expect(store.state.asyncCount).to.equal(3)

    axios.get.restore()
  })

  it('ASYNC_AWAIT_SAMPLE - async await sample rejected', done => {
    const rejected = new Promise.reject(new Error('error'))
    sinon.stub(axios, 'get').returns(rejected)

    vm.asyncAwaitSample()
    rejected.catch(err => {
      expect(err.message).to.equal('error')
      done()
    })

    axios.get.restore()
  })
})
