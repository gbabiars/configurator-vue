<template>
  <div>
    Index
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: mapState({
    steps: state => state.model.steps
  }),
  created() {
    this.$router.replace({ path: `${this.$route.path}/${this.steps[0].id}` })
  }
}
</script>

<style>

</style>
