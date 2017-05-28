<template>
  <div>
    <h3>{{model.title}}</h3>
  </div>
</template>

<script>
function fetchModel({ brand, year, carline, model }) {
  return fetch(`/byo-vc/api/v2/bodystyle/resources/en/US/${brand}/${carline}/${year}/${model}`)
    .then(res => res.json())
    .then(data => {
      return {
        title: data.bodyStyleTitle,
        vehicleType: data.featureGroup
      }
    })
}

function fetchConfig({ brand, year, carline, model }) {
  return fetch(`/byo-vc/services/fullyConfigured/US/en/${brand}/${year}/${carline}/${model}`)
    .then(res => res.json())
    .then(data => data)
}

export default {
  data() {
    return {
      model: {}
    }
  },
  created() {
    const params = this.$route.params;
    fetchModel(params).then(data => {
      this.model = data;
    })
    fetchConfig(params).then(data => {
      this.config = data;
    })
  }
}
</script>

<style>

</style>
