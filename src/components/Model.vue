<template>
  <div id="app">
    <header>
      <span>{{model.title}}</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
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
      model: {},
      config: {}
    }
  },
  created() {
    const params = this.$route.params
    const promises = [
      fetchModel(params),
      fetchConfig(params)
    ]
    Promise.all(promises).then(([model, config]) => {
      this.model = model
      this.config = config
    })
  }
}
</script>

<style>

</style>
