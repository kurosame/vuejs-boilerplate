<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderView from './components/globals/Header/Header'

export default {
  components: {
    HeaderView
  }
}
</script>
