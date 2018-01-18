<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
@import '~normalize.css/normalize.css';
</style>
<script>
import HeaderView from './components/globals/Header/Header.vue'

export default {
  name: 'App',
  components: {
    HeaderView
  }
}
</script>
