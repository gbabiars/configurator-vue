<template>
  <div>
    <h3>Accessories</h3>
    <section v-for="group in groups">
      <h4>{{group.id}} ({{group.options.length}})</h4>
      <ul>
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
    groups: state => state.config.lists.accessories
  })
}
</script>

<style>

</style>
