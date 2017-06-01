<template>
  <nav>
    <router-link v-for="step in steps" :key="step.id" :to="step.id">
      {{step.id}}
    </router-link>
  </nav>
</template>

<script>
export default {
  props: ['steps']
}
</script>

<style>

</style>
