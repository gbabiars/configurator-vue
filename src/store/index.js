import Vue from 'vue'
import Vuex from 'vuex'
import {
  fetchModel,
  fetchConfig,
  fetchConfigWithParams,
  fetchConfigWithToggledOption,
  fetchConfigWithState
} from '../api/index'

Vue.use(Vuex)

const saveStateToLocalStorage = params => config => {
  const { brand, year, carline, model } = params;
  localStorage.setItem(`${brand}.${year}.${carline}.${model}.ss`, config.ss);
  localStorage.setItem(`${brand}.${year}.${carline}.${model}.style`, config.selections.style);
  return config;
};

const getStateFromLocalStorage = ({ brand, year, carline, model }) => {
  return {
    ss: localStorage.getItem(`${brand}.${year}.${carline}.${model}.ss`),
    style: localStorage.getItem(`${brand}.${year}.${carline}.${model}.style`)
  }
};

export default new Vuex.Store({
  state: {
    config: {},
    model: {}
  },
  computed: {

  },
  mutations: {
    fetchInitialSuccess(state, { model, config }) {
      state.model = model;
      state.config = config;
    },
    updateConfigSuccess(state, { config }) {
      state.config = config;
    },
    updateWithOptionSuccess(state, { config }) {
      state.config = config;
    }
  },
  actions: {
    fetchInitial({ state, commit }) {
      const params = state.route.params;
      const cache = getStateFromLocalStorage(params);

      let configPromise;

      if(cache.ss && cache.style) {
        configPromise = fetchConfigWithState({ ...params, ...cache });
      } else {
        configPromise = fetchConfig(params);
      }

      const promises = [
        fetchModel(params),
        configPromise.then(saveStateToLocalStorage(params))
      ]
      return Promise.all(promises)
        .then(([model, config]) => commit('fetchInitialSuccess', { model, config }))
    },
    updateConfig({ state, commit }, { type, option }) {
      const { brand, year, carline, model } = state.route.params;
      const { style, driveType, bodyType, engine, transmission, axleRatio } = state.config.selections;
      const apiParams = {
        brand,
        year,
        carline,
        model,
        style,
        driveType,
        bodyType,
        engine,
        transmission,
        axleRatio,
        ...{[type]: option.id}
      };
      return fetchConfigWithParams(apiParams)
        .then(saveStateToLocalStorage(state.route.params))
        .then(config => commit('updateConfigSuccess', { config }));
    },
    updateWithOption({ state, commit }, option) {
      const { brand, year, carline, model } = state.route.params;
      const { style } = state.config.selections;
      const { ss } = state.config;

      return fetchConfigWithToggledOption({ brand, year, carline, model, style, ss },  option)
        .then(saveStateToLocalStorage(state.route.params))
        .then(config => commit('updateWithOptionSuccess', { config }));
    }
  }
})
