<template>
  <div>
    <h3>Trims</h3>
    <section>
      <h4>Trim ({{styles.length}})</h4>
      <ul>
        <li v-for="style in styles">
          {{style.trimName}}
        </li>
      </ul>
    </section>
    <section v-if="isStylesOnly">
      <h4>Body Type ({{driveTypes.length}})</h4>
      <ul>
        <li v-for="driveType in driveTypes">
          {{driveType.id}}
        </li>
      </ul>
    </section>
    <section v-if="isStylesOnly">
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
    isStylesOnly: state => state.model.steps[0].id !== 'config',
    styles: ({ config: { lists, entities } }) =>
      lists.styles.map(id => entities.styles[id]),
    driveTypes: ({ config: { lists, entities } }) =>
      lists.driveTypes.map(id => entities.driveTypes[id]),
    engines: ({ config: { lists, entities } }) =>
      lists.engines.map(id => entities.engines[id])
  })
}
</script>

<style>

</style>
