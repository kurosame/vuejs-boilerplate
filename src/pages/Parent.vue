<template>
  <div class="parent">
    Parent
    <child
      :counter="counter"
      @add-count="addCount"
      @add-axios-count="addAxiosCount"
      @add-async-await-count="addAsyncAwaitCount"
    >
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
import { mapActions } from 'vuex'
import Child from '@/components/Child.vue'
import { CounterState } from '@/vuex/modules/counter'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'

export default Vue.extend({
  name: 'Parent',
  components: {
    Child
  },
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
