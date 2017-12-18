import Vue from 'vue'

export default Vue.extend({
  name: 'Child',
  props: [
    'addValue',
    'axiosSample',
    'asyncAwaitSample',
    'count',
    'axiosCount',
    'asyncCount'
  ]
})
