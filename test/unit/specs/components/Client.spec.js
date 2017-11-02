import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import vMultiselect from 'vue-multiselect'
import Client from '../../../../src/components/Client/Client'

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.component('v-multiselect', vMultiselect)

const Ctor = Vue.extend(Client)
const vm = new Ctor({
  props: {
    setClientId: {
      default: () => { return () => {} }
    },
    value: {
      default: () => {
        return { has_assigned: false }
      }
    },
    options: {
      default: () => { return [] }
    }
  }
}).$mount()

describe('Client.vue', () => {
  it('setCustomLabel return to empty client name', () => {
    expect(vm.setCustomLabel({ client_name: '', has_assigned: true }))
      .to.equal('')
  })

  it('setCustomLabel return to has assigned false', () => {
    expect(vm.setCustomLabel({ client_name: 'テスト会社', has_assigned: false }))
        .to.equal('テスト会社')
  })

  it('setCustomLabel return to set client name and has assigned true', () => {
    expect(vm.setCustomLabel({ client_name: 'テスト会社', has_assigned: true }))
        .to.equal('   テスト会社')
  })
})


