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
import Vue from 'vue'
import HeaderView from './components/globals/Header/Header.vue'

export default Vue.extend({
  name: 'App',
  components: {
    HeaderView
  }
})
</script>
