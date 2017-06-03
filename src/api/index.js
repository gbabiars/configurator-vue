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

export function fetchConfigWithParams({ brand, year, carline, model, style, driveType, bodyType, engine, transmission, axleRatio }) {
  const query = { styleId: style, driveType, bodyTypeId: bodyType, engine, transmission, axleRatio };
  const queryString = Object.keys(query)
    .filter(key => query[key] !== undefined)
    .map(key => `${key}=${query[key]}`)
    .join('&');

  return fetch(`/byo-vc/services/fullyConfigured/US/en/${brand}/${year}/${carline}/${model}?${queryString}`)
    .then(res => res.json())
    .then(data => normalizeFullConfig(data))
}

export function fetchConfigWithState({ brand, year, carline, model, style, ss }) {
  const url = `/byo-vc/services/retrieveConfiguration/${brand}/US/en/us/${style}?bodystyle=${model}&carline=${carline}&modelyear=${year}`;

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      ss
    })
  }).then(res => res.json())
    .then(data => normalizeFullConfig(data))
}

export function fetchConfigWithToggledOption({ brand, year, carline, model, style, ss }, { id }) {
  const url = `/byo-vc/services/toggleOptionData/${brand}/US/en/us/${style}?bodystyle=${model}&carline=${carline}&modelyear=${year}`;

  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      ss,
      rpo: id
    })
  }).then(res => res.json())
    .then(data => normalizeFullConfig(data))
}
