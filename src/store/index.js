import Vue from 'vue'
import Vuex from 'vuex'
import { fetchModel, fetchConfig, fetchConfigWithParams, fetchConfigWithToggledOption } from '../api/index'

Vue.use(Vuex)

const saveStateToLocalStorage = params => config => {
  const { brand, year, carline, model } = params;
  localStorage.setItem(`${brand}.${year}.${carline}.${model}.ss`, config.ss);
  return config;
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
      const promises = [
        fetchModel(params),
        fetchConfig(params).then(saveStateToLocalStorage(params))
      ]
      return Promise.all(promises).then(([model, config]) =>
        commit('fetchInitialSuccess', { model, config }))
    },
    updateConfig({ state, commit }, options) {
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
        ...options
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
