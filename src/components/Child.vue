<template>
  <div class="child">
    <span data-testid="count">{{ count }}</span>
    <button data-testid="add-count" @click="$emit('add-count')">ADD</button>
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
  props: {
    count: { type: Number, required: true }
  }
})
</script>
