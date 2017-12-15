import { mapActions, mapGetters } from 'vuex'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'
import Child from '@/components/Child/Child.vue'

export default {
  name: 'Parent',
  methods: {
    ...mapActions({
      addValue: ADD_VALUE,
      axiosSample: AXIOS_SAMPLE,
      asyncAwaitSample: ASYNC_AWAIT_SAMPLE
    })
  },
  computed: {
    ...mapGetters(['count', 'axiosCount', 'asyncCount'])
  },
  components: {
    Child
  }
}
