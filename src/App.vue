<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
@import '~normalize.css/normalize.css';
</style>
<script lang="ts">
/* tslint:disable:prettier */
// This rule is temporary solution to bug by TSLint (tslint-loader) of vue-loader
/* tslint:enable:prettier */
import Vue from 'vue'
import HeaderView from './components/globals/Header.vue'

export default Vue.extend({
  name: 'App',
  components: {
    HeaderView
  }
})
</script>
