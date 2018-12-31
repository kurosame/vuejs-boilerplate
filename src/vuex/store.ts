import counter from '@/vuex/modules/counter'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.devtools = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    counter
  },
  strict: debug
})
