import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editingCell: null,
    fileArray: ["1234567890ABCDEF1234567890ABCDEF1234567890ABCDEF","ABCDEFGHIJKLMNOPQRSTUVZ","QWERTYUIOPASDFGHJKL"],
    fileIndex: 0,
    chunkSize: 2,
  },
  mutations: {
    changeEditing (state, payload) {
      state.editingCell = parseInt(payload);
    },
    changeFileIndex (state, payload) {
      state.fileIndex = parseInt(payload);
    },
    changeChunkSize (state, payload) {
      state.chunkSize = parseInt(payload);
    },
  },
  actions: {
    
  }
})
