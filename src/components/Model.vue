<template>
  <div id="app" v-if="isLoaded">
    <header>
      <span>{{model.title}} {{config.msrp.total}}</span>
    </header>
    <x-nav :steps="model.steps"></x-nav>
    <aside>
      <cgi-exterior-image></cgi-exterior-image>
      <cgi-interior-image></cgi-interior-image>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Nav from './Nav.vue'
import CgiExteriorImage from './CgiExteriorImage.vue';
import CgiInteriorImage from './CgiInteriorImage.vue';

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
    'x-nav': Nav,
    'cgi-exterior-image': CgiExteriorImage,
    'cgi-interior-image': CgiInteriorImage
  }
}
</script>

<style>

</style>
