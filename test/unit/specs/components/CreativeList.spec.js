import Vue from 'vue'
import Vuex from 'vuex'
import CreativeList from '../../../../src/pages/CreativeList/CreativeList'
import { FETCH_STATUSES } from '../../../../src/vuex/types'

Vue.use(Vuex)

const Ctor = Vue.extend(CreativeList)
const vm = new Ctor({
  store: new Vuex.Store({
    actions: {
      [FETCH_STATUSES] () {}
    },
    getters: {
      clientId: () => { return '' }
    }
  })
}).$mount()
