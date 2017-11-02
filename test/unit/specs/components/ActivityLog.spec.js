import Vue from 'vue'
import ActivityLog from '../../../../src/components/ActivityLog/ActivityLog'

const Ctor = Vue.extend(ActivityLog)
const vm = new Ctor({
  props: {
    activities: {
      default: () => { return [] }
    }
  }
}).$mount()
