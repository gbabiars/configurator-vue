<template>
  <div>
    <h3>Config</h3>
    <section>
      <h4>Body Type ({{bodyTypes.length}})</h4>
      <ul>
        <li v-for="bodyType in bodyTypes">
          {{bodyType.formattedConfig}}
        </li>
      </ul>
    </section>
    <section>
      <h4>Drive Type ({{driveTypes.length}})</h4>
      <ul>
        <li v-for="driveType in driveTypes">
          {{driveType.id}}
        </li>
      </ul>
    </section>
    <section>
      <h4>Engine ({{engines.length}})</h4>
      <ul>
        <list-option v-for="engine in engines" :key="engine.id" :option="engine">
        </list-option>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListOption from './ListOption.vue';

export default {
  computed: mapState({
    bodyTypes: state => state.config.lists.bodyTypes,
    driveTypes: state => state.config.lists.driveTypes,
    engines: state => state.config.lists.engines
  }),
  components: {
    'list-option': ListOption
  }
}
</script>

<style>

</style>
