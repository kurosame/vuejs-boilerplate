<template>
  <div class="child">
    <div>
      <span data-test="count">{{ counter.count }}</span>
      <button data-test="add-count" @click="$emit('addCount')">ADD</button>
    </div>
    <div>
      <span data-test="axios-count">{{ counter.axiosCount }}</span>
      <button data-test="add-axios-count" @click="$emit('addAxiosCount')">ADD</button>
      ※axios sample
    </div>
    <div>
      <span data-test="async-await-count">{{ counter.asyncAwaitCount }}</span>
      <button data-test="add-async-await-count" @click="$emit('addAsyncAwaitCount')">ADD</button>
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
/* tslint:disable:prettier */
// TODO: https://github.com/kurosame/vuejs-boilerplate/issues/1
/* tslint:enable:prettier */
import { ICounterState } from '@/vuex/state/counter'
import Vue from 'vue'

type Prop<T> = () => T

export default Vue.extend({
  name: 'Child',
  props: {
    counter: Object as Prop<ICounterState>
  }
})
</script>
