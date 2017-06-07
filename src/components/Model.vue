<template>
  <div id="app" v-if="isLoaded">
    <header>
      <div>
        <span>{{model.title}} {{config.msrp.total}}</span>
      </div>
      <x-nav :steps="model.steps"></x-nav>
    </header>
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
  #app {
    display: grid;
    height: 100vh;
    grid-template-areas:
      "header header"
      "aside main";
    grid-template-columns: 3fr 2fr;
    grid-template-rows: auto 1fr;
  }

  header {
    grid-area: header;
    background-color: #cccccc;
    padding: 10px;
  }

  aside {
    grid-area: aside;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: auto;
  }

  main {
    grid-area: main;
    overflow-y: auto;
    padding: 0 10px;
  }
</style>
