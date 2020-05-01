import Vuex from 'vuex'
import Parent from '@/containers/Parent.vue'
import { CounterState } from '@/vuex/modules/counter'
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'

let wrapper: Wrapper<Vue>
beforeEach(() => {
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
  wrapper = shallowMount(Parent, { localVue, store })
  wrapper.vm.$emit('add-count')
})
afterEach(() => wrapper.destroy())

test('Match the snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
