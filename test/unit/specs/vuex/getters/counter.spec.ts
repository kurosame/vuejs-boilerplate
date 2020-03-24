import getters from '@/vuex/getters/counter'

test('Compute `counter`', () => {
  const wrapper = (g: any) =>
    g.counter({ count: 1, axiosCount: 2, asyncAwaitCount: 3 })

  expect(wrapper(getters)).toEqual({
    count: 1,
    axiosCount: 2,
    asyncAwaitCount: 3
  })
})
