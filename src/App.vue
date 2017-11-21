<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>
<style>
@import '~normalize.css/normalize.css';
</style>
<script>
import HeaderView from './components/globals/Header/Header.vue'

export default {
  components: {
    HeaderView
  }
}
</script>
