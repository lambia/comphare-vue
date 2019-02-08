import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editingCell: null,
  },
  mutations: {
    changeEditing (state, payload) {
      state.editingCell = payload;
    },
  },
  actions: {
    
  }
})
