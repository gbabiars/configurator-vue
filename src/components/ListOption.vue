<template>
  <li>
    <option-checkbox :checked="option.selected" :on-change="onOptionChange"></option-checkbox>
    <span v-html="option.description"></span>
  </li>
</template>

<script>
  import Checkbox from './Checkbox.vue';

  export default {
    props: ['option', 'onChange'],
    components: {
      'option-checkbox': Checkbox
    },
    methods: {
      onOptionChange() {
        this.onChange(this.option);
      }
    }
  }
</script>

<style>

</style>
