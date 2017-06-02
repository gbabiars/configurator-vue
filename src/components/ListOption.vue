<template>
  <li>
    <span v-html="option.description"></span>
  </li>
</template>

<script>
  export default {
    props: ['option']
  }
</script>

<style>

</style>
