import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import FileUpload from 'vue-upload-component'
import Status from '../../../../src/components/Status/Status'

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.component('file-upload', FileUpload)

const Ctor = Vue.extend(Status)
const vm = new Ctor({
  props: {
    setStatusId: {
      default: () => { return () => {} }
    },
    changeIncludeDeleted: {
      default: () => { return () => {} }
    },
    uploadCreatives: {
      default: () => { return () => {} }
    },
    statuses: {
      default: () => { return [] }
    },
    statusId: {
      default: 102
    },
    includeDeleted: {
      default: true
    }
  }
}).$mount()
