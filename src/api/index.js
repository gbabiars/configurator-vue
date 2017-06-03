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

export function fetchConfigWithParams(options) {
  const { brand, year, carline, model, style, driveType, bodyType, engine, transmission, axleRatio } = options;

  const query = { styleId: style, driveType, bodyTypeId: bodyType, engine, transmission, axleRatio };
  const queryString = Object.keys(query)
    .filter(key => query[key] !== undefined)
    .map(key => `${key}=${query[key]}`)
    .join('&');

  return fetch(`/byo-vc/services/fullyConfigured/US/en/${brand}/${year}/${carline}/${model}?${queryString}`)
    .then(res => res.json())
    .then(data => normalizeFullConfig(data))
}
