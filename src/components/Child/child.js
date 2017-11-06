export default {
  name: 'Child',
  props: {
    addValue: {
      type: Function,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  }
}
