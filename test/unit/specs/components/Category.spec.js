import Vue from 'vue'
import Vuex from 'vuex'
import Category from '../../../../src/components/Category/Category'

Vue.use(Vuex)

const Ctor = Vue.extend(Category)
const vm = new Ctor({
  props: {
    setCategoryId: {
      default: () => { return () => {} }
    },
    categories: {
      default: () => { return [] }
    },
    categoryId: {
      default: 2
    }
  }
}).$mount()
