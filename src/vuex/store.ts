import Vue from 'vue'
import Vuex from 'vuex'
import counter from '@/vuex/modules/counter'
import '@/vuex/modules/state'

Vue.use(Vuex)
Vue.config.devtools = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    counter
  },
  strict: debug
})
