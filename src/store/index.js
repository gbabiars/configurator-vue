import Vue from 'vue'
import Vuex from 'vuex'
import { fetchModel, fetchConfig } from '../api/index'

Vue.use(Vuex)

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
    }
  },
  actions: {
    fetchInitial({ commit }, params) {
      const promises = [
        fetchModel(params),
        fetchConfig(params)
      ]
      return Promise.all(promises).then(([model, config]) =>
        commit('fetchInitialSuccess', { model, config }))
    }
  }
})
