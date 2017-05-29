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
    bodyTypes: ({ config: { lists, entities } }) =>
      lists.bodyTypes.map(id => entities.bodyTypes[id]),
    driveTypes: ({ config: { lists, entities } }) =>
      lists.driveTypes.map(id => entities.driveTypes[id]),
    engines: ({ config: { lists, entities } }) =>
      lists.engines.map(id => entities.engines[id])
  })
}
</script>

<style>

</style>
