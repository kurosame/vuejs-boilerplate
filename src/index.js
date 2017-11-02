import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "./vuex/store";
import App from "./App";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
/* eslint-enable no-new */
