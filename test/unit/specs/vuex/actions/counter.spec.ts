import { ActionTree } from 'vuex'
import actions from '@/vuex/actions/counter'
import { CounterState } from '@/vuex/modules/counter'
import { States } from '@/vuex/modules/state'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'
// ESLint error only when VSCode
/* eslint-disable-next-line import/no-unresolved */
import mockAxios from '@test/setup'

let wrapper: (
  type: string
) => Promise<ActionTree<CounterState, States>> | undefined
let mockCommit: jest.Mock
let spyErr: jest.SpyInstance
beforeEach(() => {
  wrapper = async (type): Promise<ActionTree<CounterState, States>> => {
    const mock = await (actions[type] as jest.Mock)({ commit: mockCommit })
    return mock
  }
  mockCommit = jest.fn()
  spyErr = jest.spyOn(console, 'error')
  spyErr.mockImplementation(x => x)
})
afterEach(() => {
  wrapper = (): undefined => undefined
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
  test('Call `commit`', async () => {
    mockAxios.get.mockResolvedValue({ data: { axiosCount: 2 } })

    await wrapper(ADD_AXIOS_COUNT)

    expect(mockCommit).toBeCalled()
    expect(mockCommit.mock.calls[0][0]).toEqual(ADD_AXIOS_COUNT)
    expect(mockCommit.mock.calls[0][1]).toEqual(2)
  })

  test('Output console.error', async () => {
    mockAxios.get.mockRejectedValue({ message: 'error' })

    await wrapper(ADD_AXIOS_COUNT)

    expect(spyErr).toBeCalled()
    expect(spyErr.mock.calls[0][0]).toEqual(
      'ADD_AXIOS_COUNT API response error: error'
    )
  })
})

describe('Run ADD_ASYNC_AWAIT_COUNT', () => {
  test('Call `commit`', async () => {
    mockAxios.get.mockResolvedValue({ data: { asyncAwaitCount: 3 } })

    await wrapper(ADD_ASYNC_AWAIT_COUNT)

    expect(mockCommit).toBeCalled()
    expect(mockCommit.mock.calls[0][0]).toEqual(ADD_ASYNC_AWAIT_COUNT)
    expect(mockCommit.mock.calls[0][1]).toEqual(3)
  })

  test('Output console.error', async () => {
    mockAxios.get.mockRejectedValue({ message: 'error' })

    await wrapper(ADD_ASYNC_AWAIT_COUNT)

    expect(spyErr).toBeCalled()
    expect(spyErr.mock.calls[0][0]).toEqual(
      'ADD_ASYNC_AWAIT_COUNT API response error: error'
    )
  })
})
