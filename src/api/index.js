import { normalizeFullConfig } from './normalize';

export function fetchModel({ brand, year, carline, model }) {
  return fetch(`/byo-vc/api/v2/bodystyle/resources/en/US/${brand}/${carline}/${year}/${model}`)
    .then(res => res.json())
    .then(data => {
      return {
        title: data.bodyStyleTitle,
        vehicleType: data.featureGroup,
        steps: data.processSteps.map(({ key, order }) => ({ id: key.toLowerCase(), order }))
      }
    })
}

export function fetchConfig({ brand, year, carline, model }) {
  return fetch(`/byo-vc/services/fullyConfigured/US/en/${brand}/${year}/${carline}/${model}`)
    .then(res => res.json())
    .then(data => normalizeFullConfig(data))
}
