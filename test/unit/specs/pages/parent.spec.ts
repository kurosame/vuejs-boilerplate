import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Parent from '@/pages/Parent.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  actions: {
    addValue: jest.fn(),
    axiosSample: jest.fn(),
    asyncAwaitSample: jest.fn()
  },
  getters: {
    count: () => 1,
    axiosCount: () => 2,
    asyncAwaitCount: () => 3
  }
})

describe('pages', () => {
  describe('Parent.vue', () => {
    const wrapper = shallowMount(Parent, {
      localVue,
      store
    })

    test('snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
