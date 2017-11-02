import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import vMultiselect from 'vue-multiselect'
import Header from '../../../../src/components/globals/Header/Header'
import { FETCH_USER, FETCH_COMPANIES } from '../../../../src/vuex/types'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.component('v-multiselect', vMultiselect)

const Ctor = Vue.extend(Header)
const vm = new Ctor({
  router: new VueRouter(),
  store: new Vuex.Store({
    actions: {
      [FETCH_USER] () {},
      [FETCH_COMPANIES] () {}
    },
    getters: {
      client: () => {
        return {
          companies: [],
          companyValue: {},
          clients: [],
          clientValue: {}
        }
      },
      user: () => {
        return {
          userId: 'A99999',
          userName: 'テストユーザ'
        }
      }
    }
  })
}).$mount()

describe('Header.vue', () => {
  it('user is binding text', () => {
    expect(vm.$el.querySelector('.header .user-id').textContent)
      .to.equal('A99999')
    expect(vm.$el.querySelector('.header .user-name').textContent)
      .to.equal('テストユーザ')
  })
})
