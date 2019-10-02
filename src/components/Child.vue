<template>
  <div class="child">
    <div>
      <span data-test="count">{{ counter.count }}</span>
      <button data-test="add-count" @click="$emit('add-count')">
        ADD
      </button>
    </div>
    <div>
      <span data-test="axios-count">{{ counter.axiosCount }}</span>
      <button data-test="add-axios-count" @click="$emit('add-axios-count')">
        ADD
      </button>
      ※axios sample
    </div>
    <div>
      <span data-test="async-await-count">{{ counter.asyncAwaitCount }}</span>
      <button
        data-test="add-async-await-count"
        @click="$emit('add-async-await-count')"
      >
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
import { CounterState } from '@/vuex/modules/counter'

type Prop<T> = () => T

export default Vue.extend({
  name: 'Child',
  props: {
    counter: { type: Object as Prop<CounterState>, required: true }
  }
})
</script>
