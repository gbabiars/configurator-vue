<template>
  <div id="app">
    <header>
      <span>{{model.title}}</span>
    </header>
    <main v-if="isLoaded">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      isLoaded: false
    }
  },
  computed: mapState({
    model: state => state.model,
    config: state => state.config
  }),
  created() {
    this.fetch(this.$route.params).then(_ => {
      this.isLoaded = true
    })
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
