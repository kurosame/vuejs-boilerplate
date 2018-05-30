<template>
  <div class="header">
    Header
  </div>
</template>
<style lang="scss" scoped>
.header {
  color: white;
  background-color: red;
}
</style>
<script lang="ts">
/* tslint:disable:prettier */
// This rule is temporary solution to bug by TSLint (tslint-loader) of vue-loader
/* tslint:enable:prettier */
import Vue from 'vue'

export default Vue.extend({
  name: 'Header'
})
</script>
