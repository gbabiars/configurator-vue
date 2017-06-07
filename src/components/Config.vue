<template>
  <div>
    <h3>Config</h3>
    <section>
      <h4>Body Type ({{bodyTypes.length}})</h4>
      <ul>
        <li v-for="bodyType in bodyTypes">
          <option-checkbox :option="bodyType" :on-change="onBodyTypeChange"></option-checkbox>
          {{bodyType.formattedConfig}}
        </li>
      </ul>
    </section>
    <section>
      <h4>Drive Type ({{driveTypes.length}})</h4>
      <ul>
        <li v-for="driveType in driveTypes">
          <option-checkbox :option="driveType" :on-change="onDriveTypeChange"></option-checkbox>
          {{driveType.id}}
        </li>
      </ul>
    </section>
    <section>
      <h4>Engine ({{engines.length}})</h4>
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
    bodyTypes: state => state.config.lists.bodyTypes,
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
      this.update({ type: 'engine', option });
    },
    onBodyTypeChange(option) {
      this.update({ type: 'bodyType', option });
    },
    onDriveTypeChange(option) {
      this.update({ type: 'driveType', option });
    }
  }
}
</script>

<style>

</style>
