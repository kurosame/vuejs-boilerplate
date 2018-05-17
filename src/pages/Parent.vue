<template>
  <div class="parent">
    <!-- vuex-router-sync sample -->
    {{ $store.state.route.name }}
    <child :addValue="addValue" :axiosSample="axiosSample" :asyncAwaitSample="asyncAwaitSample" :count="count" :axiosCount="axiosCount" :asyncAwaitCount="asyncAwaitCount">
    </child>
  </div>
</template>
<style lang="scss" scoped>
.parent {
  color: white;
  background-color: green;
}
</style>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { ADD_VALUE, AXIOS_SAMPLE, ASYNC_AWAIT_SAMPLE } from '@/vuex/types'
import Child from '@/components/Child.vue'

export default Vue.extend({
  name: 'Parent',
  methods: {
    ...mapActions({
      addValue: ADD_VALUE,
      axiosSample: AXIOS_SAMPLE,
      asyncAwaitSample: ASYNC_AWAIT_SAMPLE
    })
  },
  computed: {
    ...mapGetters(['count', 'axiosCount', 'asyncAwaitCount'])
  },
  components: {
    Child
  }
})
</script>
