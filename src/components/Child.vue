<template>
  <div class="child">
    <div>
      <span class="count">{{ count }}</span>
      <button class="add-count" @click="$emit('addCount')">ADD</button>
    </div>
    <div>
      <span class="axios-count">{{ axiosCount }}</span>
      <button class="add-axios-count" @click="$emit('addAxiosCount')">ADD</button>
      ※axios sample
    </div>
    <div>
      <span class="async-await-count">{{ asyncAwaitCount }}</span>
      <button class="add-async-await-count" @click="$emit('addAsyncAwaitCount')">ADD</button>
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
// This rule is temporary solution to bug by TSLint (tslint-loader) of vue-loader
/* tslint:enable:prettier */
import Vue from 'vue'

export default Vue.extend({
  name: 'Child',
  props: ['count', 'axiosCount', 'asyncAwaitCount']
})
</script>
