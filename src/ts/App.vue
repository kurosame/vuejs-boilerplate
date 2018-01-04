<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>
<style>
@import '~normalize.css/normalize.css';
</style>
<script lang="ts">
// This rule is temporary solution to bug by TSLint (tslint-loader) of vue-loader
/* tslint:disable:prettier */
/* tslint:enable:prettier */
import Vue from 'vue'
import HeaderView from './components/globals/Header/Header.vue'

export default Vue.extend({
  name: 'App',
  components: {
    HeaderView
  }
})
</script>
