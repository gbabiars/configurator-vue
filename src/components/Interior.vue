<template>
  <div>
    <h3>Interior</h3>
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
import sortBy from 'lodash/sortBy';

const sortArray = ['radio', 'options', 'safety'];

export default {
  computed: mapState({
    groups: state => sortBy(state.config.lists.interior, x => sortArray.indexOf(x.id))
  })
}
</script>

<style>

</style>
