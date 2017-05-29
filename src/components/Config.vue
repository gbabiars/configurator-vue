<template>
  <div>
    Config
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    config: state => state.config
  })
}
</script>

<style>

</style>
