import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import axios from 'axios'
import moxios from 'moxios'
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
    [ASYNC_AWAIT_SAMPLE](state: State, asyncAwaitCount) {
      state.asyncAwaitCount = asyncAwaitCount
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

let spyErr: any

describe('actions', () => {
  describe('counter.ts', () => {
    beforeEach(() => {
      moxios.install()
      spyErr = jest.spyOn(console, 'error')
      spyErr.mockImplementation(() => {})
    })
    afterEach(() => {
      moxios.uninstall()
      spyErr.mockReset()
      spyErr.mockRestore()
    })

    test('ADD_VALUE', () => {
      vm.addValue()
      expect(store.state.count).toEqual(1)
    })

    test('AXIOS_SAMPLE - axios sample resolved', done => {
      moxios.stubRequest('/api', {
        status: 200,
        response: { axiosCount: 2 }
      })

      vm.axiosSample()
      moxios.wait(() => {
        expect(store.state.axiosCount).toEqual(2)
        done()
      })
    })

    test('AXIOS_SAMPLE - axios sample rejected', done => {
      moxios.stubRequest('/api', {
        status: 400
      })

      vm.axiosSample()
      moxios.wait(() => {
        expect(console.error).toBeCalled()
        expect(spyErr.mock.calls[0][0]).toEqual(
          'AXIOS_SAMPLE API response error'
        )
        done()
      })
    })

    test('ASYNC_AWAIT_SAMPLE - async await sample resolved', done => {
      moxios.stubRequest('/api', {
        status: 200,
        response: { asyncAwaitCount: 3 }
      })

      vm.asyncAwaitSample()
      moxios.wait(() => {
        expect(store.state.asyncAwaitCount).toEqual(3)
        done()
      })
    })

    test('ASYNC_AWAIT_SAMPLE - async await sample rejected', done => {
      moxios.stubRequest('/api', {
        status: 400
      })

      vm.asyncAwaitSample()
      moxios.wait(() => {
        expect(console.error).toBeCalled()
        expect(spyErr.mock.calls[0][0]).toEqual(
          'ASYNC_AWAIT_SAMPLE API response error'
        )
        done()
      })
    })
  })
})
