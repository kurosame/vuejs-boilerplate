import Vue from 'vue'
import Vuex from 'vuex'
import vMultiselect from 'vue-multiselect'
import Company from '../../../../src/components/Company/Company'

Vue.use(Vuex)
Vue.component('v-multiselect', vMultiselect)

const Ctor = Vue.extend(Company)
const vm = new Ctor({
  props: {
    setCompanyId: {
      default: () => { return () => {} }
    },
    options: {
      default: () => { return [] }
    }
  }
}).$mount()
