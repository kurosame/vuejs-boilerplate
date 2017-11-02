<template src="./parent.html"></template>
<style module src="./parent.scss"></style>
<script>
import { mapActions, mapGetters } from 'vuex'
import {
  ADD_VALUE
} from '../../vuex/types'
import Child from '../../components/Child/Child'

export default {
  methods: {
    ...mapActions({
      addValue: ADD_VALUE
    })
  },
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  components: {
    Child
  }
}
</script>
