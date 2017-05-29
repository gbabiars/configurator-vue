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
    styles: state => state.config.lists.styles,
    driveTypes: state => state.config.lists.driveTypes,
    engines: state => state.config.lists.engines
  })
}
</script>

<style>

</style>
