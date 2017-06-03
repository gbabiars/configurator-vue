<template>
  <div>
    <h3>Trims</h3>
    <section>
      <h4>Trim ({{styles.length}})</h4>
      <ul>
        <li v-for="style in styles">
          <option-checkbox :option="style" :on-change="onStyleChange"></option-checkbox>
          {{style.trimName}}
        </li>
      </ul>
    </section>
    <section v-if="isStylesOnly">
      <h4>Body Type ({{driveTypes.length}})</h4>
      <ul>
        <li v-for="driveType in driveTypes">
          <option-checkbox :option="driveType" :on-change="onDriveTypeChange"></option-checkbox>
          {{driveType.id}}
        </li>
      </ul>
    </section>
    <section v-if="isStylesOnly">
      <h4>Body Type ({{engines.length}})</h4>
      <ul>
        <list-option v-for="engine in engines" :key="engine.id" :option="engine" :on-change="onEngineChange">
        </list-option>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ListOption from './ListOption.vue';
import Checkbox from './Checkbox.vue';

export default {
  computed: mapState({
    isStylesOnly: state => state.model.steps[0].id !== 'config',
    styles: state => state.config.lists.styles,
    driveTypes: state => state.config.lists.driveTypes,
    engines: state => state.config.lists.engines
  }),
  components: {
    'list-option': ListOption,
    'option-checkbox': Checkbox
  },
  methods: {
    ...mapActions({
      update: 'updateConfig'
    }),
    onEngineChange(option) {
      this.update({ engine: option.id });
    },
    onStyleChange(option) {
      this.update({ style: option.id });
    },
    onDriveTypeChange(option) {
      this.update({ driveType: option.id });
    }
  }
}
</script>

<style>

</style>
