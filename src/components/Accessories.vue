<template>
  <div>
    <h3>Accessories</h3>
    <section v-for="group in groups">
      <h4>{{group.id}} ({{group.options.length}})</h4>
      <ul>
        <list-option v-for="option in group.options" :key="option.id" :option="option" :on-change="update">
        </list-option>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ListOption from './ListOption.vue';

export default {
  computed: mapState({
    groups: state => state.config.lists.accessories
  }),
  components: {
    'list-option': ListOption
  },
  methods: {
    ...mapActions({
      update: 'updateWithOption'
    })
  }
}
</script>

<style>

</style>
