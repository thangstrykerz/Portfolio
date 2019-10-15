import api from '@/api'
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    item: null,
    loading: false,
    error: null
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload
    },
    setItem(state, payload) {
      state.item = payload
    },
    loading: state => {
      state.loading = true
      state.error = null
    },
    loaded: state => (state.loading = false),
    setError: (state, payload) => (state.error = payload)
  },
  actions: {
    async getItems({ commit }, payload) {
      commit('loading')
      try {
        const response = await api.get(payload)
        const items = response.data.records
        commit('setItems', items)
      } catch(err){
          if (!err.response) return commit('setError', new Error('Network Error'))

          const { data, error } = err.response.data

          commit('setError', { message: error, data })
      } finally {
        commit('loaded')
      }
    },
    async getItem({ commit }, payload) {
      commit('loading')
      try {
        const response = await api.get(payload)
        const item = response.data.records

        if(item.length === 0) {
          commit('setError', new Error('Not Found'))
          return
        }
        commit('setItem', item[0].fields)

      } catch(err){
          if (!err.response) return commit('setError', new Error('Network Error'))

          const { data, error } = err.response.data

          commit('setError', { message: error, data })
      } finally {
        commit('loaded')
      }
    }
  }
});
