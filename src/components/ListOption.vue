<template>
  <li>
    <option-checkbox :option="option" :on-change="onChange"></option-checkbox>
    <span v-html="option.description"></span>
  </li>
</template>

<script>
  import Checkbox from './Checkbox.vue';

  export default {
    props: ['option', 'onChange'],
    components: {
      'option-checkbox': Checkbox
    }
  }
</script>

<style>

</style>
