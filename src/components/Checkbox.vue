<template>
  <div class="checkbox"
       role="checkbox"
       tabindex="0"
       :aria-checked="option.selected ? 'true' : 'false'"
       :class="{ 'checkbox--conflict': option.conflict }"
       @click="onOptionChange">
  </div>
</template>

<script>
  export default {
    props: ['option', 'onChange'],
    methods: {
      onOptionChange() {
        this.onChange(this.option);
      }
    }
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
  .checkbox--conflict {
    border-color: #ff0000;
  }
</style>
