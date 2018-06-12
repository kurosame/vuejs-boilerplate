import actions from '@/vuex/actions/counter'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'
import moxios from 'moxios'

let mockCommit: jest.Mock
let spyErr: jest.SpyInstance

beforeEach(() => {
  moxios.install()
  mockCommit = jest.fn()
  spyErr = jest.spyOn(console, 'error')
})
afterEach(() => {
  moxios.uninstall()
  mockCommit.mockReset()
  spyErr.mockReset()
})

describe('Run the ADD_COUNT', () => {
  test('Call the commit', () => {
    const wrapper = (a: any) => a[ADD_COUNT]({ commit: mockCommit })
    wrapper(actions)

    expect(mockCommit).toBeCalled()
    expect(mockCommit.mock.calls[0][0]).toEqual(ADD_COUNT)
    expect(mockCommit.mock.calls[0][1]).toEqual(1)
  })
})

describe('Run the ADD_AXIOS_COUNT', () => {
  test('Call the commit', done => {
    moxios.stubRequest('/api', {
      status: 200,
      response: { axiosCount: 2 }
    })

    const wrapper = (a: any) => a[ADD_AXIOS_COUNT]({ commit: mockCommit })
    wrapper(actions)

    moxios.wait(() => {
      expect(mockCommit).toBeCalled()
      expect(mockCommit.mock.calls[0][0]).toEqual(ADD_AXIOS_COUNT)
      expect(mockCommit.mock.calls[0][1]).toEqual(2)
      done()
    })
  })

  test('Output the console.error', done => {
    moxios.stubRequest('/api', {
      status: 400
    })

    const wrapper = (a: any) => a[ADD_AXIOS_COUNT]({ commit: mockCommit })
    wrapper(actions)

    moxios.wait(() => {
      expect(console.error).toBeCalled()
      expect(spyErr.mock.calls[0][0]).toEqual(
        'ADD_AXIOS_COUNT API response error'
      )
      done()
    })
  })
})

describe('Run the ADD_ASYNC_AWAIT_COUNT', () => {
  test('Call the commit', done => {
    moxios.stubRequest('/api', {
      status: 200,
      response: { asyncAwaitCount: 3 }
    })

    const wrapper = (a: any) => a[ADD_ASYNC_AWAIT_COUNT]({ commit: mockCommit })
    wrapper(actions)

    moxios.wait(() => {
      expect(mockCommit).toBeCalled()
      expect(mockCommit.mock.calls[0][0]).toEqual(ADD_ASYNC_AWAIT_COUNT)
      expect(mockCommit.mock.calls[0][1]).toEqual(3)
      done()
    })
  })

  test('Output the console.error', done => {
    moxios.stubRequest('/api', {
      status: 400
    })

    const wrapper = (a: any) => a[ADD_ASYNC_AWAIT_COUNT]({ commit: mockCommit })
    wrapper(actions)

    moxios.wait(() => {
      expect(console.error).toBeCalled()
      expect(spyErr.mock.calls[0][0]).toEqual(
        'ADD_ASYNC_AWAIT_COUNT API response error'
      )
      done()
    })
  })
})
