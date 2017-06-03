<template>
  <div id="app" v-if="isLoaded">
    <header>
      <span>{{model.title}} {{config.msrp.total}}</span>
      <x-nav :steps="model.steps"></x-nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Nav from './Nav.vue'

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
    this.fetch().then(_ => {
      this.isLoaded = true
    })
  },
  methods: {
    ...mapActions({
      fetch: 'fetchInitial'
    })
  },
  components: {
    'x-nav': Nav
  }
}
</script>

<style>

</style>
