import getters from '@/vuex/getters/counter'

test('Compute the count', () => {
  const wrapper = (g: any) => g.count({ count: 1 })

  expect(wrapper(getters)).toEqual(1)
})

test('Compute the axiosCount', () => {
  const wrapper = (g: any) => g.axiosCount({ axiosCount: 2 })

  expect(wrapper(getters)).toEqual(2)
})

test('Compute the asyncAwaitCount', () => {
  const wrapper = (g: any) => g.asyncAwaitCount({ asyncAwaitCount: 3 })

  expect(wrapper(getters)).toEqual(3)
})
