<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import HeaderView from '@/components/Header.vue'

export default Vue.extend({
  name: 'App',
  components: {
    HeaderView
  }
})
</script>
