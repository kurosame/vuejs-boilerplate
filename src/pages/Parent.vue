<template>
  <div class="parent">
    Parent
    <child></child>
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
import Child from '@/components/Child.vue'

export default Vue.extend({
  name: 'Parent',
  components: {
    Child
  }
})
</script>
