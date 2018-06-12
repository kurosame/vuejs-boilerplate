<template>
  <div class="parent">
    Parent
    <child :count="count" :axiosCount="axiosCount" :asyncAwaitCount="asyncAwaitCount"
      @addCount="addCount" @addAxiosCount="addAxiosCount" @addAsyncAwaitCount="addAsyncAwaitCount">
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
/* tslint:disable:prettier */
// This rule is temporary solution to bug by TSLint (tslint-loader) of vue-loader
/* tslint:enable:prettier */
import Child from '@/components/Child.vue'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'Parent',
  methods: {
    ...mapActions({
      addCount: ADD_COUNT,
      addAxiosCount: ADD_AXIOS_COUNT,
      addAsyncAwaitCount: ADD_ASYNC_AWAIT_COUNT
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
