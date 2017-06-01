<template>
  <div>
    <h3>Colors</h3>
    <section>
      <h4>Exterior ({{exteriorCount}})</h4>
      <ul v-for="group in exterior">
        <li>
          <span>{{group.id}}</span>
        </li>
        <li v-for="option in group.options">
          <span v-html="option.description"></span>
        </li>
      </ul>
    </section>
    <section>
      <h4>Interior ({{interiorCount}})</h4>
      <ul v-for="group in interior">
        <li>
          <span>{{group.id}}</span>
        </li>
        <li v-for="option in group.options">
          <span v-html="option.description"></span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    interior: state => state.config.lists.interiorColors,
    exterior: state => state.config.lists.exteriorColors,
    interiorCount: state => Object.keys(state.config.entities.interiorColors).length,
    exteriorCount: state => Object.keys(state.config.entities.exteriorColors).length
  })
}
</script>

<style>

</style>
