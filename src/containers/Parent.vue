<template>
  <div>
    <child :count="counter.count" @add-count="addCount"></child>
    <child :count="counter.axiosCount" @add-count="addAxiosCount"></child>
    <child
      :count="counter.asyncAwaitCount"
      @add-count="addAsyncAwaitCount"
    ></child>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import Child from '@/components/Child.vue'
import { CounterState } from '@/vuex/modules/counter'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'

export default Vue.extend({
  name: 'Parent',
  components: { Child },
  computed: {
    counter(): CounterState {
      return this.$store.getters.counter
    }
  },
  methods: {
    ...mapActions({
      addCount: ADD_COUNT,
      addAxiosCount: ADD_AXIOS_COUNT,
      addAsyncAwaitCount: ADD_ASYNC_AWAIT_COUNT
    })
  }
})
</script>
