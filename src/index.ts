import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import store from './vuex/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  base: __dirname
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
/* eslint-enable no-new */
