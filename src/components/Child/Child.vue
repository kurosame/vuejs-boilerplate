<template src="./child.html"></template>
<style module lang="sass" src="./child.scss"></style>
<script>
export default {
  props: {
    addValue: {
      type: Function,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  }
}
</script>
