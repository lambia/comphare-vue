import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fileArray: ["1234567890ABCDEF1234567890ABCDEF1234567890ABCDEF","ABCDEFGHIJKLMNOPQRSTUVZ","QWERTYUIOPASDFGHJKL"],
    fileIndex: 0,
    chunkSize: 2,
    rowChunks: 4,
  },
  mutations: {
    changeFileIndex (state, payload) {
      state.fileIndex = parseInt(payload);
    },
    changeChunkSize (state, payload) {
      state.chunkSize = parseInt(payload);
    },
    changeRowChunks (state, payload) {
      state.rowChunks = parseInt(payload);
    },
  },
  actions: {
    
  }
})
