import getters from '@/vuex/getters/counter'

describe('getters', () => {
  describe('counter.ts', () => {
    test('count', () => {
      const wrapper = (getters: any) => getters.count({ count: 1 })

      expect(wrapper(getters)).toEqual(1)
    })

    test('axiosCount', () => {
      const wrapper = (getters: any) => getters.axiosCount({ axiosCount: 2 })

      expect(wrapper(getters)).toEqual(2)
    })

    test('asyncAwaitCount', () => {
      const wrapper = (getters: any) =>
        getters.asyncAwaitCount({ asyncAwaitCount: 3 })

      expect(wrapper(getters)).toEqual(3)
    })
  })
})
