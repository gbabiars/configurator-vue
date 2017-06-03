<template>
  <div class="checkbox" role="checkbox" :aria-checked="checked ? 'true' : 'false'" tabindex="0" @click="onChange">
  </div>
</template>

<script>
  export default {
    props: ['checked', 'onChange']
  }
</script>

<style scoped>
  .checkbox {
    display: block;
    height: 30px;
    width: 30px;
    border: 1px solid #cccccc;
    cursor: pointer;
  }
  .checkbox[aria-checked="true"] {
    background: #cccccc;
  }
</style>
