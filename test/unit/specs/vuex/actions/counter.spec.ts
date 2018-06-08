import actions from '@/vuex/actions/counter'
import { ADD_VALUE, ASYNC_AWAIT_SAMPLE, AXIOS_SAMPLE } from '@/vuex/types'
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

describe('Run the ADD_VALUE', () => {
  test('Call the commit', () => {
    const wrapper = (a: any) => a[ADD_VALUE]({ commit: mockCommit })
    wrapper(actions)

    expect(mockCommit).toBeCalled()
    expect(mockCommit.mock.calls[0][0]).toEqual(ADD_VALUE)
    expect(mockCommit.mock.calls[0][1]).toEqual(1)
  })
})

describe('Run the AXIOS_SAMPLE', () => {
  test('Call the commit', done => {
    moxios.stubRequest('/api', {
      status: 200,
      response: { axiosCount: 2 }
    })

    const wrapper = (a: any) => a[AXIOS_SAMPLE]({ commit: mockCommit })
    wrapper(actions)

    moxios.wait(() => {
      expect(mockCommit).toBeCalled()
      expect(mockCommit.mock.calls[0][0]).toEqual(AXIOS_SAMPLE)
      expect(mockCommit.mock.calls[0][1]).toEqual(2)
      done()
    })
  })

  test('Output the console.error', done => {
    moxios.stubRequest('/api', {
      status: 400
    })

    const wrapper = (a: any) => a[AXIOS_SAMPLE]({ commit: mockCommit })
    wrapper(actions)

    moxios.wait(() => {
      expect(console.error).toBeCalled()
      expect(spyErr.mock.calls[0][0]).toEqual('AXIOS_SAMPLE API response error')
      done()
    })
  })
})

describe('Run the ASYNC_AWAIT_SAMPLE', () => {
  test('Call the commit', done => {
    moxios.stubRequest('/api', {
      status: 200,
      response: { asyncAwaitCount: 3 }
    })

    const wrapper = (a: any) => a[ASYNC_AWAIT_SAMPLE]({ commit: mockCommit })
    wrapper(actions)

    moxios.wait(() => {
      expect(mockCommit).toBeCalled()
      expect(mockCommit.mock.calls[0][0]).toEqual(ASYNC_AWAIT_SAMPLE)
      expect(mockCommit.mock.calls[0][1]).toEqual(3)
      done()
    })
  })

  test('Output the console.error', done => {
    moxios.stubRequest('/api', {
      status: 400
    })

    const wrapper = (a: any) => a[ASYNC_AWAIT_SAMPLE]({ commit: mockCommit })
    wrapper(actions)

    moxios.wait(() => {
      expect(console.error).toBeCalled()
      expect(spyErr.mock.calls[0][0]).toEqual(
        'ASYNC_AWAIT_SAMPLE API response error'
      )
      done()
    })
  })
})
