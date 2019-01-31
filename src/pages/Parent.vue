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
/* tslint:disable:prettier */
// TODO: https://github.com/kurosame/vuejs-boilerplate/issues/1
/* tslint:enable:prettier */
import Child from '@/components/Child.vue'
import { ICounterState } from '@/vuex/state/counter'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'
import Vue from 'vue'
import { mapActions } from 'vuex'

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
    counter(): ICounterState {
      return this.$store.getters.counter
    }
  },
  components: {
    Child
  }
})
</script>
