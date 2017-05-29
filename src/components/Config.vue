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
      <h4>Body Type ({{driveTypes.length}})</h4>
      <ul>
        <li v-for="driveType in driveTypes">
          {{driveType.id}}
        </li>
      </ul>
    </section>
    <section>
      <h4>Body Type ({{engines.length}})</h4>
      <ul>
        <li v-for="engine in engines">
          <span v-html="engine.description"></span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    bodyTypes: state => state.config.lists.bodyTypes,
    driveTypes: state => state.config.lists.driveTypes,
    engines: state => state.config.lists.engines
  })
}
</script>

<style>

</style>
