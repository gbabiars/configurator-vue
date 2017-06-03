<template>
  <div>
    <h3>Colors</h3>
    <section>
      <h4>Exterior ({{exteriorCount}})</h4>
      <ul v-for="group in exterior">
        <li>
          <span>{{group.id}}</span>
        </li>
        <list-option v-for="option in group.options" :key="option.id" :option="option" :on-change="update">
        </list-option>
      </ul>
    </section>
    <section>
      <h4>Interior ({{interiorCount}})</h4>
      <ul v-for="group in interior">
        <li>
          <span>{{group.id}}</span>
        </li>
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
    interior: state => state.config.lists.interiorColors,
    exterior: state => state.config.lists.exteriorColors,
    interiorCount: state => Object.keys(state.config.entities.interiorColors).length,
    exteriorCount: state => Object.keys(state.config.entities.exteriorColors).length
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
