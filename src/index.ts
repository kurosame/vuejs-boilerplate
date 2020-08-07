import Vue, { VNode } from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import routes from '@/routes'
import store from '@/vuex/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  base: __dirname
})

/* eslint-disable-next-line no-new */
new Vue({
  router,
  store,
  render: (h): VNode => h(App)
}).$mount('#app')
