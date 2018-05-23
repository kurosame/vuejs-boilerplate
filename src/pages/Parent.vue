<template>
  <div class="parent">
    Parent
    <child :count="count" :axiosCount="axiosCount" :asyncAwaitCount="asyncAwaitCount" @addValue="addValue" @axiosSample="axiosSample" @asyncAwaitSample="asyncAwaitSample">
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
import Child from '@/components/Child.vue'
import { ADD_VALUE, ASYNC_AWAIT_SAMPLE, AXIOS_SAMPLE } from '@/vuex/types'
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

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
