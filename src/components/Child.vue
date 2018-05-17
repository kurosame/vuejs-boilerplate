<template>
  <div class="child">
    <div>
      <span class="count">{{ count }}</span>
      <button type="button" class="btn btn-success" @click="addValue">ADD</button>
    </div>
    <div>
      <span class="axios-count">{{ axiosCount }}</span>
      <button type="button" class="btn btn-success" @click="axiosSample">ADD</button>
      ※axios sample
    </div>
    <div>
      <span class="async-await-count">{{ asyncAwaitCount }}</span>
      <button type="button" class="btn btn-success" @click="asyncAwaitSample">ADD</button>
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

export default Vue.extend({
  name: 'Child',
  props: [
    'addValue',
    'axiosSample',
    'asyncAwaitSample',
    'count',
    'axiosCount',
    'asyncAwaitCount'
  ]
})
</script>
