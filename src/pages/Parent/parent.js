import { mapActions, mapGetters } from 'vuex'
import {
  ADD_VALUE
} from '../../vuex/types'
import Child from '../../components/Child/Child'

export default {
  methods: {
    ...mapActions({
      addValue: ADD_VALUE
    })
  },
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  components: {
    Child
  }
}
