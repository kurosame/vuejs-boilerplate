<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
/* tslint:disable:prettier */
// TODO: https://github.com/kurosame/vuejs-boilerplate/issues/1
/* tslint:enable:prettier */
import HeaderView from '@/components/globals/Header.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  components: {
    HeaderView
  }
})
</script>
