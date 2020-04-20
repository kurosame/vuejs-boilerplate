import moxios from 'moxios'
import { ActionTree } from 'vuex'
import actions from '@/vuex/actions/counter'
import { CounterState } from '@/vuex/modules/counter'
import { States } from '@/vuex/modules/state'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'

let wrapper: (type: string) => ActionTree<CounterState, States> | undefined
let mockCommit: jest.Mock
let spyErr: jest.SpyInstance
beforeEach(() => {
  wrapper = (type): ActionTree<CounterState, States> =>
    (actions[type] as any)({ commit: mockCommit })
  moxios.install()
  mockCommit = jest.fn()
  spyErr = jest.spyOn(console, 'error')
  spyErr.mockImplementation(x => x)
})
afterEach(() => {
  wrapper = (): undefined => undefined
  moxios.uninstall()
  jest.restoreAllMocks()
})

describe('Run ADD_COUNT', () => {
  test('Call `commit`', () => {
    wrapper(ADD_COUNT)

    expect(mockCommit).toBeCalled()
    expect(mockCommit.mock.calls[0][0]).toEqual(ADD_COUNT)
    expect(mockCommit.mock.calls[0][1]).toEqual(1)
  })
})

describe('Run ADD_AXIOS_COUNT', () => {
  test('Call `commit`', done => {
    moxios.stubRequest('/api', {
      status: 200,
      response: { axiosCount: 2 }
    })

    wrapper(ADD_AXIOS_COUNT)

    moxios.wait(() => {
      expect(mockCommit).toBeCalled()
      expect(mockCommit.mock.calls[0][0]).toEqual(ADD_AXIOS_COUNT)
      expect(mockCommit.mock.calls[0][1]).toEqual(2)
      done()
    })
  })

  test('Output console.error', done => {
    moxios.stubRequest('/api', { status: 400 })

    wrapper(ADD_AXIOS_COUNT)

    moxios.wait(() => {
      expect(spyErr).toBeCalled()
      expect(spyErr.mock.calls[0][0]).toEqual(
        'ADD_AXIOS_COUNT API response error: Request failed with status code 400'
      )
      done()
    })
  })
})

describe('Run ADD_ASYNC_AWAIT_COUNT', () => {
  test('Call `commit`', done => {
    moxios.stubRequest('/api', {
      status: 200,
      response: { asyncAwaitCount: 3 }
    })

    wrapper(ADD_ASYNC_AWAIT_COUNT)

    moxios.wait(() => {
      expect(mockCommit).toBeCalled()
      expect(mockCommit.mock.calls[0][0]).toEqual(ADD_ASYNC_AWAIT_COUNT)
      expect(mockCommit.mock.calls[0][1]).toEqual(3)
      done()
    })
  })

  test('Output console.error', done => {
    moxios.stubRequest('/api', { status: 400 })

    wrapper(ADD_ASYNC_AWAIT_COUNT)

    moxios.wait(() => {
      expect(spyErr).toBeCalled()
      expect(spyErr.mock.calls[0][0]).toEqual(
        'ADD_ASYNC_AWAIT_COUNT API response error: Request failed with status code 400'
      )
      done()
    })
  })
})
