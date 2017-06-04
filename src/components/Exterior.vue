<template>
  <div>
    <h3>Exterior</h3>
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
import sortBy from 'lodash/sortBy';
import ListOption from './ListOption.vue';

const sortArray = ['wheels', 'tires', 'mechanical', 'options', 'safety'];

export default {
  computed: mapState({
    groups: state => sortBy(state.config.lists.exterior, x => sortArray.indexOf(x.id))
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
