import Vue from 'vue'

export default Vue.extend({
  name: 'Child',
  props: {
    addValue: {
      type: Function,
      required: true,
    },
    axiosSample: {
      type: Function,
      required: true,
    },
    asyncAwaitSample: {
      type: Function,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    axiosCount: {
      type: Number,
      required: true,
    },
    asyncCount: {
      type: Number,
      required: true,
    },
  },
})
