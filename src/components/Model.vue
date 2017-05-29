<template>
  <div id="app">
    <header>
      <span>{{model.title}}</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {}
  },
  computed: mapState({
    model: state => state.model,
    config: state => state.config
  }),
  created() {
    this.fetch(this.$route.params)
  },
  methods: {
    ...mapActions({
      fetch: 'fetchInitial'
    })
  }
}
</script>

<style>

</style>
