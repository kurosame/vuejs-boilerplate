import Vuex from 'vuex'
import Parent from '@/containers/Parent.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import { CounterState } from '@/vuex/modules/counter'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  getters: {
    counter: (): CounterState => ({
      count: 147,
      axiosCount: 258,
      asyncAwaitCount: 369
    })
  }
})

const wrapper = shallowMount(Parent, { localVue, store })

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
