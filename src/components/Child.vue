<template>
  <div class="child">
    <div>
      <span data-test="count">{{ counter.count }}</span>
      <button data-test="add-count" @click="addCount()">
        ADD
      </button>
    </div>
    <div>
      <span data-test="axios-count">{{ counter.axiosCount }}</span>
      <button data-test="add-axios-count" @click="addAxiosCount()">
        ADD
      </button>
      ※axios sample
    </div>
    <div>
      <span data-test="async-await-count">{{ counter.asyncAwaitCount }}</span>
      <button data-test="add-async-await-count" @click="addAsyncAwaitCount()">
        ADD
      </button>
      ※async await sample
    </div>
  </div>
</template>
<style lang="scss" scoped>
.child {
  color: white;
  background-color: blue;
}
</style>
<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import { CounterState } from '@/vuex/modules/counter'
import { ADD_ASYNC_AWAIT_COUNT, ADD_AXIOS_COUNT, ADD_COUNT } from '@/vuex/types'

export default Vue.extend({
  name: 'Child',
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
